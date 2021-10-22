using API.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API
{
    public class Program
    {
        //Note:Services are not available here by default
        public static async Task Main(string[] args)
        {
            //============
            //Data Seeder 
            //============
            //Runs at ApplicationStart

            //Host
            var host = CreateHostBuilder(args).Build();

            //Get Service(using host)
            //(Create Scope for Service + Get Service)
            using var scope = host.Services.CreateScope();
            var services = scope.ServiceProvider;

            //tryCatch -> catch exceptions during dataSeeding
            try
            {
                //Get DataContext service 
                var context = services.GetRequiredService<DataContext>();
                //Apply migrations(on application start)
                await context.Database.MigrateAsync();

                //Pass DataContext service to seed method
                await Seed.SeedUsers(context);
            }
            catch (Exception ex)
            {
                //Log exception message -> console
                //ILogger<Program> : ILogger service (ProgramClass = type)
                var logger = services.GetRequiredService<ILogger<Program>>();
                logger.LogError(ex, "An error occured during migrations");
            }

            //CALL Host
            await host.RunAsync();
        }


        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
