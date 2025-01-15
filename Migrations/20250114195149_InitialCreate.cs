using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Capstone_2.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "EnemiesItems",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "9ce89d88-75da-4a80-9b0d-3fe58582b8e2",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "0aed6907-a891-4093-9986-8ee5468b5023", "AQAAAAIAAYagAAAAEJf6p91VyViH6FfvJZGrDHqjirrWlRmlNr+do4g8aF5RwZZhe77DkoFewyntpvlwMQ==", "b378547d-c99b-455a-bc6a-2ddb660de039" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "a7d21fac-3b21-454a-a747-075f072d0cf3",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "dc8cd71b-5ab1-4d1f-b6ad-73cde114eb33", "AQAAAAIAAYagAAAAECci6K7gFFzJpIWCKSaF5yALYZKJ7Aizjto6QKDleaOjX1rNMg/FTx4UwySfZn2+7g==", "68f42554-8348-4a0c-9ff0-352524065643" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "c806cfae-bda9-47c5-8473-dd52fd056a9b",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "b0201f91-1db3-45ca-98ae-73bf045940e6", "AQAAAAIAAYagAAAAEA34VXc4jqCubBktHUcJMp/IJjoAQhygbP8Cr0ec+nVYlf7rz0tczDIMaA1I6xTagg==", "0568f312-cea8-46c4-b486-d0190e264bee" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "d224a03d-bf0c-4a05-b728-e3521e45d74d",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "a4cd7547-49e8-4f26-b30f-d028ad85b038", "AQAAAAIAAYagAAAAEBBOqG8O1ENcm8P85Keg/9xI0ekjFgc6XUYX4IZdsCv5gUIl1bfaT2T5P/me4q/usQ==", "67cbb519-3815-4193-b514-575b7659b10c" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "d8d76512-74f1-43bb-b1fd-87d3a8aa36df",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "ce972638-1de3-4f7b-880f-99127c528242", "AQAAAAIAAYagAAAAEGBrsRhS6uz8k4EIdj0rVGV7BGhl2aG0UkjDtX07tAlo4Vnh7/d67D+988lII1H0fA==", "0e27c4da-f822-4106-a7c0-bac2cde0af17" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "bc105579-1976-4674-b920-981909147947", "AQAAAAIAAYagAAAAEKkvJbcJQaFb+3mrfiFRW1fI1i92cGY8gvCIg8nuGEkn26QNC2NCixQFw9NMeNDRoA==", "b20f2bba-0c54-4489-96fa-d46573692ed9" });

            migrationBuilder.UpdateData(
                table: "EnemiesItems",
                keyColumns: new[] { "EnemiesId", "ItemsId" },
                keyValues: new object[] { 1, 1 },
                column: "Id",
                value: 0);

            migrationBuilder.UpdateData(
                table: "EnemiesItems",
                keyColumns: new[] { "EnemiesId", "ItemsId" },
                keyValues: new object[] { 1, 2 },
                column: "Id",
                value: 0);

            migrationBuilder.UpdateData(
                table: "EnemiesItems",
                keyColumns: new[] { "EnemiesId", "ItemsId" },
                keyValues: new object[] { 1, 3 },
                column: "Id",
                value: 0);

            migrationBuilder.UpdateData(
                table: "EnemiesItems",
                keyColumns: new[] { "EnemiesId", "ItemsId" },
                keyValues: new object[] { 2, 2 },
                column: "Id",
                value: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Id",
                table: "EnemiesItems");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "9ce89d88-75da-4a80-9b0d-3fe58582b8e2",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "307fdb05-3b23-425f-b549-332c03f3d7e7", "AQAAAAIAAYagAAAAEOXMM8ykBv/732kFj70duatPdxEBZftkNiPd9rnghL6/FQ3t7fteytfsZ/Jd1gxaCA==", "22726cb3-8067-422d-b4e3-062da1a550bf" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "a7d21fac-3b21-454a-a747-075f072d0cf3",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "ccc2ee26-5f10-48b4-bf9c-9e64be58d68e", "AQAAAAIAAYagAAAAEBDvmULWq67iLT7R2PjKFKBTr60zLYUT/h3O4ZkkYvCjwQ5Xif7cY9Q9gikmik4BmQ==", "4560bb23-456a-40d6-b556-31cff6e6ee64" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "c806cfae-bda9-47c5-8473-dd52fd056a9b",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "8b16786a-c015-43bc-8c72-2c7f4e849fe5", "AQAAAAIAAYagAAAAEO0hIb1tLB67kW1lzIWY8bCksi2GbUHNrKzZi/VVIfxgQHzzlZ6PKJzklZQCXa3c2Q==", "7e955e13-c4e1-4aac-afd3-a0a06b1ec77d" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "d224a03d-bf0c-4a05-b728-e3521e45d74d",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "7bfac7f6-379b-4fa2-a562-dd9b6c1de813", "AQAAAAIAAYagAAAAEH8HF/B/xBDwaw6IYS35C5H+VGcA3l8xDs4lxgHWMG6Tml3UtisDlVCAjam8R++EIQ==", "e61f2e6e-564c-44f4-8f72-21ccc7e2332f" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "d8d76512-74f1-43bb-b1fd-87d3a8aa36df",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "2509e440-e95e-476e-8223-3f6ba2c5ce32", "AQAAAAIAAYagAAAAEB/AenNhkjm0Ear3VYDX2JGspQ92itg7+ghF5xJr9YDJqYv7lMqK9174mE9fXWT8SQ==", "32c17010-1fb4-473e-88c1-a5ccb7d1ea07" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "9c7fecf4-691b-4f1d-a8c1-46a8aefe38ea", "AQAAAAIAAYagAAAAEMavSWo7NfTgron6ccriVzdBciMdjqMkTLJiL9L8/bjyvHIox+ngr/4YXiF1ZqGwCw==", "43756784-1bc4-41f7-884d-bc1e5c8bc5dd" });
        }
    }
}
