using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Camels.Project.Models
{
    public class Timeline
    {
        public string date { get; set; }
        public string complete { get; set; }

        //Dictionary<string, string> Milestones = new Dictionary<string, string>();

        public Timeline() { }

        //public Timeline(Dictionary<string, string> milestones)
        //{
        //    this.Milestones = milestones;
        //}
        public Timeline(string date, string complete)
        {
            this.date = date;
            this.complete = complete;

        }
    }
    

}
