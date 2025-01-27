using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Capstone2.Models;
using Microsoft.AspNetCore.Identity;
using Capstone_2.Models;

namespace Capstone2.Data;
public class Capstone2DbContext : IdentityDbContext<IdentityUser>
{
    private readonly IConfiguration _configuration;

    public DbSet<UserProfile> UserProfiles { get; set; }
    public DbSet<Enemy> Enemies { get; set; }
    public DbSet<Item> Items { get; set; }
    public DbSet<Image> Images { get; set; }
    public DbSet<EnemyItem> EnemiesItems { get; set; }

    public Capstone2DbContext(DbContextOptions<Capstone2DbContext> context, IConfiguration config) : base(context)
    {
        _configuration = config;
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<IdentityRole>().HasData(new IdentityRole
        {
            Id = "c3aaeb97-d2ba-4a53-a521-4eea61e59b35",
            Name = "Admin",
            NormalizedName = "admin"
        });

        modelBuilder.Entity<IdentityUser>().HasData(new IdentityUser[]
        {
            new IdentityUser
            {
                Id = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                UserName = "Administrator",
                Email = "admina@strator.comx",
                PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
            },
            new IdentityUser
            {
                Id = "d8d76512-74f1-43bb-b1fd-87d3a8aa36df",
                UserName = "JohnDoe",
                Email = "john@doe.comx",
                PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
            },
            new IdentityUser
            {
                Id = "a7d21fac-3b21-454a-a747-075f072d0cf3",
                UserName = "JaneSmith",
                Email = "jane@smith.comx",
                PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
            },
            new IdentityUser
            {
                Id = "c806cfae-bda9-47c5-8473-dd52fd056a9b",
                UserName = "AliceJohnson",
                Email = "alice@johnson.comx",
                PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
            },
            new IdentityUser
            {
                Id = "9ce89d88-75da-4a80-9b0d-3fe58582b8e2",
                UserName = "BobWilliams",
                Email = "bob@williams.comx",
                PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
            },
            new IdentityUser
            {
                Id = "d224a03d-bf0c-4a05-b728-e3521e45d74d",
                UserName = "EveDavis",
                Email = "Eve@Davis.comx",
                PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
            },

        });

        modelBuilder.Entity<IdentityUserRole<string>>().HasData(new IdentityUserRole<string>[]
        {
            new IdentityUserRole<string>
            {
                RoleId = "c3aaeb97-d2ba-4a53-a521-4eea61e59b35",
                UserId = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f"
            },
            new IdentityUserRole<string>
            {
                RoleId = "c3aaeb97-d2ba-4a53-a521-4eea61e59b35",
                UserId = "d8d76512-74f1-43bb-b1fd-87d3a8aa36df"
            },

        });

        modelBuilder.Entity<Enemy>().HasData(new Enemy[]
        {
            new Enemy
            {
                Id = 1,
                UserId = 1,
                ImageId = 1,
                Name = "Mudling",
                MinLevel = 1,
                MaxLevel = 3,
                BaseDamage = 5,
                BaseHealth = 10,
                BaseExperience = 10,
                SlashingArmor = 0,
                PiercingArmor = 0,
                BluntArmor = 0,
                SlashingDamage = false,
                PiercingDamage = false,
                BluntDamage = true,
                DodgeRating = 0,
                AccuracyRating = 0,
                FireResist = 0,
                IceResist = 0,
                LightningResist = 0,
                MinGold = 0,
                MaxGold = 0,
                ItemIds = [1, 2],
                Description = "A brown moving puddle that resembles a puddle of mud."
            }
        });

        modelBuilder.Entity<Item>().HasData(new Item[]
        {
            new Item {Id = 1, Name = "Sword"},
            new Item {Id = 2, Name = "Twohanded Sword"},
            new Item {Id = 3, Name = "Bow"},
            new Item {Id = 4, Name = "Fist Weapon"},
            new Item {Id = 5, Name = "Axe"},
            new Item {Id = 6, Name = "Leather Chest"},
            new Item {Id = 7, Name = "Potion"},
            new Item {Id = 8, Name = "Small Gem"},
            new Item {Id = 9, Name = "Dagger"},
            new Item {Id = 10, Name = "Mudball"},
            new Item {Id = 11, Name = "Fish"},
            new Item {Id = 12, Name = "Leather Trousers"},
            new Item {Id = 13, Name = "Plate Gauntlets"},
            new Item {Id = 14, Name = "Large Bone"},
            new Item {Id = 15, Name = "Small Bone"},
            new Item {Id = 16, Name = "Cape"},
            new Item {Id = 17, Name = "Small Key"},
            new Item {Id = 18, Name = "Fishing Rod"},
            new Item {Id = 19, Name = "Bright Yellow Flower"},
            new Item {Id = 20, Name = "Tome"},
        });

        modelBuilder.Entity<Image>().HasData(new Image[]
        {
            new Image
            {
                Id = 1,
                ImageLocation = "/public/assets/images/elementals/mudling/mudling.png"
            },
            new Image
            {
                Id = 2,
                ImageLocation = "/public/assets/images/elementals/waterling/waterling.png"
            },
            new Image
            {
                Id = 3,
                ImageLocation = "/public/assets/images/elementals/grassling/grassling.png"
            },
            new Image
            {
                Id = 4,
                ImageLocation = "/public/assets/images/kobolds/kobold_child/kobold_child.png"
            },
            new Image
            {
                Id = 5,
                ImageLocation = "/public/assets/images/kobolds/kobold_archer/kobold_archer.png"
            },
            new Image
            {
                Id = 6,
                ImageLocation = "/public/assets/images/kobolds/kobold_scoundrel/kobold_scoundrel.png"
            },
        });

        modelBuilder.Entity<UserProfile>().HasData(new UserProfile[]
        {
            new UserProfile
            {
                Id = 1,
                IdentityUserId = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                FirstName = "Admina",
                LastName = "Strator",
                ImageLocation = "https://robohash.org/numquamutut.png?size=150x150&set=set1",
                CreateDateTime = new DateTime(2022, 1, 25)
            },
             new UserProfile
            {
                Id = 2,
                FirstName = "John",
                LastName = "Doe",
                CreateDateTime = new DateTime(2023, 2, 2),
                ImageLocation = "https://robohash.org/nisiautemet.png?size=150x150&set=set1",
                IdentityUserId = "d8d76512-74f1-43bb-b1fd-87d3a8aa36df",
            },
            new UserProfile
            {
                Id = 3,
                FirstName = "Jane",
                LastName = "Smith",
                CreateDateTime = new DateTime(2022, 3, 15),
                ImageLocation = "https://robohash.org/molestiaemagnamet.png?size=150x150&set=set1",
                IdentityUserId = "a7d21fac-3b21-454a-a747-075f072d0cf3",
            },
            new UserProfile
            {
                Id = 4,
                FirstName = "Alice",
                LastName = "Johnson",
                CreateDateTime = new DateTime(2023, 6, 10),
                ImageLocation = "https://robohash.org/deseruntutipsum.png?size=150x150&set=set1",
                IdentityUserId = "c806cfae-bda9-47c5-8473-dd52fd056a9b",
            },
            new UserProfile
            {
                Id = 5,
                FirstName = "Bob",
                LastName = "Williams",
                CreateDateTime = new DateTime(2023, 5, 15),
                ImageLocation = "https://robohash.org/quiundedignissimos.png?size=150x150&set=set1",
                IdentityUserId = "9ce89d88-75da-4a80-9b0d-3fe58582b8e2",
            },
            new UserProfile
            {
                Id = 6,
                FirstName = "Eve",
                LastName = "Davis",
                CreateDateTime = new DateTime(2022, 10, 18),
                ImageLocation = "https://robohash.org/hicnihilipsa.png?size=150x150&set=set1",
                IdentityUserId = "d224a03d-bf0c-4a05-b728-e3521e45d74d",
            }
        });

        modelBuilder.Entity<EnemyItem>()
            .HasKey(ei => new { ei.EnemiesId, ei.ItemsId });

        modelBuilder.Entity<EnemyItem>()
            .HasOne(ei => ei.Enemy)
            .WithMany(e => e.EnemyItems)
            .HasForeignKey(ei => ei.EnemiesId);

        modelBuilder.Entity<EnemyItem>()
            .HasOne(ei => ei.Item)
            .WithMany(i => i.EnemyItems)
            .HasForeignKey(ei => ei.ItemsId);

        modelBuilder.Entity<EnemyItem>().HasData(
            new EnemyItem { EnemiesId = 1, ItemsId = 1 },
            new EnemyItem { EnemiesId = 1, ItemsId = 2 },
            new EnemyItem { EnemiesId = 1, ItemsId = 3 }
        );

        modelBuilder.Entity<Enemy>()
        .HasMany(e => e.Items)
        .WithMany(i => i.Enemies)
        .UsingEntity(j => j.HasData(
            new { EnemiesId = 1, ItemsId = 1 },
            new { EnemiesId = 1, ItemsId = 2 },
            new { EnemiesId = 1, ItemsId = 3 }
        ));

        //Many to many relationship example

    }
}