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
    public DbSet<Character> Characters { get; set; }
    public DbSet<Item> Items { get; set; }
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
                ImageUrl = "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2Fmudling.png?alt=media&token=e88f74ca-310b-4d42-8bf2-8f659ce998cf",
                Name = "Mudling",
                MinLevel = 1,
                MaxLevel = 5,
                AttackPower = 5,
                BaseHealth = 30,
                BaseExperience = 10,
                SlashingArmor = 0,
                PiercingArmor = 0,
                BluntArmor = 0,
                SlashingDamage = false,
                PiercingDamage = false,
                BluntDamage = true,
                FireResist = 0,
                IceResist = 0,
                LightningResist = 0,
                MinGold = 1,
                MaxGold = 5,
                ItemIds = [2],
                Description = "A muddy little earth elemental"
            },
            new Enemy
            {
                Id = 2,
                UserId = 1,
                ImageUrl = "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2Fgrassling.png?alt=media&token=7bb90e0a-ca52-4c19-b67e-babe6681c157",
                Name = "Grassling",
                MinLevel = 1,
                MaxLevel = 5,
                AttackPower = 5,
                BaseHealth = 30,
                BaseExperience = 10,
                SlashingArmor = 0,
                PiercingArmor = 0,
                BluntArmor = 0,
                SlashingDamage = true,
                PiercingDamage = false,
                BluntDamage = false,
                FireResist = 0,
                IceResist = 0,
                LightningResist = 0,
                MinGold = 1,
                MaxGold = 5,
                ItemIds = [6],
                Description = "An innocent looking grass elemental"
            },
            new Enemy
            {
                Id = 3,
                UserId = 1,
                ImageUrl = "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2Fwaterling.png?alt=media&token=a752abdc-a38d-469f-9029-a05f3acbc565",
                Name = "Waterling",
                MinLevel = 1,
                MaxLevel = 5,
                AttackPower = 5,
                BaseHealth = 30,
                BaseExperience = 10,
                SlashingArmor = 0,
                PiercingArmor = 0,
                BluntArmor = 0,
                SlashingDamage = false,
                PiercingDamage = true,
                BluntDamage = false,
                FireResist = 0,
                IceResist = 0,
                LightningResist = 0,
                MinGold = 1,
                MaxGold = 5,
                ItemIds = [2],
                Description = "A harmless looking water elemental"
            },
            new Enemy
            {
                Id = 4,
                UserId = 1,
                ImageUrl = "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2F_496c9af9-a760-46b9-bf18-fd7014b94883.jpg?alt=media&token=8953b581-9615-4c8f-b11e-da010ffba5dd",
                Name = "Gnoll Mage",
                MinLevel = 6,
                MaxLevel = 10,
                AttackPower = 9,
                BaseHealth = 90,
                BaseExperience = 10,
                SlashingArmor = 2,
                PiercingArmor = 2,
                BluntArmor = 2,
                SlashingDamage = true,
                PiercingDamage = false,
                BluntDamage = false,
                FireResist = 0,
                IceResist = 0,
                LightningResist = 0,
                MinGold = 4,
                MaxGold = 12,
                ItemIds = [1],
                Description = "An angry looking Gnoll"
            },
            new Enemy
            {
                Id = 5,
                UserId = 1,
                ImageUrl = "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2F_7a867825-4cea-4ebc-8595-af8584818925.jpg?alt=media&token=1c37fb3b-1a7e-4a8d-8d45-5dcd4fff9991",
                Name = "Kobold",
                MinLevel = 10,
                MaxLevel = 15,
                AttackPower = 18,
                BaseHealth = 150,
                BaseExperience = 78,
                SlashingArmor = 5,
                PiercingArmor = 5,
                BluntArmor = 5,
                SlashingDamage = true,
                PiercingDamage = true,
                BluntDamage = false,
                FireResist = 0,
                IceResist = 0,
                LightningResist = 0,
                MinGold = 12,
                MaxGold = 26,
                ItemIds = [6],
                Description = "A small Kobold"
            },
            new Enemy
            {
                Id = 6,
                UserId = 1,
                ImageUrl = "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2F_657577c4-8972-4639-8aff-fa94d3767f35.jpg?alt=media&token=6a5fe8bc-9790-4588-9bd7-e1cdd925bace",
                Name = "Minotaur",
                MinLevel = 20,
                MaxLevel = 30,
                AttackPower = 33,
                BaseHealth = 300,
                BaseExperience = 250,
                SlashingArmor = 10,
                PiercingArmor = 10,
                BluntArmor = 20,
                SlashingDamage = true,
                PiercingDamage = true,
                BluntDamage = true,
                FireResist = 0,
                IceResist = 0,
                LightningResist = 0,
                MinGold = 30,
                MaxGold = 65,
                ItemIds = [8, 9, 10],
                Description = "A large Minotaur"
            },
            new Enemy
            {
                Id = 7,
                UserId = 1,
                ImageUrl = "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2F_8a350560-8617-4f3c-baa3-b3d6b7191db7.jpg?alt=media&token=43fdecd8-f5ff-426e-a5f7-5a918d0392e8",
                Name = "Orc Hunter",
                MinLevel = 20,
                MaxLevel = 25,
                AttackPower = 27,
                BaseHealth = 230,
                BaseExperience = 200,
                SlashingArmor = 7,
                PiercingArmor = 7,
                BluntArmor = 0,
                SlashingDamage = false,
                PiercingDamage = true,
                BluntDamage = false,
                FireResist = 0,
                IceResist = 0,
                LightningResist = 0,
                MinGold = 22,
                MaxGold = 45,
                ItemIds = [7],
                Description = ""
            },
            new Enemy
            {
                Id = 8,
                UserId = 1,
                ImageUrl = "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2F_e8af266a-749d-4b95-9673-336e05df4dcc.jpg?alt=media&token=4bc4d096-4287-4c29-a6d4-5e67741f463b",
                Name = "Forest Dweller",
                MinLevel = 20,
                MaxLevel = 25,
                AttackPower = 15,
                BaseHealth = 400,
                BaseExperience = 200,
                SlashingArmor = 10,
                PiercingArmor = 10,
                BluntArmor = 40,
                SlashingDamage = false,
                PiercingDamage = false,
                BluntDamage = true,
                FireResist = 0,
                IceResist = 0,
                LightningResist = 0,
                MinGold = 40,
                MaxGold = 90,
                ItemIds = [1, 5, 8],
                Description = ""
            },
            new Enemy
            {
                Id = 9,
                UserId = 1,
                ImageUrl = "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2F_324919a7-190f-4cc0-a8ee-b4678b6ac2f3.jpg?alt=media&token=a6284056-b304-4e12-8702-7f9ba7718132",
                Name = "Dragon",
                MinLevel = 80,
                MaxLevel = 90,
                AttackPower = 200,
                BaseHealth = 4000,
                BaseExperience = 3750,
                SlashingArmor = 200,
                PiercingArmor = 200,
                BluntArmor = 300,
                SlashingDamage = true,
                PiercingDamage = true,
                BluntDamage = true,
                FireResist = 0,
                IceResist = 0,
                LightningResist = 0,
                MinGold = 500,
                MaxGold = 700,
                ItemIds = [2, 22],
                Description = ""
            },
            new Enemy
            {
                Id = 10,
                UserId = 1,
                ImageUrl = "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2Fgiant%20rat.png?alt=media&token=d0ba98a3-ee93-48fa-b25a-d9b12e6e63a1",
                Name = "Giant Rat",
                MinLevel = 5,
                MaxLevel = 10,
                AttackPower = 7,
                BaseHealth = 60,
                BaseExperience = 35,
                SlashingArmor = 1,
                PiercingArmor = 1,
                BluntArmor = 1,
                SlashingDamage = true,
                PiercingDamage = true,
                BluntDamage = false,
                FireResist = 0,
                IceResist = 0,
                LightningResist = 0,
                MinGold = 7,
                MaxGold = 12,
                ItemIds = [],
                Description = ""
            },
            new Enemy
            {
                Id = 11,
                UserId = 1,
                ImageUrl = "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2Fwild%20boar.png?alt=media&token=6aa861fc-ae0f-412d-aba8-812ffde7bad6",
                Name = "Wild Boar",
                MinLevel = 6,
                MaxLevel = 10,
                AttackPower = 9,
                BaseHealth = 90,
                BaseExperience = 70,
                SlashingArmor = 0,
                PiercingArmor = 0,
                BluntArmor = 5,
                SlashingDamage = false,
                PiercingDamage = true,
                BluntDamage = true,
                FireResist = 0,
                IceResist = 0,
                LightningResist = 0,
                MinGold = 5,
                MaxGold = 10,
                ItemIds = [5],
                Description = ""
            },
            new Enemy
            {
                Id = 12,
                UserId = 1,
                ImageUrl = "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2F_f4076778-abc0-4fec-8388-0a29374242ff.jpg?alt=media&token=e163475d-1ead-4ffa-9584-aac4f20d39ea",
                Name = "Forest Esper",
                MinLevel = 70,
                MaxLevel = 80,
                AttackPower = 55,
                BaseHealth = 1350,
                BaseExperience = 2100,
                SlashingArmor = 120,
                PiercingArmor = 120,
                BluntArmor = 50,
                SlashingDamage = true,
                PiercingDamage = true,
                BluntDamage = false,
                FireResist = 0,
                IceResist = 0,
                LightningResist = 0,
                MinGold = 100,
                MaxGold = 250,
                ItemIds = [7, 8, 21, 22],
                Description = ""
            },
        });

        modelBuilder.Entity<Item>().HasData(new Item[]
        {
            new Item {Id = 1, Name = "Shortsword"},
            new Item {Id = 2, Name = "Claymore"},
            new Item {Id = 3, Name = "Longbow"},
            new Item {Id = 4, Name = "Great Axe"},
            new Item {Id = 5, Name = "Axe"},
            new Item {Id = 6, Name = "Leather Chestpiece"},
            new Item {Id = 7, Name = "Small Healing Potion"},
            new Item {Id = 8, Name = "Small Mana Potion"},
            new Item {Id = 9, Name = "Sharp Dagger"},
            new Item {Id = 10, Name = "Mudball"},
            new Item {Id = 11, Name = "Fish"},
            new Item {Id = 12, Name = "Leaf Perch"},
            new Item {Id = 13, Name = "Copper Ore"},
            new Item {Id = 14, Name = "Leather Trousers"},
            new Item {Id = 15, Name = "Plate Gauntlets"},
            new Item {Id = 16, Name = "Large Bone"},
            new Item {Id = 17, Name = "Small Bone"},
            new Item {Id = 18, Name = "Cape"},
            new Item {Id = 19, Name = "Small Key"},
            new Item {Id = 20, Name = "Fishing Rod"},
            new Item {Id = 21, Name = "Pickle Lily"},
            new Item {Id = 22, Name = "Tome"},
        });

        modelBuilder.Entity<Character>().HasData(new Character[]
        {
            new Character
            {
                Id = 1, UserId = 1, Name = "Fighter", Health = 50, AttackPower = 10, SlashingArmor = 3, PiercingArmor = 3, BluntArmor = 3, SlashingPenetration = 5, PiercingPenetration = 6, BluntPenetration = 7,
            },
            new Character
            {
                Id = 2, UserId = 1, Name = "Paladin", Health = 100, AttackPower = 20, SlashingArmor = 9, PiercingArmor = 9, BluntArmor = 9, SlashingPenetration = 1, PiercingPenetration = 1, BluntPenetration = 1,
            },
            new Character
            {
                Id = 3, UserId = 1, Name = "Thief", Health = 40, AttackPower = 5, SlashingArmor = 1, PiercingArmor = 2, BluntArmor = 1, SlashingPenetration = 10, PiercingPenetration = 10, BluntPenetration = 10,
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