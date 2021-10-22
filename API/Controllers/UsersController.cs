using API.Data;
using API.Entities;
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
        //DataContext object -> To Query Database
        //--------------------------------------
        private readonly DataContext _context;
        public UsersController(DataContext context)
        {
            _context = context;
        }

        //_______________
        // GET All Users
        //_______________
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            var users = await _context.Users.ToListAsync();
            return Ok(users);
        }


        //________________
        // GET User by Id
        //________________
        //Need to Pass JWT in header as Authorization:Bearer Token
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int Id)
        {
            return await _context.Users.FindAsync(Id);
        }
    }
}
