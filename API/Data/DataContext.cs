using API.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data
{

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
