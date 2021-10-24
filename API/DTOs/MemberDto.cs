using API.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    //(Dto's For AutoMapper)
    //USE AUTOMAPPER TO MAP: MemberDto <-> UserEntity
    //return MemberDto instead of UserEntity
    //------------------------------------------------
    public class MemberDto
    {
        //Id
        public int UserId { get; set; }

        //Name
        public string Username { get; set; }

        //Gender
        public string Gender { get; set; }

        //Age (mapped from GetAge())
        public int Age { get; set; }

        //KnownAs
        public string KnownAs { get; set; }

        //City
        public string City { get; set; }

        //Country
        public string Country { get; set; }


        //CreatedOn
        public DateTime Created { get; set; }

        //LastActive
        public DateTime LastActive { get; set; }


        //Introduction
        public string Introduction { get; set; }

        //Interests
        public string Interests { get; set; }

        //LookingFor
        public string LookingFor { get; set; }


        //***** Main Photo Url *****(Main Photo From Photos Collection)
        //Mapped using ForMember(what property to map,where to map from) in AutoMapperProfiles
        public string PhotoUrl { get; set; }

        //----- NAVIGATION PROPERTIES -----
        //Photos(1 user -> many Photoes) - Photos Collection
        public ICollection<PhotoDto> Photos { get; set; }


    }
}
