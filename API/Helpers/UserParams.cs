using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace API.Helpers
{
    /* POSTMAN
       --------
       Add query Params
       GET: /api/users?pageSize=5&pageNumber=1 */

    //Passed as *****[ QueryParams ]***** to HttpRoute(Controller)
    public class UserParams
    {

        //Define PAGINATION Settings
        //---------------------------
        //MaxPageSize
        private const int MaxPageSize = 50;

        //DefaultPageSize +  Adjust PageSize based on MaxPageSize
        private int _pageSize = 5;
        public int PageSize { get => _pageSize; set => _pageSize = value > MaxPageSize ? MaxPageSize : value; }

        //DefaultPageNumber = 1
        public int PageNumber { get; set; } = 1;


        //CurrentUser
        //-----------
        //currentUsername
        public string CurrentUsername { get; set; }

        //Gender
        //--------
        //Opposite Gender of currentUser to be searched
        public string Gender { get; set; }

        //---- Age ---------
        //MinAge
        public int minAge { get; set; } = 18;
        //MaxAge
        public int maxAge { get; set; } = 90;

        //----- OrderBy -----
        //{Created,LastActive(Default}
        //DEFAULT
        public string OrderBy { get; set; } = "lastActive";
    }
}
