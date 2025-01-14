using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Capstone_2.Migrations
{
    /// <inheritdoc />
    public partial class AddingItems : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "9ce89d88-75da-4a80-9b0d-3fe58582b8e2",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "058687e8-6cf6-4377-bb54-e02643455757", "AQAAAAIAAYagAAAAEGszYNhfkV/+c7xiAoN0mYl/DaNEs5NI/X4lxKtkP+Y7UCE5bAguGZQ5lUTI7xVB/g==", "fdd188a1-9dc4-4375-96a2-c831fef3b155" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "a7d21fac-3b21-454a-a747-075f072d0cf3",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "14cf4689-24aa-4d07-a2ac-b0da4c553e02", "AQAAAAIAAYagAAAAEL52S1FU6LpThPCcK4qK3XGIlSazg6FR9fkHsqppTEJYhccXpzFyCMn84A+hHz2JsA==", "6f98700f-7270-4ad2-8846-7297e7ccd1bb" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "c806cfae-bda9-47c5-8473-dd52fd056a9b",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "8cb7339e-0c97-4147-a765-484e9b248e56", "AQAAAAIAAYagAAAAEDJqD5ynzzJ1tZcOQaF8fQ2FUnh31zEJ6OZIkdwuQHTxd/aO+0KPERWfiW7YkSXc2g==", "7bb89765-d92b-4208-8733-643a9fed4dfe" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "d224a03d-bf0c-4a05-b728-e3521e45d74d",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "2a3aac63-01a9-4f04-b5cc-2863c5142770", "AQAAAAIAAYagAAAAELZY53+nj/O9dTmT4fdw7eFpFRqgAELI3kBTB5RQCcdZBZWr+shJgl5kWwWdzDak4g==", "a52198fc-2c84-4bcd-94e6-75cb1129b7db" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "d8d76512-74f1-43bb-b1fd-87d3a8aa36df",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "b222947c-77e5-4ad1-9b75-722e38a465b6", "AQAAAAIAAYagAAAAEGTNFxMSI+CdSHpLn5582qQBu11xq+ewpRqj4gBQMhmjHGuNgFFIXF/k0bMdmxAmuw==", "010e4ae9-3b42-4490-bc51-8006489e3c87" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "f36740e7-608a-469e-b2a4-a40fc9aa400f", "AQAAAAIAAYagAAAAEKlK7hb0S+rDMuJheoDkE/qXXIkgOALynaCyXvyUhNeHE6YwrtOiBBoAUumSuVCfIQ==", "cda40bff-2af6-45dc-b83b-8370fc1d0e1a" });

            migrationBuilder.InsertData(
                table: "Items",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 4, "Fist Weapon" },
                    { 5, "Axe" },
                    { 6, "Leather Chest" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Items",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Items",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Items",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "9ce89d88-75da-4a80-9b0d-3fe58582b8e2",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "673996b9-b7ed-44d9-90ff-d1ea2534cd76", "AQAAAAIAAYagAAAAEAOakMgQde/Q2aOM90vgEEX/RhbJ2S+lQshLkyRnH488peJDjq6Bq2DGVWj1I5n8kQ==", "fde152f5-9670-4086-8cec-e303989cbcba" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "a7d21fac-3b21-454a-a747-075f072d0cf3",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "a703a5e2-3d84-4c87-8676-17ed7f4dcc48", "AQAAAAIAAYagAAAAEDSKIJtmPFp15OvAHakIHnECLpqoN3H+1fajNio3Hvgd1KBPOHLc3L2bVoT27tIfLg==", "a5e1792e-00af-41a1-9031-b7f898d22a47" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "c806cfae-bda9-47c5-8473-dd52fd056a9b",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "75275704-f8f4-4bc9-acb9-b0976d2b0171", "AQAAAAIAAYagAAAAEMXznx/AIhwhgLR/npTroX/RP86j/bBYCBMGdpIWsQ3mUSFO7hhNjaWCYI2yIOJMfA==", "8517ac74-81a1-4ec6-a634-dc540a18a66e" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "d224a03d-bf0c-4a05-b728-e3521e45d74d",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "b26f96de-2ef1-4252-92f4-958f229cb46b", "AQAAAAIAAYagAAAAEEMJ6ezCAfvGLhnkfm+e3RkWEObgpwxY/6wDYbnCb7rx0vRfnMXWX+8jLhwwH+jdpw==", "b5e5d003-394f-4b16-8e96-2dd5800fe5f0" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "d8d76512-74f1-43bb-b1fd-87d3a8aa36df",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "c255d96d-a7db-416e-ae37-ce89b73d4a49", "AQAAAAIAAYagAAAAEEFdclaiYwWHfQngzXMRNFOw+TOIJtAGImTrWJZZ9lFM+Y4tSs/nLLE2lb//saOkhw==", "70fed6d5-aa00-48fe-b0e3-6d107bbe6ace" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "7b28b265-abe9-4b6e-8748-0d317dc4e5be", "AQAAAAIAAYagAAAAEJcjDmev3WzCtA79odZLksWVxVCVoLAunmfMfk1Ce3JTVeq3wE09FCafbJSIkUpNVQ==", "5e21c175-c837-460f-aa7f-9b8cdc1923b1" });
        }
    }
}
