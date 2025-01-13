namespace Capstone_2.Models.DTO;

public class ItemDTO
{
    public int Id { get; set; }
    public string Name { get; set; }
    public List<EnemyDTO> Enemies { get; set; }
    // public string Category { get; set; }
}