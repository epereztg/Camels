namespace Camels.Project.Models
{
    using System.Collections.Generic;

    public class TaskItem
    {
        public int ItemId { get; set; }
        public string Label { get; set; }
        public int Total { get; set; }
        public int Current { get; set; }
        public List<Timeline> Timeline { get; set; }

        public TaskItem() { }

        public TaskItem(int itemId, string label, int total, int current, List<Timeline> timeline)
        {
            this.ItemId = itemId;
            this.Label = label;
            this.Total = total;
            this.Current = current;
            this.Timeline = timeline;
        }
    }
}