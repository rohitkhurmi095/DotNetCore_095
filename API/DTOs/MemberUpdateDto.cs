using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class MemberUpdateDto
    {
        //Introduction
        public string Introduction { get; set; }
        
        //LookingFor
        public string LookingFor { get; set; }

        //Interests
        public string Interests { get; set; }

        //Location
        public string City { get; set; }
        public string Country { get; set; }
    }
}
