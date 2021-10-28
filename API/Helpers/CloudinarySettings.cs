using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Helpers
{
    //StrongType for CloudinarySettings
    //----------------------------------
    public class CloudinarySettings
    {
        //CloudName
        public string CloudName { get; set; }
        
        //ApiKey
        public string ApiKey { get; set; }
        
        //ApiSecret
        public string ApiSecret { get; set; }
    }
}
