using API.DTOs;
using API.Entities;
using API.Helpers;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
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
        //IMapper
        private readonly IMapper _mapper;
        public UserRepository(DataContext context,IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
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
        //:::::NOTE:::::
        //Include(p=>p.property) = EagerLoading
        //**can result in circular ref exception
        //SOLUTION: Use Automapper + MemberDto/PhotoDto
        public async Task<User> GetUserByUsernameAsync(string username)
        {
            return await _context.Users.
                Include(p=>p.Photos)
                .SingleOrDefaultAsync(x => x.UserName == username);
        }


        //GET USERS
        //**********
        //:::::NOTE:::::
        //Include(p=>p.property) = EagerLoading
        //**can result in circular ref exception
        //SOLUTION: Use Automapper + MemberDto/PhotoDto
        public async Task<IEnumerable<User>> GetUsersAsync()
        {
            return await _context.Users.
                Include(p=>p.Photos).
                ToListAsync();
        }


        //SAVE CHANGES
        //*************
        //saveChangesAsync() - returns numeric value 
        //saveChangesAsync() > 0 => boolean value(true/false)
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




        //*************************************************
        //Using AutoMapper Querable extensions - MemberDto
        //*************************************************
        //ProjectTo = return the property we want directly from the database
        //ProjectTo<Dto>(_mapper.ConfigurationProvider)
        //ConfigurationProvider = AutoMapperProfile configurations (Helpers Folder)
        //TurnOff Tracking in EntityFramework - .AsNoTracking();

        //***** PAGING *****
        //Type = PagedList<T> T=MemberDto
        //QueryParams = UserParams
        //RETURN PAGEDLIST (already done ToListAsync())

        //==========
        //GET USERS
        //==========
        public async Task<PagedList<MemberDto>> GetMembersAsync(UserParams userParams)
        {

            //IQuerable query
            //----------------
            var query = _context.Users.
                        ProjectTo<MemberDto>(_mapper.ConfigurationProvider).
                        AsNoTracking();

            //ReturnPagedList
            //----------------
            //call method to return PagedList from PagedList Helper class 
            //CreateAsync(IQuerable<T>store,int pageNumber,int pageSize)
            //pageNumber,pageSize = queryParams (from UserParams Helper Class)
            return await PagedList<MemberDto>.CreateAsync(query,userParams.PageNumber,userParams.PageSize);
        }


        //=================
        //GET USER by name
        //=================
        public async Task<MemberDto> GetMemberAsync(string username)
        {
            return await _context.Users.Where(x=>x.UserName == username)
                        .ProjectTo<MemberDto>(_mapper.ConfigurationProvider)
                        .SingleOrDefaultAsync();
        }
    }
}
