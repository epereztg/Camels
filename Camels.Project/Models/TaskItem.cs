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


        public TaskItem() { }

        public TaskItem(int itemId, string label, int total, int current)
        {
            this.ItemId = itemId;
            this.Label = label;
            this.Total = total;
            this.Current = current;

        }
    }
}