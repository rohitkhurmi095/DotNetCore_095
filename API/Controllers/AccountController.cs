﻿using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
//CryptoGraphy
using System.Security.Cryptography;
using System.Text;
using Microsoft.EntityFrameworkCore;
using API.Interfaces;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        //--------------------------------------
        //Dependency Injection -> Constructor
        //--------------------------------------
        private readonly DataContext _context;  //DbContext
        private readonly ITokenService _tokenService;  //TokenService
        public AccountController(DataContext context,ITokenService tokenService)
        {
            _context = context;
            _tokenService = tokenService;
        }

        //---------------
        //Helper Method
        //---------------
        //Check if UserName already exists in Database
        private async Task<bool> UserExists(string UserName)
        {
            //compare UserName in Db & Enterd(UserName) (both in lowerCase)
            return await _context.Users.AnyAsync(x => x.UserName == UserName.ToLower());
        }


        //===========
        // REGISTER
        //===========
        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {
            //CHECK if UserName already exists in Db
            //--------------------------------
            if (await UserExists(registerDto.UserName))
            {
                return BadRequest("UserName already exists!");
            }


            //If UserName don't exists => CREATE User
            //-------------------------
            //Password Hasing Process
            //using = dispose unmanage resources after we have used this class
            //Password Hash Algo (Created new Random Computed Hash)
            using var hmac = new HMACSHA512();

            var user = new User
            {
                //UserName(stored in lowerCase in Db)
                UserName = registerDto.UserName.ToLower(),
                //Password (hashed Password(byte[]) + generate PasswordSalt(Key))
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
                PasswordSalt = hmac.Key
            };

            //Add User to Db + SaveChanges()
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            //Return UserDto(UserName+Token)
            return new UserDto
            {
                UserName = user.UserName,
                Token = _tokenService.CreateToken(user)
            };
        }





        //=========
        // LOGIN
        //=========
        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            //FIND User in Database 
            //----------------------
            var user = await _context.Users.SingleOrDefaultAsync(x => x.UserName == loginDto.UserName);

            //If User does not exists => Invalid UserName
            //-----------------------
            if (user == null)
            {
                return Unauthorized("Invalid UserName!");
            }

            //--------------------
            //If User exists in Db => Match Passwords
            //---------------------
            //Password Match => matching byte[]

            //Password Hashing Process
            //using = dispose unmanage resources after we have used this class
            //1.PasswordHashAlog -> pass PasswordSalt = getComputed Hash Of Password from Db (byte[])
            using var hmac = new HMACSHA512(user.PasswordSalt);

            //2.Get Computed Hash of password user Enters (byte[])
            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));

            //3.Match ComputedHash of Passwords(From Db & UserEntered)
            //To Compare PasswordHashes -> loop bytes[]
            for (int i = 0; i < computedHash.Length; i++)
            {
                //If bytes[i] not matched => Invalid Password
                if (computedHash[i] != user.PasswordHash[i])
                {
                    return Unauthorized("Invalid Password");
                }
            }


            //IfValidPassword => return UserDto(UserName+Token)
            return new UserDto
            {
                UserName = user.UserName,
                Token = _tokenService.CreateToken(user)
            };
        }
    }
}