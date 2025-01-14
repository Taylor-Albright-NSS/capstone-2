using AutoMapper;
using Capstone_2.Models;
using Capstone_2.Models.DTO;

namespace Capstone_2;

public class AutoMapperProfiles : Profile
{
    public AutoMapperProfiles()
    {

        CreateMap<Enemy, EnemyDTO>();
        CreateMap<EnemyDTO, Enemy>();
        CreateMap<Enemy, EnemySimpleDTO>();
        CreateMap<Item, ItemDTO>();
        CreateMap<Item, ItemSimpleDTO>();
        CreateMap<Image, ImageDTO>();

        //         CreateMap<Item, ItemDTO>()
        //     .ForMember(dest => dest.Enemies, opt => opt.MapFrom(src => src.Enemies));

        // CreateMap<ItemDTO, Item>()
        //     .ForMember(dest => dest.Enemies, opt => opt.MapFrom(src => src.Enemies));

    }
        
    
}