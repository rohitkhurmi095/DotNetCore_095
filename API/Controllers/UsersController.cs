using API.Data;
using API.Data.Repositories;
using API.Entities;
using API.Interfaces;
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
        private readonly IUserRepository _userRepository;
        public UsersController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }


        //_______________
        // GET All Users
        //_______________
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            var users = await _userRepository.GetUsersAsync();
            return Ok(users);
        }


        //________________
        // GET User by Id
        //________________
        //Need to Pass JWT in header as Authorization:Bearer Token
        [HttpGet("id/{id}")]
        public async Task<ActionResult<User>> GetUser(int Id)
        {
            return await _userRepository.GetUserByIdAsync(Id);
        }



        [HttpGet("name/{username}")]
        public async Task<ActionResult<User>> GetUser(string username)
        {
            return await _userRepository.GetUserByUsernameAsync(username);
        }


    }
}
