using AbcHealthCareApi.Entities;
using System.Collections.Generic;
using System.Linq;

namespace AbcHealthCareApi.Data
{
    public static class DbInitializer
    {
        public static void Initialize(StoreContext context)
        {
            if (context.medicines.Any()) return;
            var medicines = new List<Medicine>
            {
                new Medicine
                {
                    NameMed="First Medicine",
                    PriceMed=10,
                    CategoryMedId=1,
                    SellerMed="Sun Pharma"
                },
                new Medicine
                {
                     NameMed="Second Medicine",
                    PriceMed=20,
                    CategoryMedId=1,
                    SellerMed="Sun Pharma"
                },
                new Medicine
                {
                     NameMed="Third Medicine",
                    PriceMed=30,
                    CategoryMedId=2,
                    SellerMed="Sun Pharma"
                },
                new Medicine
                {
                     NameMed="Fourth Medicine",
                    PriceMed=40,
                    CategoryMedId=2,
                    SellerMed="Moon Pharma"
                },




            };
            foreach(var medicine in medicines)
            {
                context.medicines.Add(medicine);
            }
            context.SaveChanges();
        }
    }
}
