using API.Data;
using API.Data.Repositories;
using API.Helpers;
using API.Interfaces;
using API.Services;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

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
            //----- CLOUDINARY IMAGE UPLOAD -----
            //config.GetSection('secName') = get section from appSettings.json
            //services.Configure<Type>(config.GetSection('sectionName'));
            services.Configure<CloudinarySettings>(Config.GetSection("CloudinarySettings"));

            //TokenService
            services.AddScoped<ITokenService, TokenService>();

            //PhotoService
            services.AddScoped<IPhotoService, PhotoService>();

            //----- REPOSITORY SERVICE -----
            //UserRepository
            services.AddScoped<IUserRepository,UserRepository>();

            //-----[ AUTOMAPPER SERVICE ]-----
            //Maps 1 obj to another (Dto <-> Entities)
            //AutoMapper Profiles
            //SingleProject = SingleAssembly
            services.AddAutoMapper(typeof(AutoMapperProfiles).Assembly);


            //Connection String
            //==================
            //Connection string from appsettings.json
            services.AddDbContext<DataContext>(options => options.UseSqlServer(Config.GetConnectionString("DataContext")));



            //return services -> method call
            return services;
        }

    }
}
