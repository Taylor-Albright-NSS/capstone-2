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
    [HttpGet("{id}")]
    public IActionResult Get(int id)
    {
        EnemyDTO enemyDTO = _dbContext.Enemies
        .ProjectTo<EnemyDTO>(_mapper.ConfigurationProvider)
        .FirstOrDefault(enemy => enemy.Id == id);

        if (enemyDTO == null)
        {
            return NotFound();
        }

        return Ok(enemyDTO);
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

        List<EnemyItem> associations = enemyDTO.ItemIds.Select(itemId => new EnemyItem 
        {
            EnemiesId = enemyId,
            ItemsId = itemId
        }).ToList();

        _dbContext.EnemiesItems.AddRange(associations);
        _dbContext.SaveChanges();

        return Ok(new { Message = "Enemy created successfully", EnemyId = enemyId });
    }
    //--------
    //This is just for testing to see the enemy-item relationship in swagger
    [HttpGet("enemies-items")]
    public IActionResult GetEnemiesItems()
    {
        return Ok(_dbContext.EnemiesItems);
    }
    //--------
    [HttpDelete("{enemyId}")]
    public IActionResult DeleteEnemy(int enemyId)
    {
        var enemy = _dbContext.Enemies.FirstOrDefault(e => e.Id == enemyId);
        if (enemy == null)
        {
            return NotFound("Enemy with that id not found");
        }


        var enemyItems = _dbContext.EnemiesItems.Where(ei => ei.EnemiesId == enemyId).ToList();
        if (enemyItems == null)
        {
            return NotFound("Some or all enemy item relationships were not found");
        }
        //Removes enemy from database
        //Removes enemy-item relationship from database
        _dbContext.Enemies.Remove(enemy);
        _dbContext.EnemiesItems.RemoveRange(enemyItems);
        _dbContext.SaveChanges();
        return Ok();
    }
}