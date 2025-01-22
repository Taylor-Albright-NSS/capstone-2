using System.Collections.Generic;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Mvc;
using Capstone_2.Models.DTO;
using Capstone2.Data;
using Capstone_2.Models;
using Microsoft.EntityFrameworkCore;

namespace Capstone_2.Controllers;

[ApiController]
[Route("api/[controller]")]

public class CharacterController : ControllerBase
{
    private Capstone2DbContext _dbContext;
    private readonly IMapper _mapper;

    public CharacterController(Capstone2DbContext context, IMapper mapper)
    {
        _dbContext = context;
        _mapper = mapper;
    }
    [HttpGet]
    public IActionResult Get()
    {
        var characters = _dbContext.Characters.ProjectTo<CharacterDTO>(_mapper.ConfigurationProvider);

        if (characters == null)
        {
            return NotFound("Couldn't find characters");
        }

        return Ok(characters);
    }
}