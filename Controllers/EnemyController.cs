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
        .Include(enemy => enemy.Items)
        .ProjectTo<EnemyDTO>(_mapper.ConfigurationProvider)
        .FirstOrDefault(enemy => enemy.Id == id);

        List<ItemDTO> itemsDTO = _dbContext.Items
        .ProjectTo<ItemDTO>(_mapper.ConfigurationProvider)
        .Where(i => enemyDTO.ItemIds.Contains(i.Id)).ToList();

        enemyDTO.Items = itemsDTO;


        if (enemyDTO == null)
        {
            return NotFound();
        }

        return Ok(enemyDTO);
    }
    //--------
    [HttpGet("enemyforedit/{id}")]
    public IActionResult GetForEdit(int id)
    {
        EnemyForEditDTO enemyDTO = _dbContext.Enemies
        .ProjectTo<EnemyForEditDTO>(_mapper.ConfigurationProvider)
        .FirstOrDefault(enemy => enemy.Id == id);

        if (enemyDTO == null)
        {
            return NotFound();
        }

        return Ok(enemyDTO);
    }
    //--------
    [HttpGet("/non-automapper/{id}")]
    public IActionResult GetWithNonAutoMapper(int id)
    {
        Enemy enemy = _dbContext
        .Enemies
        .Include(e => e.Items)
        .FirstOrDefault(e => e.Id == id);

        EnemyDTO enemyDTO = new EnemyDTO
        {
            Id = enemy.Id,
            UserId = enemy.UserId,
            Name = enemy.Name,
            ItemIds = enemy.ItemIds,
            MinLevel = enemy.MinLevel,
            MaxLevel = enemy.MaxLevel,
            Items = _dbContext.Items
            .Where(i => enemy.ItemIds.Contains(i.Id))
            .Select(i => new ItemDTO 
            {
                Id = i.Id,
                Name = i.Name,
            }).ToList()
        };

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

        List<EnemyItem> enemyItems = enemyDTO.ItemIds.Select(itemId => new EnemyItem 
        {
            EnemiesId = enemyId,
            ItemsId = itemId
        }).ToList();

        if (enemyItems == null)
        {
            return NotFound("enemyItems not created");
        }

        _dbContext.EnemiesItems.AddRange(enemyItems);
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
    public IActionResult DeleteEnemy(int enemyId, int userId)
    {
        var enemy = _dbContext.Enemies.FirstOrDefault(e => e.Id == enemyId);
        if (enemy.UserId != userId)
        {
            return NotFound( new {message = "You are not authorized to perform this action"});
        }
        if (enemy == null)
        {
            return NotFound("Enemy with that id not found");
        }

        var enemyItems = _dbContext.EnemiesItems.Where(ei => ei.EnemiesId == enemyId).ToList();
        if (enemyItems == null)
        {
            return NotFound("Some or all enemy item relationships were not found");
        }

        _dbContext.Enemies.Remove(enemy);
        _dbContext.EnemiesItems.RemoveRange(enemyItems);
        _dbContext.SaveChanges();
        return Ok();
    }
    
    [HttpPut("{id}")]
    public IActionResult Put(EnemyDTO enemyDTO, int id)
    {
        Enemy enemy = _dbContext.Enemies.FirstOrDefault(e => e.Id == id);

        if (enemy == null)
        {
            return NotFound();
        }

        _mapper.Map(enemyDTO, enemy);
        _dbContext.SaveChanges();
        return Ok(new { message = "Custom message: Enemy was changed successfully"});
    }
}