using API.Data;
using API.Data.Repositories;
using API.DTOs;
using API.Entities;
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
        public UsersController(IUserRepository userRepository, IMapper mapper)
        {
            //user repository
            _userRepository = userRepository;

            //IMapper interface
            _mapper = mapper;
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
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MemberDto>>> GetMembers()
        {
            var users = await _userRepository.GetMembersAsync();
            return Ok(users);
        }


        //=====================
        //Get User by username
        //=====================
        [HttpGet("{username}")]
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
            //GET username from authenticated user token
            //------------
            //ClaimTypes = info about identity
            var username = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            //Get User by username
            //--------
            var user = await _userRepository.GetUserByUsernameAsync(username);

            //Update mapping properties
            //--------------------------
            //Eg: user.City = MemberUpdateDto.City 
            //Done Automatically using Automapper
            //MAP memberUpdateDto <-> User
            _mapper.Map(memberUpdateDto,  user);

            //UPDATE User
            //------------
            _userRepository.Update(user);

            //IF user updated => return NoContent(status = 204)
            if(await _userRepository.SaveAllAsync()){return NoContent();}
            //Else return BadRequest()
            return BadRequest("Failed to update user!");
        }

    }
}
