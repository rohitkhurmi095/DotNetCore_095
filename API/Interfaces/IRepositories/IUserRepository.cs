using API.DTOs;
using API.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Interfaces
{
    //User Repository Interface
    //==========================
    public interface IUserRepository
    {
        //Get All Users
        Task<IEnumerable<User>> GetUsersAsync();

        //Get User by Id
        Task<User> GetUserByIdAsync(int Id);

        //Get User by Name
        Task<User> GetUserByUsernameAsync(string username);

        //UpdateProfile
        void Update(User user);

        //SaveChanges
        Task<bool> SaveAllAsync();


        //**************************************
        //FOR AutoMapper extensions - MemberDto
        //**************************************
        //Get users
        Task<IEnumerable<MemberDto>> GetMembersAsync();

        //Get user by name
        Task<MemberDto> GetMemberAsync(string username);
    }
}
