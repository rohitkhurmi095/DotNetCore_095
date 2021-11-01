using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Helpers
{
    //==================
    //Pagination Header
    //==================
    //Information we want to sent back to client
    //PaginationHeader to be added with Response of HttpRequest
    public class PaginationHeader
    {
        //------------
        //Properties
        //------------
        //CurrentPage
        public int CurrentPage { get; set; }
        //ItemsperPage
        public int ItemsPerPage { get; set; }
        //TotalItems (No.of.Items in query)
        public int TotalItems { get; set; }
        //TotalPages
        public int TotalPages { get; set; }


        //------------
        //Constructor
        //------------
        public PaginationHeader(int currentPage,int itemsPerPage,int totalItems,int totalPages)
        {
            CurrentPage = currentPage;
            ItemsPerPage = itemsPerPage;
            TotalItems = totalItems;
            TotalPages = totalPages;
        }
    }
}
