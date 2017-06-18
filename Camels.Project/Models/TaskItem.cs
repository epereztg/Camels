using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Camels.Project.Models
{
    public class TaskItem
    {
        public int ItemId { get; set; }
        public string Label { get; set; }
        public int Total { get; set; }
        public int Current { get; set; }
        Dictionary<string, string> Timeline { get; set; }
        //public Timeline Timeline{ get; set; }
        //Dictionary<int, DateTime> Milestones = new Dictionary<int, DateTime>();


        public TaskItem() { }

        public TaskItem(int itemId, string label, int total, int current, Dictionary<string, string> timeline)
        {
            this.ItemId = itemId;
            this.Label = label;
            this.Total = total;
            this.Current = current;
            this.Timeline = timeline;
        }
    }
}