using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
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
            //UserEntity <-> UserDto
            //Populate main PhotoUrl - using ForMember()
            //get main PhotoUrl
            //(Goto usersPhoto collection(Photos) - get the firstPhoto that is mainPhoto) 

            CreateMap<User, MemberDto>()
            .ForMember(dest => dest.PhotoUrl, opt => opt.MapFrom(src => src.Photos.FirstOrDefault(x => x.IsMain).Url));

            //PhotoEntity <-> PhotoDto
            CreateMap<Photo, PhotoDto>();
        }

    }
}
