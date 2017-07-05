namespace Camels.Project.Controllers
{
    using System.Collections.Generic;
    using System.Web.Http;
    using Models;
    using Services;
    using System;
    using System.Configuration;
    using NLog;
    using System.IO;

    [RoutePrefix("createtask")]
    public class CreateTasksController : ApiController
    {
        private static Logger logger = LogManager.GetCurrentClassLogger();
        private static readonly string JsonPath = AppDomain.CurrentDomain.BaseDirectory + ConfigurationManager.AppSettings["JSONPath"];
        [Route("")]
        [HttpPost]
        public TaskItem CreateTask(TaskItem taskItem)
        {
            if (taskItem == null)
            {
                throw new InvalidOperationException("Cannot create task");
            }
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
                Description = taskItem.Description,
                Timeline = timeline
            };

            //TODO when milestones required

            //Create Item        
            items.Add(jsonItem);

            try
            {
                //Serialize JsonService object
                JsonService.SaveJson(items, JsonPath);
                logger.Info("Task {0} saved to: {1}", taskItem.Label, JsonPath);

            }
            catch (IOException ex)
            {
                logger.Error("Error: Cannot create task {0} to path:{1} -- {2}", taskItem.Label, JsonPath, ex.Message);
                throw;
            }
            return jsonItem;
        }

    }
}