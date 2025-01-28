namespace Capstone_2.Models.DTO;

public class CharacterDTO
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public string Name { get; set; }
    public int Health { get; set; }
    public int AttackPower { get; set; }
    public int SlashingArmor { get; set; }
    public int PiercingArmor { get; set; }
    public int BluntArmor { get; set; }
    public int SlashingPenetration { get; set; }
    public int PiercingPenetration { get; set; }
    public int BluntPenetration { get; set; }

}