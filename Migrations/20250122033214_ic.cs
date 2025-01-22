using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Capstone_2.Migrations
{
    /// <inheritdoc />
    public partial class ic : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    UserName = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    Email = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "boolean", nullable: false),
                    PasswordHash = table.Column<string>(type: "text", nullable: true),
                    SecurityStamp = table.Column<string>(type: "text", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "text", nullable: true),
                    PhoneNumber = table.Column<string>(type: "text", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "boolean", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "boolean", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "boolean", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Characters",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    UserId = table.Column<int>(type: "integer", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Health = table.Column<int>(type: "integer", nullable: false),
                    AttackPower = table.Column<int>(type: "integer", nullable: false),
                    SlashingArmor = table.Column<int>(type: "integer", nullable: false),
                    PiercingArmor = table.Column<int>(type: "integer", nullable: false),
                    BluntArmor = table.Column<int>(type: "integer", nullable: false),
                    SlashingPenetration = table.Column<int>(type: "integer", nullable: false),
                    PiercingPenetration = table.Column<int>(type: "integer", nullable: false),
                    BluntPenetration = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Characters", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Items",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Items", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    RoleId = table.Column<string>(type: "text", nullable: false),
                    ClaimType = table.Column<string>(type: "text", nullable: true),
                    ClaimValue = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    UserId = table.Column<string>(type: "text", nullable: false),
                    ClaimType = table.Column<string>(type: "text", nullable: true),
                    ClaimValue = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(type: "text", nullable: false),
                    ProviderKey = table.Column<string>(type: "text", nullable: false),
                    ProviderDisplayName = table.Column<string>(type: "text", nullable: true),
                    UserId = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "text", nullable: false),
                    RoleId = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "text", nullable: false),
                    LoginProvider = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Value = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserProfiles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    FirstName = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    LastName = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    CreateDateTime = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    ImageLocation = table.Column<string>(type: "character varying(255)", maxLength: 255, nullable: false),
                    IdentityUserId = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserProfiles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserProfiles_AspNetUsers_IdentityUserId",
                        column: x => x.IdentityUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Enemies",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    UserId = table.Column<int>(type: "integer", nullable: false),
                    ImageUrl = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    MinLevel = table.Column<int>(type: "integer", nullable: false),
                    MaxLevel = table.Column<int>(type: "integer", nullable: false),
                    BaseDamage = table.Column<int>(type: "integer", nullable: false),
                    BaseHealth = table.Column<int>(type: "integer", nullable: false),
                    BaseExperience = table.Column<int>(type: "integer", nullable: false),
                    SlashingArmor = table.Column<int>(type: "integer", nullable: false),
                    PiercingArmor = table.Column<int>(type: "integer", nullable: false),
                    BluntArmor = table.Column<int>(type: "integer", nullable: false),
                    SlashingDamage = table.Column<bool>(type: "boolean", nullable: false),
                    PiercingDamage = table.Column<bool>(type: "boolean", nullable: false),
                    BluntDamage = table.Column<bool>(type: "boolean", nullable: false),
                    DodgeRating = table.Column<int>(type: "integer", nullable: false),
                    AccuracyRating = table.Column<int>(type: "integer", nullable: false),
                    FireResist = table.Column<int>(type: "integer", nullable: false),
                    IceResist = table.Column<int>(type: "integer", nullable: false),
                    LightningResist = table.Column<int>(type: "integer", nullable: false),
                    MinGold = table.Column<int>(type: "integer", nullable: false),
                    MaxGold = table.Column<int>(type: "integer", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: false),
                    ItemIds = table.Column<List<int>>(type: "integer[]", nullable: true),
                    UserProfileId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Enemies", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Enemies_UserProfiles_UserProfileId",
                        column: x => x.UserProfileId,
                        principalTable: "UserProfiles",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "EnemiesItems",
                columns: table => new
                {
                    EnemiesId = table.Column<int>(type: "integer", nullable: false),
                    ItemsId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EnemiesItems", x => new { x.EnemiesId, x.ItemsId });
                    table.ForeignKey(
                        name: "FK_EnemiesItems_Enemies_EnemiesId",
                        column: x => x.EnemiesId,
                        principalTable: "Enemies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EnemiesItems_Items_ItemsId",
                        column: x => x.ItemsId,
                        principalTable: "Items",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "EnemyItem",
                columns: table => new
                {
                    EnemiesId = table.Column<int>(type: "integer", nullable: false),
                    ItemsId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EnemyItem", x => new { x.EnemiesId, x.ItemsId });
                    table.ForeignKey(
                        name: "FK_EnemyItem_Enemies_EnemiesId",
                        column: x => x.EnemiesId,
                        principalTable: "Enemies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EnemyItem_Items_ItemsId",
                        column: x => x.ItemsId,
                        principalTable: "Items",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "c3aaeb97-d2ba-4a53-a521-4eea61e59b35", null, "Admin", "admin" });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[,]
                {
                    { "9ce89d88-75da-4a80-9b0d-3fe58582b8e2", 0, "5ae117d5-a4ba-4866-8300-5060ba64ce6a", "bob@williams.comx", false, false, null, null, null, "AQAAAAIAAYagAAAAEEIm/NP6yRH11nO7mBwtnJ5bthKb3FIBVgJgF6xRGzyqNKdXTeZ9C//ajFfaGvg5Fw==", null, false, "5099bee3-ba52-4112-b2e7-14fa31ca80df", false, "BobWilliams" },
                    { "a7d21fac-3b21-454a-a747-075f072d0cf3", 0, "4bcb743c-387e-4810-8fbe-3acc21a13750", "jane@smith.comx", false, false, null, null, null, "AQAAAAIAAYagAAAAEJeSo1NJeyUAiXkRZ9KGwXlURFQo16ls+Zj5VCCrAt+zeiuOWCgHNKOqD0khvAGqmw==", null, false, "6d5801f6-4aa8-48a0-aceb-c979c24bd0e2", false, "JaneSmith" },
                    { "c806cfae-bda9-47c5-8473-dd52fd056a9b", 0, "9cf1dd56-0bab-4d62-b8cb-ab03cf1b2575", "alice@johnson.comx", false, false, null, null, null, "AQAAAAIAAYagAAAAEBj2aKFl3i9nvaPhixsKa2/vNGI1AXlNFobzF1ZQL6P48jrBR3GVwmpo9/wj8OH8cg==", null, false, "eb07ea18-3c5c-4c52-a352-24741905954a", false, "AliceJohnson" },
                    { "d224a03d-bf0c-4a05-b728-e3521e45d74d", 0, "7ae72385-e8c8-4427-8a46-fdebe1f63367", "Eve@Davis.comx", false, false, null, null, null, "AQAAAAIAAYagAAAAEL2QsenTZgg4oQHmxspaNwErpZ7PENFloPp9aLHzWIRrlHCrblGQJ1rEvGoM3TJNeQ==", null, false, "3a00bb07-c31e-4d0a-aeae-0e24ba64e2a8", false, "EveDavis" },
                    { "d8d76512-74f1-43bb-b1fd-87d3a8aa36df", 0, "f35dc17a-76b1-44e5-9a59-e8025eb4963a", "john@doe.comx", false, false, null, null, null, "AQAAAAIAAYagAAAAELCXJuWC7q4irQUlZFBmcRhqTsJivCFK0I8ax3YZ0pzlUXhlAQSK0EuOdiBSBaHJDg==", null, false, "648379ce-5660-47ea-bd93-2f9081076542", false, "JohnDoe" },
                    { "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f", 0, "5cce43f5-dd59-4865-aa54-a01f9ff5b73b", "admina@strator.comx", false, false, null, null, null, "AQAAAAIAAYagAAAAENjmLRxYdhfaj2ctbwEnd0eOrkuqZWrdHfWVvRjo9wIpL/ZdWFgPaBonVydpUeSENA==", null, false, "fdb30090-5fbe-4160-ad3f-fe75af38a02f", false, "Administrator" }
                });

            migrationBuilder.InsertData(
                table: "Characters",
                columns: new[] { "Id", "AttackPower", "BluntArmor", "BluntPenetration", "Health", "Name", "PiercingArmor", "PiercingPenetration", "SlashingArmor", "SlashingPenetration", "UserId" },
                values: new object[,]
                {
                    { 1, 10, 3, 7, 50, "Fighter", 3, 6, 3, 5, 1 },
                    { 2, 20, 9, 1, 100, "Paladin", 9, 1, 9, 1, 1 },
                    { 3, 5, 1, 10, 40, "Thief", 2, 10, 1, 10, 1 }
                });

            migrationBuilder.InsertData(
                table: "Enemies",
                columns: new[] { "Id", "AccuracyRating", "BaseDamage", "BaseExperience", "BaseHealth", "BluntArmor", "BluntDamage", "Description", "DodgeRating", "FireResist", "IceResist", "ImageUrl", "ItemIds", "LightningResist", "MaxGold", "MaxLevel", "MinGold", "MinLevel", "Name", "PiercingArmor", "PiercingDamage", "SlashingArmor", "SlashingDamage", "UserId", "UserProfileId" },
                values: new object[,]
                {
                    { 1, 0, 5, 10, 10, 0, false, "", 0, 0, 0, "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2Fno%20image%20default.avif?alt=media&token=0aa5fa20-7104-4ac6-8845-92767fe685f2", new List<int>(), 0, 0, 3, 0, 1, "Mudling", 0, false, 0, false, 1, null },
                    { 2, 0, 5, 10, 10, 0, false, "", 0, 0, 0, "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2FNo%20Image.png?alt=media&token=a7ddaad7-0650-43d7-bcdf-de98a4b81542", new List<int>(), 0, 0, 3, 0, 1, "Placeholder", 0, false, 0, false, 1, null },
                    { 3, 0, 5, 10, 10, 0, false, "", 0, 0, 0, "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2FNo%20Image.png?alt=media&token=a7ddaad7-0650-43d7-bcdf-de98a4b81542", new List<int>(), 0, 0, 3, 0, 1, "Placeholder", 0, false, 0, false, 1, null },
                    { 4, 0, 5, 10, 10, 0, false, "", 0, 0, 0, "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2FNo%20Image.png?alt=media&token=a7ddaad7-0650-43d7-bcdf-de98a4b81542", new List<int>(), 0, 0, 3, 0, 1, "Placeholder", 0, false, 0, false, 1, null },
                    { 5, 0, 5, 10, 10, 0, false, "", 0, 0, 0, "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2FNo%20Image.png?alt=media&token=a7ddaad7-0650-43d7-bcdf-de98a4b81542", new List<int>(), 0, 0, 3, 0, 1, "Placeholder", 0, false, 0, false, 1, null },
                    { 6, 0, 5, 10, 10, 0, false, "", 0, 0, 0, "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2FNo%20Image.png?alt=media&token=a7ddaad7-0650-43d7-bcdf-de98a4b81542", new List<int>(), 0, 0, 3, 0, 1, "Placeholder", 0, false, 0, false, 1, null },
                    { 7, 0, 5, 10, 10, 0, false, "", 0, 0, 0, "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2FNo%20Image.png?alt=media&token=a7ddaad7-0650-43d7-bcdf-de98a4b81542", new List<int>(), 0, 0, 3, 0, 1, "Placeholder", 0, false, 0, false, 1, null },
                    { 8, 0, 5, 10, 10, 0, false, "", 0, 0, 0, "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2FNo%20Image.png?alt=media&token=a7ddaad7-0650-43d7-bcdf-de98a4b81542", new List<int>(), 0, 0, 3, 0, 1, "Placeholder", 0, false, 0, false, 1, null },
                    { 9, 0, 5, 10, 10, 0, false, "", 0, 0, 0, "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2FNo%20Image.png?alt=media&token=a7ddaad7-0650-43d7-bcdf-de98a4b81542", new List<int>(), 0, 0, 3, 0, 1, "Placeholder", 0, false, 0, false, 1, null },
                    { 10, 0, 5, 10, 10, 0, false, "", 0, 0, 0, "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2FNo%20Image.png?alt=media&token=a7ddaad7-0650-43d7-bcdf-de98a4b81542", new List<int>(), 0, 0, 3, 0, 1, "Placeholder", 0, false, 0, false, 1, null },
                    { 11, 0, 5, 10, 10, 0, false, "", 0, 0, 0, "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2FNo%20Image.png?alt=media&token=a7ddaad7-0650-43d7-bcdf-de98a4b81542", new List<int>(), 0, 0, 3, 0, 1, "Placeholder", 0, false, 0, false, 1, null },
                    { 12, 0, 5, 10, 10, 0, false, "", 0, 0, 0, "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2FNo%20Image.png?alt=media&token=a7ddaad7-0650-43d7-bcdf-de98a4b81542", new List<int>(), 0, 0, 3, 0, 1, "Placeholder", 0, false, 0, false, 1, null }
                });

            migrationBuilder.InsertData(
                table: "Items",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "Sword" },
                    { 2, "Twohanded Sword" },
                    { 3, "Bow" },
                    { 4, "Fist Weapon" },
                    { 5, "Axe" },
                    { 6, "Leather Chest" },
                    { 7, "Potion" },
                    { 8, "Small Gem" },
                    { 9, "Dagger" },
                    { 10, "Mudball" },
                    { 11, "Fish" },
                    { 12, "Leather Trousers" },
                    { 13, "Plate Gauntlets" },
                    { 14, "Large Bone" },
                    { 15, "Small Bone" },
                    { 16, "Cape" },
                    { 17, "Small Key" },
                    { 18, "Fishing Rod" },
                    { 19, "Bright Yellow Flower" },
                    { 20, "Tome" }
                });

            migrationBuilder.InsertData(
                table: "AspNetUserRoles",
                columns: new[] { "RoleId", "UserId" },
                values: new object[,]
                {
                    { "c3aaeb97-d2ba-4a53-a521-4eea61e59b35", "d8d76512-74f1-43bb-b1fd-87d3a8aa36df" },
                    { "c3aaeb97-d2ba-4a53-a521-4eea61e59b35", "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f" }
                });

            migrationBuilder.InsertData(
                table: "EnemiesItems",
                columns: new[] { "EnemiesId", "ItemsId" },
                values: new object[,]
                {
                    { 1, 1 },
                    { 1, 2 },
                    { 1, 3 }
                });

            migrationBuilder.InsertData(
                table: "EnemyItem",
                columns: new[] { "EnemiesId", "ItemsId" },
                values: new object[,]
                {
                    { 1, 1 },
                    { 1, 2 },
                    { 1, 3 }
                });

            migrationBuilder.InsertData(
                table: "UserProfiles",
                columns: new[] { "Id", "CreateDateTime", "FirstName", "IdentityUserId", "ImageLocation", "LastName" },
                values: new object[,]
                {
                    { 1, new DateTime(2022, 1, 25, 0, 0, 0, 0, DateTimeKind.Unspecified), "Admina", "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f", "https://robohash.org/numquamutut.png?size=150x150&set=set1", "Strator" },
                    { 2, new DateTime(2023, 2, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), "John", "d8d76512-74f1-43bb-b1fd-87d3a8aa36df", "https://robohash.org/nisiautemet.png?size=150x150&set=set1", "Doe" },
                    { 3, new DateTime(2022, 3, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "Jane", "a7d21fac-3b21-454a-a747-075f072d0cf3", "https://robohash.org/molestiaemagnamet.png?size=150x150&set=set1", "Smith" },
                    { 4, new DateTime(2023, 6, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), "Alice", "c806cfae-bda9-47c5-8473-dd52fd056a9b", "https://robohash.org/deseruntutipsum.png?size=150x150&set=set1", "Johnson" },
                    { 5, new DateTime(2023, 5, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "Bob", "9ce89d88-75da-4a80-9b0d-3fe58582b8e2", "https://robohash.org/quiundedignissimos.png?size=150x150&set=set1", "Williams" },
                    { 6, new DateTime(2022, 10, 18, 0, 0, 0, 0, DateTimeKind.Unspecified), "Eve", "d224a03d-bf0c-4a05-b728-e3521e45d74d", "https://robohash.org/hicnihilipsa.png?size=150x150&set=set1", "Davis" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Enemies_UserProfileId",
                table: "Enemies",
                column: "UserProfileId");

            migrationBuilder.CreateIndex(
                name: "IX_EnemiesItems_ItemsId",
                table: "EnemiesItems",
                column: "ItemsId");

            migrationBuilder.CreateIndex(
                name: "IX_EnemyItem_ItemsId",
                table: "EnemyItem",
                column: "ItemsId");

            migrationBuilder.CreateIndex(
                name: "IX_UserProfiles_IdentityUserId",
                table: "UserProfiles",
                column: "IdentityUserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "Characters");

            migrationBuilder.DropTable(
                name: "EnemiesItems");

            migrationBuilder.DropTable(
                name: "EnemyItem");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "Enemies");

            migrationBuilder.DropTable(
                name: "Items");

            migrationBuilder.DropTable(
                name: "UserProfiles");

            migrationBuilder.DropTable(
                name: "AspNetUsers");
        }
    }
}
