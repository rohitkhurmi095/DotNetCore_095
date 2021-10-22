using API.Entities;
using API.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data.Repositories
{
    //User Repository Interface Implementation
    //=========================================
    public class UserRepository : IUserRepository
    {
        //-----------
        // DbContext
        //------------
        //DbContext 
        private readonly DataContext _context;
        public UserRepository(DataContext context)
        {
            _context = context;
        }


        //-----------------------------------
        // Interface methods implementations 
        //------------------------------------
        //GET USER BY ID
        //***************
        public async Task<User> GetUserByIdAsync(int Id)
        {
            return await _context.Users.FindAsync(Id);
        }


        //GET USER BY USERNAME
        //********************
        //Include(p=>p.property) = EagerLoading
        //can result in circular ref exception
        public async Task<User> GetUserByUsernameAsync(string username)
        {
            return await _context.Users.SingleOrDefaultAsync(x => x.UserName == username);
        }


        //GET USERS
        //**********
        //Include(p=>p.property) = EagerLoading
        // can result in circular ref exception
        public async Task<IEnumerable<User>> GetUsersAsync()
        {
            return await _context.Users.ToListAsync();
        }


        //SAVE CHANGES
        //*************
        //saveChangesAsync() - returns numeric value 
        //saveChangesAsync() > 0 => boolean value
        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }


        //UPDATE PROFILE
        //***************
        public void Update(User user)
        {
            //Modify DataContext State for 'user' Entry
            _context.Entry(user).State = EntityState.Modified;
        }
    }
}
