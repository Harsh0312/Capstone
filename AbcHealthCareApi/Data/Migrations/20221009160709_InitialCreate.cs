using Microsoft.EntityFrameworkCore.Migrations;

namespace AbcHealthCareApi.Data.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "medicines",
                columns: table => new
                {
                    IdMed = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    NameMed = table.Column<string>(type: "TEXT", nullable: true),
                    PriceMed = table.Column<int>(type: "INTEGER", nullable: false),
                    DescriptionMed = table.Column<string>(type: "TEXT", nullable: true),
                    CategoryMedId = table.Column<int>(type: "INTEGER", nullable: false),
                    SellerMed = table.Column<string>(type: "TEXT", nullable: true),
                    ImagePathMed = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_medicines", x => x.IdMed);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "medicines");
        }
    }
}
