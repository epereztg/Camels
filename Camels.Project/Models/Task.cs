using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Camels.Backend.Models
{
    public class Task
    {
        public int id { get; set; }
        public string label { get; set; }
        public int total { get; set; }
        public int current { get; set; }
        
    }
}