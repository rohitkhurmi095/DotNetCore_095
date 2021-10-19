using API.Data;
using API.Interfaces;
using API.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Extensions
{

    //______________________________________________________________________________
    //Add Application Services here + call in Startup.cs (ConfigureServices method)
    //______________________________________________________________________________
    public static class ApplicationServiceExtensions
    {
        //method -> return services
        //this IServiceCollection => extending service type
        public static IServiceCollection AddApplicationServices(this IServiceCollection services,IConfiguration Config)
        {
            //================================
            //DEPENDENCY INJECTION (Services)
            //================================
            //AddSingleton - doesnt stop until application stop
            //AddScoped - till lifetime of Http Request
            //AddTransient - service created + destroyed as soon as method is finished
            //-------------------------------
            //TokenService
            services.AddScoped<ITokenService, TokenService>();


            //Connection String
            //==================
            //Connection string from appsettings.json
            services.AddDbContext<DataContext>(options => options.UseSqlServer(Config.GetConnectionString("DataContext")));



            //return services -> method call
            return services;
        }

    }
}
