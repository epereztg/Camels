namespace Camels.Project.Models
{
    public class Timeline
    {
        public string date { get; set; }
        public string complete { get; set; }

        public Timeline() { }

        public Timeline(string date, string complete)
        {
            this.date = date;
            this.complete = complete;
        }
    }
    

}
