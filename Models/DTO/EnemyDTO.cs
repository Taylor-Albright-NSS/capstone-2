using System.ComponentModel.DataAnnotations;

namespace Capstone_2.Models.DTO;

public class EnemyDTO
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public string ImageUrl { get; set; }
    public string Name { get; set; }
    public int MinLevel { get; set; }
    public int MaxLevel { get; set; }
    public int BaseDamage { get; set; }
    public int BaseHealth { get; set; }
    public int BaseExperience { get; set; }
    public int SlashingArmor { get; set; }
    public int PiercingArmor { get; set; }
    public int BluntArmor { get; set; }
    public bool SlashingDamage { get; set; }
    public bool PiercingDamage { get; set; }
    public bool BluntDamage { get; set; }
    public int DodgeRating { get; set; }
    public int AccuracyRating { get; set; }
    public int FireResist { get; set; }
    public int IceResist { get; set; }
    public int LightningResist { get; set; }
    public int MinGold { get; set; }
    public int MaxGold { get; set; }    
    public string Description { get; set; }
    public List<int>? ItemIds { get; set; }
    public ICollection<ItemDTO>? Items { get; set; }
    public ICollection<EnemyItemDTO>? EnemyItems { get; set; }

}

public class EnemySimpleDTO
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string ImageUrl { get; set; }
}

public class EnemyForEditDTO
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public string ImageUrl { get; set; }
    public string Name { get; set; }
    public int MinLevel { get; set; }
    public int MaxLevel { get; set; }
    public int BaseDamage { get; set; }
    public int BaseHealth { get; set; }
    public int BaseExperience { get; set; }
    public int SlashingArmor { get; set; }
    public int PiercingArmor { get; set; }
    public int BluntArmor { get; set; }
    public bool SlashingDamage { get; set; }
    public bool PiercingDamage { get; set; }
    public bool BluntDamage { get; set; }
    public int DodgeRating { get; set; }
    public int AccuracyRating { get; set; }
    public int FireResist { get; set; }
    public int IceResist { get; set; }
    public int LightningResist { get; set; }
    public int MinGold { get; set; }
    public int MaxGold { get; set; }    
    public string Description { get; set; }
    public List<int>? ItemIds { get; set; }
}
