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

    [HttpPost]
    public IActionResult Post(CharacterDTO characterDTO)
    {
        Character character = _mapper.Map<Character>(characterDTO);
        _dbContext.Characters.Add(character);
        _dbContext.SaveChanges();
        return Ok(new {message = "Character created successfully"});
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var enemyToDelete = _dbContext.Characters.FirstOrDefault(c => c.Id == id);
        if (enemyToDelete == null)
        {
            return NotFound(new {message = "Could not find character to delete"});
        }
        _dbContext.Characters.Remove(enemyToDelete);
        _dbContext.SaveChanges();
        return Ok(new { message = "Character deleted successfully"});
    }
}