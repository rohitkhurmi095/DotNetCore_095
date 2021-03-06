using API.Data;
using API.Data.Repositories;
using API.DTOs;
using API.Entities;
using API.Extensions;
using API.Helpers;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    //Authorize all methods inside this controller
    [Authorize]
    //LogUserActivity ActionFilter
    [ServiceFilter(typeof(LogUserActivity))]
    //Allow CORS Sharing
    [EnableCors()]
    public class UsersController : ControllerBase
    {

        //--------------------------------------
        //Repository object -> To Query Database
        //--------------------------------------
        //UserRepository
        private readonly IUserRepository _userRepository;

        //AutoMapper -> IMapper Interface
        //_mapper.Map<What to map>(source of mapping);
        private readonly IMapper _mapper;

        //PhotoService
        private readonly IPhotoService _photoService;
        public UsersController(IUserRepository userRepository, IMapper mapper, IPhotoService photoService)
        {
            //user repository
            _userRepository = userRepository;

            //IMapper interface
            _mapper = mapper;

            //IPhoto service
            _photoService = photoService;
        }


        //_______________
        // GET All Users
        //_______________
        /*[HttpGet]
        public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
        {
            var users = await _userRepository.GetUsersAsync();

            //Mapping MapperDto <-> UserEntities using IMapper (via AutoMapper)
            var usersToReturn = _mapper.Map<IEnumerable<MemberDto>>(users);

            //return users (members Dto)
            return Ok(usersToReturn);
        }*/


        //_________________
        // GET User by name
        //_________________
        /*[HttpGet("{username}")]
        public async Task<ActionResult<MemberDto>> GetUser(string username)
        {
            var user = await _userRepository.GetUserByUsernameAsync(username);


            //Mapping MapperDto <-> UserEntities using IMapper (via AutoMapper)
            var userToReturn = _mapper.Map<MemberDto>(user);

            //return User(MemberDto)
            return userToReturn;

        }*/




        //*************************************************
        //Using AutoMapper Querable extensions - MemberDto
        //*************************************************
        //ProjectTo<Dto>(_mapper.ConfigurationProvider)
        //ConfigurationProvider = AutoMapperProfile configurations (Helpers Folder)



        //==========
        //Get Users
        //==========
        //pass UserParams as QueryParams to controller => using [fromQuery]

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MemberDto>>> GetMembers([FromQuery] UserParams userParams)
        {

            //___________
            //FILTRATION
            //===========
            //1.Populate CurrentUsername -> userParams
            //*****************************************
            //when user login 
            //GET username from authenticated user token(claims)
            //------------
            //ClaimTypes = info about identity
            var username = User.FindFirst(ClaimTypes.Name)?.Value;

            //Get User by username
            //--------
            var user = await _userRepository.GetUserByUsernameAsync(username);

            //Populate username -> userParams
            userParams.CurrentUsername = user.UserName;


            //2.Get opposite Gender of the CurrentUser Gender (to search)
            //***********************************************
            if (string.IsNullOrEmpty(userParams.Gender))
            {
                userParams.Gender = user.Gender == "male" ? "female" : "male";
            }

           
            //QueryParams passed to UserRepository
            //-------------------------------------
            //RETURNS PagedList of users -> access (PageSize,TotalPages,TotalCount,CurrentPage) + set in PaginationHeader
            var users = await _userRepository.GetMembersAsync(userParams);

            //Add PaginationHeader to response
            //----------------------------------
            //using PaginationHeader Class Constructor - AddPaginationHeader(totalItems,totalCount,currentPage,itemsPerPage)
            //values passes to constructor are assessed using users
            Response.AddPaginationHeader(users.CurrentPage, users.PageSize, users.TotalCount, users.TotalPages);

            return Ok(users);
        }


        //=====================
        //Get User by username
        //=====================
        [HttpGet("{username}", Name="GetUser")]
        public async Task<ActionResult<MemberDto>> GetMember(string username)
        {
            return await _userRepository.GetMemberAsync(username);
        }


        //============
        //Update User
        //============
        [HttpPut]
        public async Task<ActionResult> UpdateMember(MemberUpdateDto memberUpdateDto)
        {
            //when user login 
            //GET username from authenticated user token(claims)
            //------------
            //ClaimTypes = info about identity
            var username = User.FindFirst(ClaimTypes.Name)?.Value;

            //Get User by username
            //--------
            var user = await _userRepository.GetUserByUsernameAsync(username);

            //Update mapping properties
            //--------------------------
            //Eg: user.City = MemberUpdateDto.City 
            //Done Automatically using Automapper
            //MAP memberUpdateDto <-> User
            _mapper.Map(memberUpdateDto, user);

            //UPDATE User
            //------------
            _userRepository.Update(user);

            //IF user updated => return NoContent(status = 204)
            if (await _userRepository.SaveAllAsync()) { return NoContent(); }
            //Else return BadRequest()
            return BadRequest("Failed to update user!");
        }





        //===============
        //UPLOAD Photo
        //===============
        [HttpPost("add-photo")]
        public async Task<ActionResult<PhotoDto>> AddPhoto(IFormFile file)
        {
            //when user login 
            //GET username from authenticated user token(claims)
            //------------
            //ClaimTypes = info about identity
            var username = User.FindFirst(ClaimTypes.Name)?.Value;

            //Get User by username
            //--------
            var user = await _userRepository.GetUserByUsernameAsync(username);

            //UPLOAD PHOTO
            //**************
            //result = photo Object 
            var result = await _photoService.AddPhotoAsync(file);

            //if error -> ErrorMessage
            if (result.Error != null) return BadRequest(result.Error.Message);

            //else -> CREATE Photo
            var photo = new Photo
            {
                //url
                Url = result.SecureUrl.AbsoluteUri,
                //publicId (Cloudinary)
                PublicId = result.PublicId
            };

            //CHECK if user Photos[] does not have photo => set photo as MainPhoto
            if (user.Photos.Count == 0)
            {
                photo.IsMain = true;
            }

            //Add Photo to User(Photos[])
            user.Photos.Add(photo);

            //save changes - true/false (if image is uploaded) 
            //await _userRepository.SaveAllAsync()
            //if imageUploaded => map PhotoDto<->PhotoEntity => return photo
            if (await _userRepository.SaveAllAsync())
            {
                //return photo (Mapping PhotoDto <-> Photo) 
                //return _mapper.Map<PhotoDto>(photo);

                //CreatedAtRoute() 
                //SETs StatusCode: 201 created
                //Location:'/api/Users/username' in Header
                return CreatedAtRoute("GetUser",new {username = user.UserName}, _mapper.Map<PhotoDto>(photo));
            }
            //else error
            return BadRequest("Problem Uploading Photo!");
        }



        //===============
        //SET Main Photo
        //===============
        //Set Photo as mainPhoto from Photos[]
        [HttpPut("set-main-photo/{photoId}")]
        public async Task<ActionResult> SetMainPhoto(int photoId)
        {
            //when user login 
            //GET username from authenticated user token(claims)
            //------------
            var username = User.FindFirst(ClaimTypes.Name)?.Value;

            //Get User by username
            //--------
            var user = await _userRepository.GetUserByUsernameAsync(username);


            //GET LoggedInUser + Find Photo by Id in user(Photos[])
            //------------------------------------
            var photo = user.Photos.FirstOrDefault(x => x.Id == photoId);

            //CHECK If Photo Found is mainPhoto
            //---------------------------------
            //IF PhotoFound is mainPhoto -> Error(Already mainPhoto)
            if (photo.IsMain) { return BadRequest("This is already your main Photo"); }

            //ELSE -> Find currentMain Photo,
            //If currentMainPhoto is there => Set CurrentPhoto(PhotoFound) as mainPhoto
            //Else error (NoCurrentMainPhoto)
            var currentMainPhoto = user.Photos.FirstOrDefault(x=>x.IsMain);
            if(currentMainPhoto != null)
            {   
                //SET currentMainPhoto to not main
                currentMainPhoto.IsMain = false;
                //Set photo found to main
                photo.IsMain = true;
            }

            //SaveChanges
            //------------
            //success
            if(await _userRepository.SaveAllAsync()) { return NoContent(); }
            //error
            return BadRequest("Failed to set main Photo");
        }




        //===============
        // DELETE  Photo
        //===============
        //Set Photo as mainPhoto from Photos[]
        [HttpDelete("delete-photo/{photoId}")]
        public async Task<ActionResult> DeletePhoto(int photoId)
        {
            //when user login 
            //GET username from authenticated user token(claims)
            //------------
            var username = User.FindFirst(ClaimTypes.Name)?.Value;

            //Get User by username
            //--------
            var user = await _userRepository.GetUserByUsernameAsync(username);

            //GET PHOTO by Id
            //----------------
            var photo = user.Photos.FirstOrDefault(x => x.Id == photoId);

            //if photo is notFound!
            if(photo == null){return NotFound();}

            //If photo is mainPhoto => cannot delete mainPhoto
            if (photo.IsMain){return BadRequest("You cannot delete your main photo!");}

            //DELETE Photo from Cloudinary
            //****************************
            //Delete photo from cloudinary via 'publicId'
            if(photo.PublicId != null)
            {
                var result = await _photoService.DeletePhotoAsync(photo.PublicId);

                //if success => delete photo from user Photo[]
                //if error => show error message
                if (result.Error != null) { return BadRequest(result.Error.Message); }
            }

            //Delete Photo from user PhotoCollection[]
            //*****************************************
            user.Photos.Remove(photo);

            //SaveChanges
            //------------
            //success
            if(await _userRepository.SaveAllAsync()) { return Ok(); }
            //error
            return BadRequest("Failed to delte photo!");

        }
    }

}
