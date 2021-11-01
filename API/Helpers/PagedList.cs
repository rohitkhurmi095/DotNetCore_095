using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Helpers
{
    //==========
    //PagedList
    //==========
    //*****PAGING List Type*****
    //TotalPages = (int) Math.Ceiling(totalCount(of items in query)/(double) pageSize)
    //Eg: totalCount = 10,pageSize = 5 => TotalPages = 2

    //query.Skip((pageNumber-1)*pageSize).Take(pageSize)
    //Eg: pageNumber = 1,pageSize = 5
    //Skip = (pageNumber-1)*pageSize => (1-1)*5 = 0 skip
    //Take = pageSize = 5 = 5 Take (records per page)
    //----------
    public class PagedList<T>:List<T>
    {
        //------------
        //Properties
        //------------
        //CurrentPage
        public int CurrentPage { get; set; }
        //PageSize
        public int PageSize { get; set; }
        //TotalPages
        public int TotalPages { get; set; }
        //TotalCount(no.of.records in query)
        public int TotalCount { get; set; }


        //-------------
        //Constructor
        //-------------
        //pass items(IEnumerable<T>) we get from query
        //pass pageSize,totalCount(of items in query),pageNumber
        public PagedList(IEnumerable<T> items,int totalCount,int pageNumber,int pageSize)
        {
            CurrentPage = pageNumber;
            PageSize = pageSize;
            TotalCount = totalCount;

            //TotalPages = totalCount/pageSize
            TotalPages = (int)Math.Ceiling(totalCount / (double) pageSize);

            //Add items to PagedList
            AddRange(items);
        }


        //----------
        // Method
        //----------
        //source data(query) :IQuerable(receives querable query)
        //calculates items per page
        //returns instance of PagedList
        public static async Task<PagedList<T>> CreateAsync(IQueryable<T> source,int pageNumber,int pageSize)
        {
            //No.OF.Records
            var totalCount = await source.CountAsync();

            //Records per Page
            var items = await source.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToListAsync();

            //return instance of PagedList
            return new PagedList<T>(items,totalCount,pageNumber,pageSize);
        }




    }
}
