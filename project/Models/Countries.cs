using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace project.Models
{
      public class Countries
      {
            public int ID { get; set; }
            [Display(Name  = "Country")]
            public string NameOfCountry { get; set; }
            [Display(Name = "Capital City")]
            public string CapitalCity { get; set; }
            [Display(Name = "Currency")]
            public string Currency { get; set; }
           
            public string Language { get; set; }
       }

    public class CountriesDBContext : DbContext
    {
        public DbSet<Countries> Country { get; set; }
    }
}

    