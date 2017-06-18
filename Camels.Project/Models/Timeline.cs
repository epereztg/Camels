using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Camels.Project.Models
{
    public class Timeline
    {
        Dictionary<string, string> Milestones = new Dictionary<string, string>();

        public Timeline() { }

        public Timeline(Dictionary<string, string> milestones)
        {
            this.Milestones = milestones;
        }
    }

}
