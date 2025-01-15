namespace Capstone_2.Models;

public class Item
{
    public int Id { get; set; }
    public string Name { get; set; }
    public List<Enemy> Enemies { get; set; }
    public ICollection<EnemyItem> EnemyItems { get; set; }

    // public string Category { get; set; }
}