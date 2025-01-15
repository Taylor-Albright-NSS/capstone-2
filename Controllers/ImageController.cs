using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Mvc;
using Capstone_2.Models.DTO;
using Capstone2.Data;

namespace Capstone_2.Controllers;

[ApiController]
[Route("api/[controller]")]

public class ImageController : ControllerBase
{
    private Capstone2DbContext _dbContext;
    private readonly IMapper _mapper;

    public ImageController(Capstone2DbContext context, IMapper mapper)
    {
        _dbContext = context;
        _mapper = mapper;
    }
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(_dbContext.Images.ProjectTo<ImageDTO>(_mapper.ConfigurationProvider));
    }
    //--------
}