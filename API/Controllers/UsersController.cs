using API.Data;
using API.Data.Repositories;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    //Authorize all methods inside this controller
    [Authorize]
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
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
        {
            var users = await _userRepository.GetUsersAsync();

            //Mapping MapperDto <-> UserEntities using IMapper (via AutoMapper)
            var usersToReturn = _mapper.Map<IEnumerable<MemberDto>>(users);

            //return users (members Dto)
            return Ok(usersToReturn);
        }


        //_________________
        // GET User by name
        //_________________
        [HttpGet("{username}")]
        public async Task<ActionResult<MemberDto>> GetUser(string username)
        {
            var user = await _userRepository.GetUserByUsernameAsync(username);


            //Mapping MapperDto <-> UserEntities using IMapper (via AutoMapper)
            var userToReturn = _mapper.Map<MemberDto>(user);

            //return User(MemberDto)
            return userToReturn;

        }


    }
}
