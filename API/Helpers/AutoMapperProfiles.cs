using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Extensions;
//AutoMapperProfiles
using AutoMapper;

namespace API.Helpers
{
    //=====================================
    //AutoMapper: maps 1 object to another
    //=====================================
    //Nuget Package: [AutoMapper.Extensions.Microsoft.DependencyInjection]
    //CreateMap<Entity,Dto>
    //ForMember(which property to affect,Where to map from)
    public class AutoMapperProfiles:Profile
    {
        public AutoMapperProfiles()
        {
            //UserEntity <-> MemberDto
            //-----------------------
            //1.Populate main PhotoUrl - using ForMember()
            //2.Populate Age - using calculateAge() Helper method
            //get main PhotoUrl
            //(Goto usersPhoto collection(Photos) - get the firstPhoto that is mainPhoto) 

            CreateMap<User, MemberDto>()
            .ForMember(dest => dest.PhotoUrl, opt => opt.MapFrom(src => src.Photos.FirstOrDefault(x => x.IsMain).Url))
            .ForMember(dest => dest.Age, opt => opt.MapFrom(src=>src.DateOfBirth.calculateAge()));


            //PhotoEntity <-> PhotoDto
            //-------------------------
            CreateMap<Photo, PhotoDto>();


            //MemberUpdateDto <-> UserEntity
            //-------------------------------
            CreateMap<MemberUpdateDto, User>();
        }

    }
}
