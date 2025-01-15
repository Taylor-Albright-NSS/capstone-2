using AutoMapper;
using AutoMapper.QueryableExtensions;
using Capstone2.Data;
using Microsoft.AspNetCore.Mvc;
using Capstone_2.Models;
using Capstone_2.Models.DTO;

namespace Capstone_2.Controllers;


[ApiController]
[Route("api/[controller]")]

public class ItemController : ControllerBase
{
    private Capstone2DbContext _dbContext;
    private readonly IMapper _mapper;

    public ItemController(Capstone2DbContext dbContext, IMapper mapper)
    {
        _dbContext = dbContext;
        _mapper = mapper;
    }

    [HttpGet]
    public IActionResult Get()
    {
        var itemDTO = _dbContext.Items
        .ProjectTo<ItemDTO>(_mapper.ConfigurationProvider);

        if (itemDTO == null)
        {
            return NotFound("Not found");
        }

        return Ok(itemDTO);
    }
}