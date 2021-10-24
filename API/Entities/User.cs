using API.Extensions;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    [Table("Users")]
    public class User
    {
        //Id
        public int UserId { get; set; }
        
        //Name
        public string UserName { get; set; }

        //Password(for Authentication)
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

        //Gender
        public string Gender { get; set; }

        //BirthDate - to calculate Age
        public DateTime DateOfBirth { get; set; }

        //KnownAs
        public string KnownAs { get; set; }


        //City
        public string City { get; set; }

        //Country
        public string Country { get; set; }


        //CreatedOn
        public DateTime Created { get; set; } = DateTime.Now;

        //LastActive
        public DateTime LastActive { get; set; } = DateTime.Now;


        //Introduction
        public string Introduction { get; set; }

        //Interests
        public string Interests { get; set; }

        //LookingFor
        public string LookingFor { get; set; }



        //----- NAVIGATION PROPERTIES -----
        //Photos(1 user -> many Photoes)
        public ICollection<Photo> Photos { get; set; }




        //METHOD TO CALCULATE AGE
        //-----------------------
        //Calculate age based on DateOfBirth
        //Calculate Age using extension method
        //Mapped as Age in MemberDto (using AutoMapper)
        /*public int GetAge()
        {
            return DateOfBirth.calculateAge();
        }*/
    }
}
