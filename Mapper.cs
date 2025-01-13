using AutoMapper;
using Capstone_2.Models;
using Capstone_2.Models.DTO;

namespace Capstone_2;

public class AutoMapperProfiles : Profile
{
    public AutoMapperProfiles()
    {

        CreateMap<Enemy, EnemyDTO>();
        CreateMap<Enemy, EnemySimpleDTO>();
        CreateMap<Item, ItemDTO>();
        CreateMap<Image, ImageDTO>();

    }
        
    
}