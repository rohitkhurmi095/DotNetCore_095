using API.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data
{
    //Nuget Packages:
    /* EF Core Tools 3.1.13
       EF Core Sql 3.1.13
       WebCodeGenerator 3.1.5
    */

    //DbContext: for querying Database
    //pass DbContext options -> DbContext
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options):base(options)
        {

        }

        //==========
        // DataSets
        //==========
        //Tables in Database
        public DbSet<User> Users { get; set; }
    }
}
