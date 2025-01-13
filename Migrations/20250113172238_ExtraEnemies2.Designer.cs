﻿// <auto-generated />
using System;
using Capstone2.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Capstone_2.Migrations
{
    [DbContext(typeof(Capstone2DbContext))]
    [Migration("20250113172238_ExtraEnemies2")]
    partial class ExtraEnemies2
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Capstone2.Models.UserProfile", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("CreateDateTime")
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("character varying(50)");

                    b.Property<string>("IdentityUserId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("ImageLocation")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("character varying(255)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("character varying(50)");

                    b.HasKey("Id");

                    b.HasIndex("IdentityUserId");

                    b.ToTable("UserProfiles");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CreateDateTime = new DateTime(2022, 1, 25, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            FirstName = "Admina",
                            IdentityUserId = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                            ImageLocation = "https://robohash.org/numquamutut.png?size=150x150&set=set1",
                            LastName = "Strator"
                        },
                        new
                        {
                            Id = 2,
                            CreateDateTime = new DateTime(2023, 2, 2, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            FirstName = "John",
                            IdentityUserId = "d8d76512-74f1-43bb-b1fd-87d3a8aa36df",
                            ImageLocation = "https://robohash.org/nisiautemet.png?size=150x150&set=set1",
                            LastName = "Doe"
                        },
                        new
                        {
                            Id = 3,
                            CreateDateTime = new DateTime(2022, 3, 15, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            FirstName = "Jane",
                            IdentityUserId = "a7d21fac-3b21-454a-a747-075f072d0cf3",
                            ImageLocation = "https://robohash.org/molestiaemagnamet.png?size=150x150&set=set1",
                            LastName = "Smith"
                        },
                        new
                        {
                            Id = 4,
                            CreateDateTime = new DateTime(2023, 6, 10, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            FirstName = "Alice",
                            IdentityUserId = "c806cfae-bda9-47c5-8473-dd52fd056a9b",
                            ImageLocation = "https://robohash.org/deseruntutipsum.png?size=150x150&set=set1",
                            LastName = "Johnson"
                        },
                        new
                        {
                            Id = 5,
                            CreateDateTime = new DateTime(2023, 5, 15, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            FirstName = "Bob",
                            IdentityUserId = "9ce89d88-75da-4a80-9b0d-3fe58582b8e2",
                            ImageLocation = "https://robohash.org/quiundedignissimos.png?size=150x150&set=set1",
                            LastName = "Williams"
                        },
                        new
                        {
                            Id = 6,
                            CreateDateTime = new DateTime(2022, 10, 18, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            FirstName = "Eve",
                            IdentityUserId = "d224a03d-bf0c-4a05-b728-e3521e45d74d",
                            ImageLocation = "https://robohash.org/hicnihilipsa.png?size=150x150&set=set1",
                            LastName = "Davis"
                        });
                });

            modelBuilder.Entity("Capstone_2.Models.Enemy", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("BaseDamage")
                        .HasColumnType("integer");

                    b.Property<int>("BaseExperience")
                        .HasColumnType("integer");

                    b.Property<int>("BaseHealth")
                        .HasColumnType("integer");

                    b.Property<int>("BluntArmor")
                        .HasColumnType("integer");

                    b.Property<bool>("BluntDamage")
                        .HasColumnType("boolean");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("ImageId")
                        .HasColumnType("integer");

                    b.Property<int>("MaxLevel")
                        .HasColumnType("integer");

                    b.Property<int>("MinLevel")
                        .HasColumnType("integer");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("PiercingArmor")
                        .HasColumnType("integer");

                    b.Property<bool>("PiercingDamage")
                        .HasColumnType("boolean");

                    b.Property<int>("SlashingArmor")
                        .HasColumnType("integer");

                    b.Property<bool>("SlashingDamage")
                        .HasColumnType("boolean");

                    b.Property<int>("UserId")
                        .HasColumnType("integer");

                    b.Property<int?>("UserProfileId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("UserProfileId");

                    b.ToTable("Enemies");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            BaseDamage = 5,
                            BaseExperience = 10,
                            BaseHealth = 10,
                            BluntArmor = 0,
                            BluntDamage = true,
                            Description = "A brown moving puddle that resembles a puddle of mud.",
                            ImageId = 1,
                            MaxLevel = 3,
                            MinLevel = 1,
                            Name = "Mudling",
                            PiercingArmor = 0,
                            PiercingDamage = false,
                            SlashingArmor = 0,
                            SlashingDamage = false,
                            UserId = 1
                        },
                        new
                        {
                            Id = 2,
                            BaseDamage = 5,
                            BaseExperience = 10,
                            BaseHealth = 10,
                            BluntArmor = 0,
                            BluntDamage = false,
                            Description = "A small, green sliver that could easily be mistaken for a blade of grass.",
                            ImageId = 1,
                            MaxLevel = 3,
                            MinLevel = 1,
                            Name = "Grassling",
                            PiercingArmor = 0,
                            PiercingDamage = false,
                            SlashingArmor = 0,
                            SlashingDamage = true,
                            UserId = 1
                        },
                        new
                        {
                            Id = 3,
                            BaseDamage = 5,
                            BaseExperience = 10,
                            BaseHealth = 10,
                            BluntArmor = 0,
                            BluntDamage = false,
                            Description = "A blue puddle.",
                            ImageId = 1,
                            MaxLevel = 3,
                            MinLevel = 1,
                            Name = "Waterling",
                            PiercingArmor = 0,
                            PiercingDamage = true,
                            SlashingArmor = 0,
                            SlashingDamage = false,
                            UserId = 1
                        },
                        new
                        {
                            Id = 4,
                            BaseDamage = 5,
                            BaseExperience = 10,
                            BaseHealth = 10,
                            BluntArmor = 0,
                            BluntDamage = false,
                            Description = "A blue puddle.",
                            ImageId = 1,
                            MaxLevel = 3,
                            MinLevel = 1,
                            Name = "Skeleton",
                            PiercingArmor = 0,
                            PiercingDamage = true,
                            SlashingArmor = 0,
                            SlashingDamage = false,
                            UserId = 1
                        },
                        new
                        {
                            Id = 5,
                            BaseDamage = 5,
                            BaseExperience = 10,
                            BaseHealth = 10,
                            BluntArmor = 0,
                            BluntDamage = false,
                            Description = "A blue puddle.",
                            ImageId = 1,
                            MaxLevel = 3,
                            MinLevel = 1,
                            Name = "Giant Rat",
                            PiercingArmor = 0,
                            PiercingDamage = true,
                            SlashingArmor = 0,
                            SlashingDamage = false,
                            UserId = 1
                        },
                        new
                        {
                            Id = 6,
                            BaseDamage = 5,
                            BaseExperience = 10,
                            BaseHealth = 10,
                            BluntArmor = 0,
                            BluntDamage = false,
                            Description = "A blue puddle.",
                            ImageId = 1,
                            MaxLevel = 3,
                            MinLevel = 1,
                            Name = "Cultist",
                            PiercingArmor = 0,
                            PiercingDamage = true,
                            SlashingArmor = 0,
                            SlashingDamage = false,
                            UserId = 1
                        },
                        new
                        {
                            Id = 7,
                            BaseDamage = 5,
                            BaseExperience = 10,
                            BaseHealth = 10,
                            BluntArmor = 0,
                            BluntDamage = false,
                            Description = "A blue puddle.",
                            ImageId = 1,
                            MaxLevel = 3,
                            MinLevel = 1,
                            Name = "Grave Worm",
                            PiercingArmor = 0,
                            PiercingDamage = true,
                            SlashingArmor = 0,
                            SlashingDamage = false,
                            UserId = 1
                        },
                        new
                        {
                            Id = 8,
                            BaseDamage = 5,
                            BaseExperience = 10,
                            BaseHealth = 10,
                            BluntArmor = 0,
                            BluntDamage = false,
                            Description = "A blue puddle.",
                            ImageId = 1,
                            MaxLevel = 3,
                            MinLevel = 1,
                            Name = "Wild Boar",
                            PiercingArmor = 0,
                            PiercingDamage = true,
                            SlashingArmor = 0,
                            SlashingDamage = false,
                            UserId = 1
                        },
                        new
                        {
                            Id = 9,
                            BaseDamage = 5,
                            BaseExperience = 10,
                            BaseHealth = 10,
                            BluntArmor = 0,
                            BluntDamage = false,
                            Description = "A blue puddle.",
                            ImageId = 1,
                            MaxLevel = 3,
                            MinLevel = 1,
                            Name = "Stag",
                            PiercingArmor = 0,
                            PiercingDamage = true,
                            SlashingArmor = 0,
                            SlashingDamage = false,
                            UserId = 1
                        },
                        new
                        {
                            Id = 10,
                            BaseDamage = 5,
                            BaseExperience = 10,
                            BaseHealth = 10,
                            BluntArmor = 0,
                            BluntDamage = false,
                            Description = "A blue puddle.",
                            ImageId = 1,
                            MaxLevel = 3,
                            MinLevel = 1,
                            Name = "Impling",
                            PiercingArmor = 0,
                            PiercingDamage = true,
                            SlashingArmor = 0,
                            SlashingDamage = false,
                            UserId = 1
                        },
                        new
                        {
                            Id = 11,
                            BaseDamage = 7,
                            BaseExperience = 150,
                            BaseHealth = 160,
                            BluntArmor = 0,
                            BluntDamage = false,
                            Description = "A small, green creature with a big nose and pointy ears.",
                            ImageId = 2,
                            MaxLevel = 15,
                            MinLevel = 10,
                            Name = "Kobold",
                            PiercingArmor = 5,
                            PiercingDamage = false,
                            SlashingArmor = 5,
                            SlashingDamage = true,
                            UserId = 1
                        });
                });

            modelBuilder.Entity("Capstone_2.Models.Image", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("ImageLocation")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Images");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            ImageLocation = "assets/elementals/mudling/mudling.png"
                        },
                        new
                        {
                            Id = 2,
                            ImageLocation = "assets/kobolds/kobold child/kobold child.png"
                        });
                });

            modelBuilder.Entity("Capstone_2.Models.Item", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Items");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "Sword"
                        },
                        new
                        {
                            Id = 2,
                            Name = "Twohanded Sword"
                        },
                        new
                        {
                            Id = 3,
                            Name = "Bow"
                        });
                });

            modelBuilder.Entity("EnemyItem", b =>
                {
                    b.Property<int>("EnemiesId")
                        .HasColumnType("integer");

                    b.Property<int>("ItemsId")
                        .HasColumnType("integer");

                    b.HasKey("EnemiesId", "ItemsId");

                    b.HasIndex("ItemsId");

                    b.ToTable("EnemyItem");

                    b.HasData(
                        new
                        {
                            EnemiesId = 1,
                            ItemsId = 1
                        },
                        new
                        {
                            EnemiesId = 1,
                            ItemsId = 2
                        },
                        new
                        {
                            EnemiesId = 1,
                            ItemsId = 3
                        },
                        new
                        {
                            EnemiesId = 2,
                            ItemsId = 2
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex");

                    b.ToTable("AspNetRoles", (string)null);

                    b.HasData(
                        new
                        {
                            Id = "c3aaeb97-d2ba-4a53-a521-4eea61e59b35",
                            Name = "Admin",
                            NormalizedName = "admin"
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("text");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("text");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUser", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("integer");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("text");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("boolean");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("boolean");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("text");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("text");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("boolean");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("text");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("boolean");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex");

                    b.ToTable("AspNetUsers", (string)null);

                    b.HasData(
                        new
                        {
                            Id = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "6a4522eb-04d5-420f-bdfd-d532f724a942",
                            Email = "admina@strator.comx",
                            EmailConfirmed = false,
                            LockoutEnabled = false,
                            PasswordHash = "AQAAAAIAAYagAAAAEPc/fwaA5N+PQQc6/MAhIu2UqEzKHDFERvR7EjgRRfvJ5tz+bz6s8bN06YvXig7aSw==",
                            PhoneNumberConfirmed = false,
                            SecurityStamp = "5f800b4f-6660-46c9-a5e7-f028d4647e0d",
                            TwoFactorEnabled = false,
                            UserName = "Administrator"
                        },
                        new
                        {
                            Id = "d8d76512-74f1-43bb-b1fd-87d3a8aa36df",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "4324ef69-38d7-4775-8301-fa5f687c969c",
                            Email = "john@doe.comx",
                            EmailConfirmed = false,
                            LockoutEnabled = false,
                            PasswordHash = "AQAAAAIAAYagAAAAECMJtwzDfAj7ZJcVZHe7yBc/yLyX6/OOSQ05xqINR9CGnpnNEhZwhatyMXI5jZnw9Q==",
                            PhoneNumberConfirmed = false,
                            SecurityStamp = "349c5ae1-0da0-4f59-ba25-7a949c01ba72",
                            TwoFactorEnabled = false,
                            UserName = "JohnDoe"
                        },
                        new
                        {
                            Id = "a7d21fac-3b21-454a-a747-075f072d0cf3",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "5e411555-958b-428c-8d8e-e422a0a35019",
                            Email = "jane@smith.comx",
                            EmailConfirmed = false,
                            LockoutEnabled = false,
                            PasswordHash = "AQAAAAIAAYagAAAAEIrMTfZnd3kM0z47/VraVMbFkebB4rMHFrSyysMbsgULDfIf6ffPX4tlSyJiH31sKg==",
                            PhoneNumberConfirmed = false,
                            SecurityStamp = "19e83e52-862e-425f-abc5-ba9a1e86d64d",
                            TwoFactorEnabled = false,
                            UserName = "JaneSmith"
                        },
                        new
                        {
                            Id = "c806cfae-bda9-47c5-8473-dd52fd056a9b",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "821ca2b1-6e30-4cf7-a0b7-7c7162078de2",
                            Email = "alice@johnson.comx",
                            EmailConfirmed = false,
                            LockoutEnabled = false,
                            PasswordHash = "AQAAAAIAAYagAAAAENOjBfjF8+i57ebvEDePL4FyNS9nXW3ldK1rXUtr+Fzde+rsji5e0Mz2hFSv2+okTw==",
                            PhoneNumberConfirmed = false,
                            SecurityStamp = "994088cf-538d-4b8b-b417-d90ffcaabd1a",
                            TwoFactorEnabled = false,
                            UserName = "AliceJohnson"
                        },
                        new
                        {
                            Id = "9ce89d88-75da-4a80-9b0d-3fe58582b8e2",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "b72d82b3-5a49-4cb3-b66d-d63d5f2a78e4",
                            Email = "bob@williams.comx",
                            EmailConfirmed = false,
                            LockoutEnabled = false,
                            PasswordHash = "AQAAAAIAAYagAAAAEMcB/HuMOUyg6yWAl2hkp6MFERi4FEeZuyToF+fupVOrTrz0Di+8Jm0+4sw/UxImVQ==",
                            PhoneNumberConfirmed = false,
                            SecurityStamp = "c312d556-31f9-4c30-9e44-d933e9059c4e",
                            TwoFactorEnabled = false,
                            UserName = "BobWilliams"
                        },
                        new
                        {
                            Id = "d224a03d-bf0c-4a05-b728-e3521e45d74d",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "070768fe-8025-4e35-9868-c6da258996f7",
                            Email = "Eve@Davis.comx",
                            EmailConfirmed = false,
                            LockoutEnabled = false,
                            PasswordHash = "AQAAAAIAAYagAAAAEB8QNaNdeb00uZm5zplNe1OfCrG/RW5s8Z9vY3JUWJcuZm6Gq++V1NT/HEyIturCtg==",
                            PhoneNumberConfirmed = false,
                            SecurityStamp = "1f084d62-b17c-4e00-8e33-aead48786d8b",
                            TwoFactorEnabled = false,
                            UserName = "EveDavis"
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("text");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("text");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("text");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("text");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("text");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("text");

                    b.Property<string>("RoleId")
                        .HasColumnType("text");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles", (string)null);

                    b.HasData(
                        new
                        {
                            UserId = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                            RoleId = "c3aaeb97-d2ba-4a53-a521-4eea61e59b35"
                        },
                        new
                        {
                            UserId = "d8d76512-74f1-43bb-b1fd-87d3a8aa36df",
                            RoleId = "c3aaeb97-d2ba-4a53-a521-4eea61e59b35"
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("text");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<string>("Value")
                        .HasColumnType("text");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens", (string)null);
                });

            modelBuilder.Entity("Capstone2.Models.UserProfile", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", "IdentityUser")
                        .WithMany()
                        .HasForeignKey("IdentityUserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("IdentityUser");
                });

            modelBuilder.Entity("Capstone_2.Models.Enemy", b =>
                {
                    b.HasOne("Capstone2.Models.UserProfile", null)
                        .WithMany("Enemies")
                        .HasForeignKey("UserProfileId");
                });

            modelBuilder.Entity("EnemyItem", b =>
                {
                    b.HasOne("Capstone_2.Models.Enemy", null)
                        .WithMany()
                        .HasForeignKey("EnemiesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Capstone_2.Models.Item", null)
                        .WithMany()
                        .HasForeignKey("ItemsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Capstone2.Models.UserProfile", b =>
                {
                    b.Navigation("Enemies");
                });
#pragma warning restore 612, 618
        }
    }
}
