using System.Collections.Generic;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Mvc;
using Capstone_2.Models.DTO;
using Capstone2.Data;
using Capstone_2.Models;

namespace Capstone_2.Controllers;

[ApiController]
[Route("api/[controller]")]

public class EnemyController : ControllerBase
{
    private Capstone2DbContext _dbContext;
    private readonly IMapper _mapper;

    public EnemyController(Capstone2DbContext context, IMapper mapper)
    {
        _dbContext = context;
        _mapper = mapper;
    }
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(_dbContext.Enemies.ProjectTo<EnemyDTO>(_mapper.ConfigurationProvider));
    }
    //--------
    [HttpGet("simple")]
    public IActionResult GetSimple()
    {
        return Ok(_dbContext.Enemies.ProjectTo<EnemySimpleDTO>(_mapper.ConfigurationProvider));
    }
    //--------
    [HttpPost()]
    public IActionResult PostEnemy(EnemyDTO enemyDTO)
    {
        Enemy enemy = _mapper.Map<Enemy>(enemyDTO);
        _dbContext.Enemies.Add(enemy);
        _dbContext.SaveChanges();

        var enemyId = enemy.Id;

        var associations = enemyDTO.ItemIds.Select(itemId => new EnemyItem 
        {
            EnemiesId = enemyId,
            ItemsId = itemId
        });

        _dbContext.EnemiesItems.AddRange(associations);
        _dbContext.SaveChangesAsync();

        return Ok(new { Message = "Enemy created successfully", EnemyId = enemyId });
    }
    //--------
    [HttpGet("enemies-items")]
    public IActionResult GetEnemiesItems()
    {
        return Ok(_dbContext.EnemiesItems);
    }
}