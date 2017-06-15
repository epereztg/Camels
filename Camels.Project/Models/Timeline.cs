using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Camels.Project.Models
{
    public class Timeline
    {
        Dictionary<int, DateTime> Milestones = new Dictionary<int, DateTime>();

        public Timeline() { }

        public Timeline(Dictionary<int, DateTime> milestones)
        {
            this.Milestones = milestones;
        }
    }

}
