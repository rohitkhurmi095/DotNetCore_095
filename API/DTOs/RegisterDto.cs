using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    //Input for Register
    public class RegisterDto
    {
        //UserName
        [Required(ErrorMessage = "UserName can't be empty!")]
        public string UserName { get; set; }

        //Password (ConfirmPassword is for ClientSide only
        [Required(ErrorMessage = "Password can't be empty")]
        public string Password { get; set; }

        //DateOfBirth {YYYY MM DD (from Registration Form)}
        [Required]
        public DateTime DateOfBirth { get; set; }

        //Gender
        [Required]
        public string Gender { get; set; }

        //City
        [Required]
        public string City { get; set; }

        //Country
        [Required]
        public string Country { get; set; }

        //KnownAs
        [Required]
        public string KnownAs { get; set; }

        /*Note: during registration
        PhotoUrl = not required
        returned from userDto (as null)
        SET Photo once account has been created*/
    }
}
