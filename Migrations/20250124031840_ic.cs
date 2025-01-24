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
                    AttackPower = table.Column<int>(type: "integer", nullable: false),
                    BaseHealth = table.Column<int>(type: "integer", nullable: false),
                    BaseExperience = table.Column<int>(type: "integer", nullable: false),
                    SlashingArmor = table.Column<int>(type: "integer", nullable: false),
                    PiercingArmor = table.Column<int>(type: "integer", nullable: false),
                    BluntArmor = table.Column<int>(type: "integer", nullable: false),
                    SlashingDamage = table.Column<bool>(type: "boolean", nullable: false),
                    PiercingDamage = table.Column<bool>(type: "boolean", nullable: false),
                    BluntDamage = table.Column<bool>(type: "boolean", nullable: false),
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
                    { "9ce89d88-75da-4a80-9b0d-3fe58582b8e2", 0, "c6e2c593-e7a9-48de-a61e-0fa07563c1a5", "bob@williams.comx", false, false, null, null, null, "AQAAAAIAAYagAAAAEC7uB5X2TqTzkgS+85El9MKxrarAIBSM1Tk3Q94uF1F4PBTNGUMqzTa2+TPgHOeRFA==", null, false, "9d6ee5eb-dfb0-4769-a0cc-6c582115872b", false, "BobWilliams" },
                    { "a7d21fac-3b21-454a-a747-075f072d0cf3", 0, "1541af62-5ee8-4b80-8358-92a3112ddc6e", "jane@smith.comx", false, false, null, null, null, "AQAAAAIAAYagAAAAEAU9YpHbFiG1ca6I3z4aH1oFvwpa2rUW6RmAjdLDmSKzVbMOj8phvEMmKEaR0LsIEQ==", null, false, "a99f5fb2-ef81-49e5-9d06-9f926f2c4d05", false, "JaneSmith" },
                    { "c806cfae-bda9-47c5-8473-dd52fd056a9b", 0, "8f120f0b-c6de-4d99-91ef-4b2eb04f1f5d", "alice@johnson.comx", false, false, null, null, null, "AQAAAAIAAYagAAAAEIo8bIZD4un/LFJkBus/IsPhq8hNCwNblSaSaWqF85YZMMfs1aNMUsue8Eu0NguTLQ==", null, false, "2c0235bc-02ed-46cd-ad54-dced8a7d3a49", false, "AliceJohnson" },
                    { "d224a03d-bf0c-4a05-b728-e3521e45d74d", 0, "db4dd824-9525-484b-bb59-41117769cc12", "Eve@Davis.comx", false, false, null, null, null, "AQAAAAIAAYagAAAAELXqrjSnXVAglgv0C/wtZkzthHUk90X+xnjYWyCFFjvyXou/Zgdb1jZMRZGWoK8pCA==", null, false, "39ff4205-91a5-432d-a34b-edcba7992763", false, "EveDavis" },
                    { "d8d76512-74f1-43bb-b1fd-87d3a8aa36df", 0, "c59cb69f-1554-4d64-8c61-9c281e3681cb", "john@doe.comx", false, false, null, null, null, "AQAAAAIAAYagAAAAEOeERIwd3XX+gqlnLmE30yUnpXZ9jlEuApCWGjTeDTlpiS/32Qo0p+drTkfF4weXlg==", null, false, "37f2372e-84d1-4178-a09b-3aef9c32c3c8", false, "JohnDoe" },
                    { "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f", 0, "f674c948-8c2f-4caa-a337-064d42f0cff5", "admina@strator.comx", false, false, null, null, null, "AQAAAAIAAYagAAAAEDr7HwDRJ3WjfLYzxX1Vnkx46ZuQBSswGbObyLTQ55VIo5Ig14MFoiJrezEVtMThWw==", null, false, "fb429439-2bb3-4796-b430-5d018c477c29", false, "Administrator" }
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
                columns: new[] { "Id", "AttackPower", "BaseExperience", "BaseHealth", "BluntArmor", "BluntDamage", "Description", "FireResist", "IceResist", "ImageUrl", "ItemIds", "LightningResist", "MaxGold", "MaxLevel", "MinGold", "MinLevel", "Name", "PiercingArmor", "PiercingDamage", "SlashingArmor", "SlashingDamage", "UserId", "UserProfileId" },
                values: new object[,]
                {
                    { 1, 5, 10, 30, 0, true, "A muddy little earth elemental", 0, 0, "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2Fmudling.png?alt=media&token=e88f74ca-310b-4d42-8bf2-8f659ce998cf", new List<int> { 2 }, 0, 5, 5, 1, 1, "Mudling", 0, false, 0, false, 1, null },
                    { 2, 5, 10, 30, 0, false, "An innocent looking grass elemental", 0, 0, "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2Fgrassling.png?alt=media&token=7bb90e0a-ca52-4c19-b67e-babe6681c157", new List<int> { 6 }, 0, 5, 5, 1, 1, "Grassling", 0, false, 0, true, 1, null },
                    { 3, 5, 10, 30, 0, false, "A harmless looking water elemental", 0, 0, "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2Fwaterling.png?alt=media&token=a752abdc-a38d-469f-9029-a05f3acbc565", new List<int> { 2 }, 0, 5, 5, 1, 1, "Waterling", 0, true, 0, false, 1, null },
                    { 4, 9, 10, 90, 2, false, "An angry looking Gnoll", 0, 0, "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2F_496c9af9-a760-46b9-bf18-fd7014b94883.jpg?alt=media&token=8953b581-9615-4c8f-b11e-da010ffba5dd", new List<int> { 1 }, 0, 12, 10, 4, 6, "Gnoll Mage", 2, false, 2, true, 1, null },
                    { 5, 18, 78, 150, 5, false, "A small Kobold", 0, 0, "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2F_7a867825-4cea-4ebc-8595-af8584818925.jpg?alt=media&token=1c37fb3b-1a7e-4a8d-8d45-5dcd4fff9991", new List<int> { 6 }, 0, 26, 15, 12, 10, "Kobold", 5, true, 5, true, 1, null },
                    { 6, 33, 250, 300, 20, true, "A large Minotaur", 0, 0, "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2F_657577c4-8972-4639-8aff-fa94d3767f35.jpg?alt=media&token=6a5fe8bc-9790-4588-9bd7-e1cdd925bace", new List<int> { 8, 9, 10 }, 0, 65, 30, 30, 20, "Minotaur", 10, true, 10, true, 1, null },
                    { 7, 27, 200, 230, 0, false, "", 0, 0, "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2F_8a350560-8617-4f3c-baa3-b3d6b7191db7.jpg?alt=media&token=43fdecd8-f5ff-426e-a5f7-5a918d0392e8", new List<int> { 7 }, 0, 45, 25, 22, 20, "Orc Hunter", 7, true, 7, false, 1, null },
                    { 8, 15, 200, 400, 40, true, "", 0, 0, "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2F_e8af266a-749d-4b95-9673-336e05df4dcc.jpg?alt=media&token=4bc4d096-4287-4c29-a6d4-5e67741f463b", new List<int> { 1, 5, 8 }, 0, 90, 25, 40, 20, "Forest Dweller", 10, false, 10, false, 1, null },
                    { 9, 200, 3750, 4000, 300, true, "", 0, 0, "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2F_324919a7-190f-4cc0-a8ee-b4678b6ac2f3.jpg?alt=media&token=a6284056-b304-4e12-8702-7f9ba7718132", new List<int> { 2, 22 }, 0, 700, 90, 500, 80, "Dragon", 200, true, 200, true, 1, null },
                    { 10, 7, 35, 60, 1, false, "", 0, 0, "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2Fgiant%20rat.png?alt=media&token=d0ba98a3-ee93-48fa-b25a-d9b12e6e63a1", new List<int>(), 0, 12, 10, 7, 5, "Giant Rat", 1, true, 1, true, 1, null },
                    { 11, 9, 70, 90, 5, true, "", 0, 0, "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2Fwild%20boar.png?alt=media&token=6aa861fc-ae0f-412d-aba8-812ffde7bad6", new List<int> { 5 }, 0, 10, 10, 5, 6, "Wild Boar", 0, true, 0, false, 1, null },
                    { 12, 55, 2100, 1350, 50, false, "", 0, 0, "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2F_f4076778-abc0-4fec-8388-0a29374242ff.jpg?alt=media&token=e163475d-1ead-4ffa-9584-aac4f20d39ea", new List<int> { 7, 8, 21, 22 }, 0, 250, 80, 100, 70, "Forest Esper", 120, true, 120, true, 1, null }
                });

            migrationBuilder.InsertData(
                table: "Items",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "Shortsword" },
                    { 2, "Claymore" },
                    { 3, "Longbow" },
                    { 4, "Great Axe" },
                    { 5, "Axe" },
                    { 6, "Leather Chestpiece" },
                    { 7, "Small Healing Potion" },
                    { 8, "Small Mana Potion" },
                    { 9, "Sharp Dagger" },
                    { 10, "Mudball" },
                    { 11, "Fish" },
                    { 12, "Leaf Perch" },
                    { 13, "Copper Ore" },
                    { 14, "Leather Trousers" },
                    { 15, "Plate Gauntlets" },
                    { 16, "Large Bone" },
                    { 17, "Small Bone" },
                    { 18, "Cape" },
                    { 19, "Small Key" },
                    { 20, "Fishing Rod" },
                    { 21, "Pickle Lily" },
                    { 22, "Tome" }
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
