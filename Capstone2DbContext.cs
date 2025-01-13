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
                Description = "A brown moving puddle that resembles a puddle of mud."
            },
            new Enemy
            {
                Id = 2,
                UserId = 1,
                ImageId = 1,
                Name = "Grassling",
                MinLevel = 1,
                MaxLevel = 3,
                BaseDamage = 5,
                BaseHealth = 10,
                BaseExperience = 10,
                SlashingArmor = 0,
                PiercingArmor = 0,
                BluntArmor = 0,
                SlashingDamage = true,
                PiercingDamage = false,
                BluntDamage = false,
                Description = "A small, green sliver that could easily be mistaken for a blade of grass."
            },
            new Enemy
            {
                Id = 3,
                UserId = 1,
                ImageId = 1,
                Name = "Waterling",
                MinLevel = 1,
                MaxLevel = 3,
                BaseDamage = 5,
                BaseHealth = 10,
                BaseExperience = 10,
                SlashingArmor = 0,
                PiercingArmor = 0,
                BluntArmor = 0,
                SlashingDamage = false,
                PiercingDamage = true,
                BluntDamage = false,
                Description = "A blue puddle."
            },
            new Enemy
            {
                Id = 4,
                UserId = 1,
                ImageId = 1,
                Name = "Skeleton",
                MinLevel = 1,
                MaxLevel = 3,
                BaseDamage = 5,
                BaseHealth = 10,
                BaseExperience = 10,
                SlashingArmor = 0,
                PiercingArmor = 0,
                BluntArmor = 0,
                SlashingDamage = false,
                PiercingDamage = true,
                BluntDamage = false,
                Description = "A blue puddle."
            },
            new Enemy
            {
                Id = 5,
                UserId = 1,
                ImageId = 1,
                Name = "Giant Rat",
                MinLevel = 1,
                MaxLevel = 3,
                BaseDamage = 5,
                BaseHealth = 10,
                BaseExperience = 10,
                SlashingArmor = 0,
                PiercingArmor = 0,
                BluntArmor = 0,
                SlashingDamage = false,
                PiercingDamage = true,
                BluntDamage = false,
                Description = "A blue puddle."
            },
            new Enemy
            {
                Id = 6,
                UserId = 1,
                ImageId = 1,
                Name = "Cultist",
                MinLevel = 1,
                MaxLevel = 3,
                BaseDamage = 5,
                BaseHealth = 10,
                BaseExperience = 10,
                SlashingArmor = 0,
                PiercingArmor = 0,
                BluntArmor = 0,
                SlashingDamage = false,
                PiercingDamage = true,
                BluntDamage = false,
                Description = "A blue puddle."
            },
            new Enemy
            {
                Id = 7,
                UserId = 1,
                ImageId = 1,
                Name = "Grave Worm",
                MinLevel = 1,
                MaxLevel = 3,
                BaseDamage = 5,
                BaseHealth = 10,
                BaseExperience = 10,
                SlashingArmor = 0,
                PiercingArmor = 0,
                BluntArmor = 0,
                SlashingDamage = false,
                PiercingDamage = true,
                BluntDamage = false,
                Description = "A blue puddle."
            },
            new Enemy
            {
                Id = 8,
                UserId = 1,
                ImageId = 1,
                Name = "Wild Boar",
                MinLevel = 1,
                MaxLevel = 3,
                BaseDamage = 5,
                BaseHealth = 10,
                BaseExperience = 10,
                SlashingArmor = 0,
                PiercingArmor = 0,
                BluntArmor = 0,
                SlashingDamage = false,
                PiercingDamage = true,
                BluntDamage = false,
                Description = "A blue puddle."
            },
            new Enemy
            {
                Id = 9,
                UserId = 1,
                ImageId = 1,
                Name = "Stag",
                MinLevel = 1,
                MaxLevel = 3,
                BaseDamage = 5,
                BaseHealth = 10,
                BaseExperience = 10,
                SlashingArmor = 0,
                PiercingArmor = 0,
                BluntArmor = 0,
                SlashingDamage = false,
                PiercingDamage = true,
                BluntDamage = false,
                Description = "A blue puddle."
            },
            new Enemy
            {
                Id = 10,
                UserId = 1,
                ImageId = 1,
                Name = "Impling",
                MinLevel = 1,
                MaxLevel = 3,
                BaseDamage = 5,
                BaseHealth = 10,
                BaseExperience = 10,
                SlashingArmor = 0,
                PiercingArmor = 0,
                BluntArmor = 0,
                SlashingDamage = false,
                PiercingDamage = true,
                BluntDamage = false,
                Description = "A blue puddle."
            },
            new Enemy
            {
                Id = 11,
                UserId = 1,
                ImageId = 2,
                Name = "Kobold",
                MinLevel = 10,
                MaxLevel = 15,
                BaseDamage = 7,
                BaseHealth = 160,
                BaseExperience = 150,
                SlashingArmor = 5,
                PiercingArmor = 5,
                BluntArmor = 0,
                SlashingDamage = true,
                PiercingDamage = false,
                BluntDamage = false,
                Description = "A small, green creature with a big nose and pointy ears."
            }
        }
        );

        modelBuilder.Entity<Item>().HasData(new Item[]
        {
            new Item
            {
                Id = 1,
                Name = "Sword"
            },
            new Item
            {
                Id = 2,
                Name = "Twohanded Sword"
            },
            new Item
            {
                Id = 3,
                Name = "Bow"
            }
        });

        modelBuilder.Entity<Image>().HasData(new Image[]
        {
            new Image
            {
                Id = 1,
                ImageLocation = "assets/elementals/mudling/mudling.png"
            },
            new Image
            {
                Id = 2,
                ImageLocation = "assets/kobolds/kobold child/kobold child.png"
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

        //Many to many relationship example

        modelBuilder.Entity<Enemy>()
        .HasMany(e => e.Items)
        .WithMany(i => i.Enemies)
        .UsingEntity(j => j.HasData(
            new { EnemiesId = 1, ItemsId = 1 },
            new { EnemiesId = 1, ItemsId = 2 },
            new { EnemiesId = 1, ItemsId = 3 },
            new { EnemiesId = 2, ItemsId = 2 }
        ));
    }
}