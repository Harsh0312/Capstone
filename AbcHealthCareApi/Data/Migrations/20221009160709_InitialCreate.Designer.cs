﻿// <auto-generated />
using AbcHealthCareApi.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace AbcHealthCareApi.Data.Migrations
{
    [DbContext(typeof(StoreContext))]
    [Migration("20221009160709_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.8");

            modelBuilder.Entity("AbcHealthCareApi.Entities.Medicine", b =>
                {
                    b.Property<int>("IdMed")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("CategoryMedId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("DescriptionMed")
                        .HasColumnType("TEXT");

                    b.Property<string>("ImagePathMed")
                        .HasColumnType("TEXT");

                    b.Property<string>("NameMed")
                        .HasColumnType("TEXT");

                    b.Property<int>("PriceMed")
                        .HasColumnType("INTEGER");

                    b.Property<string>("SellerMed")
                        .HasColumnType("TEXT");

                    b.HasKey("IdMed");

                    b.ToTable("medicines");
                });
#pragma warning restore 612, 618
        }
    }
}
