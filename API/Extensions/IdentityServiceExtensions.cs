using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Extensions
{

    //______________________________________________________________________________
    //Add Identity Services here + call in Startup.cs (ConfigureServices method)
    //______________________________________________________________________________
    public static class IdentityServiceExtensions
    {
        public static object Configuration { get; private set; }

        //method -> return services
        //this IServiceCollection => extending service type
        public static IServiceCollection AddIdentityServices(this IServiceCollection services,IConfiguration config)
        {
            //====================
            //JWT Authentication
            //====================
            //NugetPackage:[Microsoft.ASPNetCore.Authentication.JwtBearer 3.1.2]
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["TokenKey"])),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    //ValidIssuer = "API localhost",
                    //ValidAudience = "Angular localhost"
                };
            });



            //return services -> method call
            return services;
        }
    }
}
