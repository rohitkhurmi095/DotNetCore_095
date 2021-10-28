using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    [Table("Photos")]
    public class Photo
    {
        //PhotoId
        public int Id { get; set; }
        
        //Url
        public string Url { get; set; }
        
        //Is this MainPhoto?
        public bool IsMain { get; set; }


        //**PublicId - From CLOUDINARY **
        public string PublicId { get; set; }


        //----- Navigation Properties -----
        
        //***** Fully Defined Relationship *****
        //many Photoes -> 1 User
        //Delete user -> Delete Photoes 
        public User User { get; set; }     
        public int UserId { get; set; }

    }
}
