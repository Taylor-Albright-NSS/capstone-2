using Capstone_2.Models;

public class EnemyItem
{
    public int EnemiesId { get; set; }
    public Enemy Enemy { get; set; }
    public int ItemsId { get; set; }
    public Item Item { get; set; }
}