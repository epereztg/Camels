using System.Linq;

namespace Camels.Project.Controllers
{
    using System.Collections.Generic;
    using System.Web.Http;
    using Models;
    using Services;
    using System;
    using System.Configuration;

    [RoutePrefix("createtask")]
    public class CreateTasksController : ApiController
    {
        private static readonly string JsonPath = AppDomain.CurrentDomain.BaseDirectory + ConfigurationManager.AppSettings["JSONPath"];
        [Route("")]
        [HttpPost]
        public void CreateTask(TaskItem taskItem)
        {
            string result = String.Empty;

            //Read Json File
            List<TaskItem> items = JsonService.LoadJson(JsonPath);
            List<Timeline> timeline = new List<Timeline>();
            timeline.Add(new Timeline("", ""));
           
            Random random = new Random();
            int uuid = random.Next();

            var jsonItem = new TaskItem
            {
                //ItemId = items.Count+1,
                ItemId = uuid,
                Total = taskItem.Total,
                Label = taskItem.Label,
                Current = taskItem.Current,
                Description= taskItem.Description,
                Timeline = timeline
            };

            //TODO when milestones required

            //Create Item        
            items.Add(jsonItem);

            //Serialize JsonService object
            JsonService.SaveJson(items, JsonPath);

        }

    }
}