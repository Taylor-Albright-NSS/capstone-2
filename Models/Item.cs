namespace Capstone_2.Models;

public class Item
{
    public int Id { get; set; }
    public string Name { get; set; }
    public List<Enemy>? Enemies { get; set; }
    public List<EnemyItem>? EnemyItems { get; set; }
}