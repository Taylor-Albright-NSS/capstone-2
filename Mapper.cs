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
        CreateMap<EnemyItem, EnemyItemDTO>();

                // Map Enemy to EnemyDTO (or whatever destination type you're using)
        CreateMap<Enemy, EnemyDTO>()
            .ForMember(dest => dest.Items, opt => opt.MapFrom(src => src.Items));

        CreateMap<Enemy, EnemyDTO>()
            .ForMember(dest => dest.Image, opt => opt.MapFrom(src => src.Image));
        CreateMap<EnemyDTO, Enemy>()
            .ForMember(dest => dest.Image, opt => opt.Ignore());

        CreateMap<Item, ItemDTO>()
            .ForMember(dest => dest.Enemies, opt => opt.MapFrom(src => src.Enemies));
        CreateMap<ItemDTO, Item>()
            .ForMember(dest => dest.Enemies, opt => opt.MapFrom(src => src.Enemies));

    }
        
    
}