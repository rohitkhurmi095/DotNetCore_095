using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    //(Dto's For AutoMapper)
    //USE AUTOMAPPER TO MAP: PhotoDto <-> PhotoEntity
    //------------------------------------------------
    public class PhotoDto
    {
        //PhotoId
        public int Id { get; set; }

        //Url
        public string Url { get; set; }

        //Is this MainPhoto?
        public bool IsMain { get; set; }

    }
}
