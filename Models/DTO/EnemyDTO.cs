using System.ComponentModel.DataAnnotations;

namespace Capstone_2.Models.DTO;

public class EnemyDTO
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public int ImageId { get; set; }
    public Image? Image { get; set; }
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
    
    public string Description { get; set; }
    public List<int>? ItemIds { get; set; }
    public int ActualLevel
    {
        get { return new Random().Next(MinLevel, MaxLevel + 1); }
    }
    public int? TotalExperience 
    { 
        get { return 100 + (ActualLevel - MinLevel / MaxLevel - MinLevel) * (150 - 100); }
    }
    public ICollection<ItemDTO>? Items { get; set; }
    public ICollection<EnemyItemDTO>? EnemyItems { get; set; }

}

public class EnemySimpleDTO
{
    public int Id { get; set; }
    public string Name { get; set; }
    public int ImageId { get; set; }
    public ImageDTO Image { get; set; }
}

public class EnemyForEditDTO
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public int ImageId { get; set; }
    public Image? Image { get; set; }
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
    public string Description { get; set; }
    public List<int>? ItemIds { get; set; }
    public int ActualLevel
    {
        get { return new Random().Next(MinLevel, MaxLevel + 1); }
    }
    public int? TotalExperience 
    { 
        get { return 100 + (ActualLevel - MinLevel / MaxLevel - MinLevel) * (150 - 100); }
    }

}
