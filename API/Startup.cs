using API.Data;
using API.Interfaces;
using API.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API
{
    public class Startup
    {
        //__________
        //SERVICES
        //__________
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }


        //____________
        //MIDDLEWARES
        //____________
        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
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
            services.AddDbContext<DataContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DataContext")));

            services.AddControllers();

            //CORS (Cross Origin Resource Sharing)
            //=====================================
            services.AddCors();

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
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["TokenKey"])),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    //ValidIssuer = "API localhost",
                    //ValidAudience = "Angular localhost"
                };
            });


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();


            //ORDER: CORS -> Authentication -> Authorization)
            //CORS (Cross Origin Resource Sharing)
            //=====================================
            app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:4200"));


            //Authentication
            //---------------
            app.UseAuthentication();

            //Authorization
            //---------------
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
