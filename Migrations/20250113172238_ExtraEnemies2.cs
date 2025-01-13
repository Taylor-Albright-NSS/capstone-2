using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Capstone_2.Migrations
{
    /// <inheritdoc />
    public partial class ExtraEnemies2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "9ce89d88-75da-4a80-9b0d-3fe58582b8e2",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "b72d82b3-5a49-4cb3-b66d-d63d5f2a78e4", "AQAAAAIAAYagAAAAEMcB/HuMOUyg6yWAl2hkp6MFERi4FEeZuyToF+fupVOrTrz0Di+8Jm0+4sw/UxImVQ==", "c312d556-31f9-4c30-9e44-d933e9059c4e" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "a7d21fac-3b21-454a-a747-075f072d0cf3",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "5e411555-958b-428c-8d8e-e422a0a35019", "AQAAAAIAAYagAAAAEIrMTfZnd3kM0z47/VraVMbFkebB4rMHFrSyysMbsgULDfIf6ffPX4tlSyJiH31sKg==", "19e83e52-862e-425f-abc5-ba9a1e86d64d" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "c806cfae-bda9-47c5-8473-dd52fd056a9b",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "821ca2b1-6e30-4cf7-a0b7-7c7162078de2", "AQAAAAIAAYagAAAAENOjBfjF8+i57ebvEDePL4FyNS9nXW3ldK1rXUtr+Fzde+rsji5e0Mz2hFSv2+okTw==", "994088cf-538d-4b8b-b417-d90ffcaabd1a" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "d224a03d-bf0c-4a05-b728-e3521e45d74d",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "070768fe-8025-4e35-9868-c6da258996f7", "AQAAAAIAAYagAAAAEB8QNaNdeb00uZm5zplNe1OfCrG/RW5s8Z9vY3JUWJcuZm6Gq++V1NT/HEyIturCtg==", "1f084d62-b17c-4e00-8e33-aead48786d8b" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "d8d76512-74f1-43bb-b1fd-87d3a8aa36df",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "4324ef69-38d7-4775-8301-fa5f687c969c", "AQAAAAIAAYagAAAAECMJtwzDfAj7ZJcVZHe7yBc/yLyX6/OOSQ05xqINR9CGnpnNEhZwhatyMXI5jZnw9Q==", "349c5ae1-0da0-4f59-ba25-7a949c01ba72" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "6a4522eb-04d5-420f-bdfd-d532f724a942", "AQAAAAIAAYagAAAAEPc/fwaA5N+PQQc6/MAhIu2UqEzKHDFERvR7EjgRRfvJ5tz+bz6s8bN06YvXig7aSw==", "5f800b4f-6660-46c9-a5e7-f028d4647e0d" });

            migrationBuilder.UpdateData(
                table: "Enemies",
                keyColumn: "Id",
                keyValue: 7,
                columns: new[] { "BaseDamage", "BaseExperience", "BaseHealth", "Description", "ImageId", "MaxLevel", "MinLevel", "Name", "PiercingArmor", "PiercingDamage", "SlashingArmor", "SlashingDamage" },
                values: new object[] { 5, 10, 10, "A blue puddle.", 1, 3, 1, "Grave Worm", 0, true, 0, false });

            migrationBuilder.InsertData(
                table: "Enemies",
                columns: new[] { "Id", "BaseDamage", "BaseExperience", "BaseHealth", "BluntArmor", "BluntDamage", "Description", "ImageId", "MaxLevel", "MinLevel", "Name", "PiercingArmor", "PiercingDamage", "SlashingArmor", "SlashingDamage", "UserId", "UserProfileId" },
                values: new object[,]
                {
                    { 8, 5, 10, 10, 0, false, "A blue puddle.", 1, 3, 1, "Wild Boar", 0, true, 0, false, 1, null },
                    { 9, 5, 10, 10, 0, false, "A blue puddle.", 1, 3, 1, "Stag", 0, true, 0, false, 1, null },
                    { 10, 5, 10, 10, 0, false, "A blue puddle.", 1, 3, 1, "Impling", 0, true, 0, false, 1, null },
                    { 11, 7, 150, 160, 0, false, "A small, green creature with a big nose and pointy ears.", 2, 15, 10, "Kobold", 5, false, 5, true, 1, null }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Enemies",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Enemies",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Enemies",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Enemies",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "9ce89d88-75da-4a80-9b0d-3fe58582b8e2",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "d9f60946-1139-4c1a-af08-dfd559d7f5fa", "AQAAAAIAAYagAAAAEM5myeqr7xjVQQOZNtu07x22GMjEzpj7kbl+gRYtzqdNSOXJ/F48j9XQ+ZBmCsinsQ==", "fa21abd9-1841-4808-9996-66b38d302c29" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "a7d21fac-3b21-454a-a747-075f072d0cf3",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "12844085-c442-438b-ae7d-f8e9001964c2", "AQAAAAIAAYagAAAAEK31jbI3C3LWtW635ZiwTn1eV7kdfSB7PRYzXUD2O2UPoYFA7VXlXeTvRKgFmSpQbA==", "e87a067c-3ad9-4386-8201-f184fe7a9537" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "c806cfae-bda9-47c5-8473-dd52fd056a9b",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "b74289be-8686-4052-bb48-ec4d5e17b84f", "AQAAAAIAAYagAAAAEFtB/UDb3V15SGNlZdVPxrI0WiqPs2X+4RrJlriQGKmd41cVNwEYyXBVD11PRIx5TQ==", "a2b710e9-cd2d-4d13-b628-89dea01f8287" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "d224a03d-bf0c-4a05-b728-e3521e45d74d",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "24108712-6e68-45c7-bbc3-794c03650b06", "AQAAAAIAAYagAAAAEBz/Sn9ba0xzdq9gzAoEANJ2cyDLBQJn2iWLu7Thi3BxuImnwgZQo1KF5cYQ96/JRw==", "d8b2628a-4148-4fc8-a5d9-344dfbe9449c" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "d8d76512-74f1-43bb-b1fd-87d3a8aa36df",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "3cb035d8-e69d-46b2-946b-4db1a146a171", "AQAAAAIAAYagAAAAEPTTVD3TCVRKpfXwQNT2Xl0/pF8mmDiMAtsH8uigvWm/wYAlsJWFFM9OLEUane9NiA==", "a832ad51-707b-44a6-a954-4a9ac2a754fc" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "e635d2d1-3832-400d-8906-6c8d50edb3cc", "AQAAAAIAAYagAAAAEIVyZmAxA6UtmNK6RTLjGCdQjVwWWNyTmV3zf3ApR7yPG2SRHlfhhAPJ2fvTvOmDuA==", "616a20ad-cfa9-4cb6-b2d9-21ef2fbf7a26" });

            migrationBuilder.UpdateData(
                table: "Enemies",
                keyColumn: "Id",
                keyValue: 7,
                columns: new[] { "BaseDamage", "BaseExperience", "BaseHealth", "Description", "ImageId", "MaxLevel", "MinLevel", "Name", "PiercingArmor", "PiercingDamage", "SlashingArmor", "SlashingDamage" },
                values: new object[] { 7, 150, 160, "A small, green creature with a big nose and pointy ears.", 2, 15, 10, "Kobold", 5, false, 5, true });
        }
    }
}
