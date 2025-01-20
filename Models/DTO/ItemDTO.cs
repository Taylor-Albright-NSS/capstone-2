namespace Capstone_2.Models.DTO;

public class ItemDTO
{
    public int Id { get; set; }
    public string Name { get; set; }
    public List<EnemyDTO>? Enemies { get; set; }
    public ICollection<EnemyItemDTO>? EnemyItems { get; set; }
    // public string Category { get; set; }
}
public class ItemSimpleDTO
{
    public int Id { get; set; }
    public string Name { get; set; }
}