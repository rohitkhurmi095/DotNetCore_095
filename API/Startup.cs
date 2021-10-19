using API.Data;
using API.Extensions;
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
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }


        //__________
        //SERVICES
        //__________
        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //*******************
            //ApplicationServices
            //********************
            //TokenService + ConnectionString
            services.AddApplicationServices(Configuration);

            services.AddControllers();

            //CORS (Cross Origin Resource Sharing)
            //=====================================
            services.AddCors();

            //******************
            //Identity Services
            //******************
            //JWT Authentication
            services.AddIdentityServices(Configuration);

        }


        //____________
        //MIDDLEWARES
        //____________
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
