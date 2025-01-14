namespace Capstone_2.Models;

public class Enemy
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
    public int ActualLevel
    {
        get { return new Random().Next(MinLevel, MaxLevel + 1); }
    }
    public int? TotalExperience 
    { 
        get { return 100 + (ActualLevel - MinLevel / MaxLevel - MinLevel) * (150 - 100); }
    }
    public List<Item>? Items { get; set; }

}