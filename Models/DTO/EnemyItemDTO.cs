using Capstone_2.Models.DTO;

public class EnemyItemDTO
{
    public int EnemiesId { get; set; }
    public EnemyDTO Enemy { get; set; }
    public int ItemsId { get; set; }
    public ItemDTO Item { get; set; }
}