using API.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace API.Data
{
    //============
    //Data Seeder
    //============
    //Run DataSeeder on Application Start
    //Get Data from UserSeed.Json file + Insert into Db  
    //Use this SEEDER in Program.cs file -> Runs at Application Start
    public class Seed
    {
        //Method
        //=======
        //Pass DbContext -> to SeedUsers() method
        public static async Task SeedUsers(DataContext context)
        {
            //1.CHECK IF THERE are Users already in Db
            //-----------------------------------------
            if(await context.Users.AnyAsync()) return;


            //2.Read User From UserSeedData.Json File
            //---------------------------------------
            //using System.IO.File.ReadAllText('filePath');
            var userData = await System.IO.File.ReadAllTextAsync("Data/UserSeedData.json");

            //Convert the readed JSONData -> Object (Deserialize JSON)
            //(Create UsersList + Pass userData to it)
            var users = JsonSerializer.Deserialize<List<User>>(userData);


            //Generate [same** Password: Password123] for all users + Add to Db
            //(Loop through UsersList + generate same Password (using hashing) for all users)
            foreach(var user in users)
            {
                //For Password Hashing
                //using = dispose method when not in use
                using var hmac = new HMACSHA512();

                //store userName in LowerChars in Db
                user.UserName = user.UserName.ToLower();
                user.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes("Password123"));
                user.PasswordSalt = hmac.Key;

                //Add user to Db
                context.Users.Add(user);
            }

            //Save Changes Database
            await context.SaveChangesAsync();
        }      
    }
}
