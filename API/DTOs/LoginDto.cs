using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    //Input for Login
    public class LoginDto
    {
        //UserName
        [Required(ErrorMessage = "UserName can't be empty!")]
        public string UserName { get; set; }

        //Password
        [Required(ErrorMessage = "Password can't be empty")]
        public string Password { get; set; }
    }
}
