﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    //Shown as output for Login/Register
    public class UserDto
    {
        //UserName
        public string UserName { get; set; }

        //JwtToken
        public string Token { get; set; }
    }
}