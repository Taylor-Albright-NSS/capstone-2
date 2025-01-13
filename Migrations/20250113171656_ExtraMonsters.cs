using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Capstone_2.Migrations
{
    /// <inheritdoc />
    public partial class ExtraMonsters : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
                keyValue: 1,
                columns: new[] { "BluntDamage", "SlashingDamage" },
                values: new object[] { true, false });

            migrationBuilder.UpdateData(
                table: "Enemies",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "BaseDamage", "BaseExperience", "BaseHealth", "Description", "ImageId", "MaxLevel", "MinLevel", "Name", "PiercingArmor", "SlashingArmor" },
                values: new object[] { 5, 10, 10, "A small, green sliver that could easily be mistaken for a blade of grass.", 1, 3, 1, "Grassling", 0, 0 });

            migrationBuilder.InsertData(
                table: "Enemies",
                columns: new[] { "Id", "BaseDamage", "BaseExperience", "BaseHealth", "BluntArmor", "BluntDamage", "Description", "ImageId", "MaxLevel", "MinLevel", "Name", "PiercingArmor", "PiercingDamage", "SlashingArmor", "SlashingDamage", "UserId", "UserProfileId" },
                values: new object[,]
                {
                    { 3, 5, 10, 10, 0, false, "A blue puddle.", 1, 3, 1, "Waterling", 0, true, 0, false, 1, null },
                    { 4, 5, 10, 10, 0, false, "A blue puddle.", 1, 3, 1, "Skeleton", 0, true, 0, false, 1, null },
                    { 5, 5, 10, 10, 0, false, "A blue puddle.", 1, 3, 1, "Giant Rat", 0, true, 0, false, 1, null },
                    { 6, 5, 10, 10, 0, false, "A blue puddle.", 1, 3, 1, "Cultist", 0, true, 0, false, 1, null },
                    { 7, 7, 150, 160, 0, false, "A small, green creature with a big nose and pointy ears.", 2, 15, 10, "Kobold", 5, false, 5, true, 1, null }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Enemies",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Enemies",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Enemies",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Enemies",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Enemies",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "9ce89d88-75da-4a80-9b0d-3fe58582b8e2",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "abfdc78a-91db-4028-b055-739050d95143", "AQAAAAIAAYagAAAAEP24y+q9+0Zzgq+YxCt2MueMkd1p6QFQlSifJpWu10KG78MAyxJg94ghf3OB58GuvQ==", "153561e4-b8da-4cac-aede-bb8b21097e4a" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "a7d21fac-3b21-454a-a747-075f072d0cf3",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "8c4708de-b40b-4ed5-8c12-da8751d455fe", "AQAAAAIAAYagAAAAEBpB97DAOF7lrDeoNk2QQa8BQL73s6ewfEdKhzzIu25DcXs/I2IUIQfIdBIlctWcRw==", "44acb663-d83c-40ce-821d-a39a8bbff26a" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "c806cfae-bda9-47c5-8473-dd52fd056a9b",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "53814c2a-4cca-4e53-908e-41d87599b169", "AQAAAAIAAYagAAAAEMTaWGI6wprOMNsKcUGaQlqbPFvI/9GhxnigHOucYU87vujchYxdzmr6Bxrt8WxceA==", "dc8d905c-dd60-4c9e-bbf9-eb06e049c901" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "d224a03d-bf0c-4a05-b728-e3521e45d74d",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "1e7d7715-8039-44b1-ab6c-970958abb759", "AQAAAAIAAYagAAAAEFtGAWqPo6FJz9gogIP60cMufmuZ3trWM4wTPYQEUKvC7rzvLR02rsyMeKEkgkHmyw==", "ec2d84c4-ea39-4558-95d3-23bb8d99ade1" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "d8d76512-74f1-43bb-b1fd-87d3a8aa36df",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "e1ad3e24-634a-48f0-badf-3bcac06a2944", "AQAAAAIAAYagAAAAELBDJfJWcdK72WA+AhLiFFshsXhHckEJSvCCe8YjtgpXDPLnZ6/kLlTcLBtH81bJJw==", "5976ea26-2d6b-4c84-a98f-e6d51e9ad231" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "e92aaeaf-d6be-4c66-b8b9-51e966c2f890", "AQAAAAIAAYagAAAAEErG/kT6QARC5AOq8thlJzgqNI90nlLpnWDenSdcTe56lquuINqkb/TucKvtSZaXQg==", "8064d7e6-5571-4e48-86b5-de8640c6693e" });

            migrationBuilder.UpdateData(
                table: "Enemies",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "BluntDamage", "SlashingDamage" },
                values: new object[] { false, true });

            migrationBuilder.UpdateData(
                table: "Enemies",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "BaseDamage", "BaseExperience", "BaseHealth", "Description", "ImageId", "MaxLevel", "MinLevel", "Name", "PiercingArmor", "SlashingArmor" },
                values: new object[] { 7, 150, 160, "A small, green creature with a big nose and pointy ears.", 2, 15, 10, "Kobold", 5, 5 });
        }
    }
}
