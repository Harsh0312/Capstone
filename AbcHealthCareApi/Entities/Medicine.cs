﻿using System.ComponentModel.DataAnnotations;

namespace AbcHealthCareApi.Entities
{
    public class Medicine
    {
        [Key]
        public int IdMed { get; set; }
        public string NameMed { get; set; }
        public int PriceMed { get; set; }
        public string DescriptionMed { get; set; }
        [Required]
        public int CategoryMedId { get; set; }
        public string SellerMed { get; set; }
        public string ImagePathMed { get; set; }
    }
}
