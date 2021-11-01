using API.Helpers;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace API.Extensions
{
    //HTTP Extensions
    //================
    //Adding Pagination Header to HttpResponse Header
    public static class HttpExtensions
    {
        public static void AddPaginationHeader(this HttpResponse response, int currentPage, int itemsPerPage, int totalItems, int totalPages)
        {
            //PaginationHeader
            //-----------------
            var parginationHeader = new PaginationHeader(currentPage, itemsPerPage, totalItems, totalPages);

            //json response type (camelCase)
            var options = new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase
            };


            //Add PaginationHeader -> response
            //----------------------------------
            response.Headers.Add("Pagination", JsonSerializer.Serialize(parginationHeader));

            //Allow CORS ACCESS
            //------------------
            //Avoid CORS Error -> show header("Pagination")
            //using Access-Control-Expose-Headers
            response.Headers.Add("Access-Control-Expose-Headers", "Pagination");
        }
    }
}
