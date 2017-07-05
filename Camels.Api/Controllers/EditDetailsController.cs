using NLog.Targets;

namespace Camels.Project.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Configuration;
    using System.Linq;
    using System.Web.Http;
    using Models;
    using Services;
    using NLog;

    [RoutePrefix("editDetails")]
    public class EditDetailsController : ApiController
    {
        private static Logger logger = LogManager.GetCurrentClassLogger();
        private static readonly string JsonPath = AppDomain.CurrentDomain.BaseDirectory + ConfigurationManager.AppSettings["JSONPath"];
        [Route("")]
        [HttpGet]
        public string GetDropdownList()
        {            
            List<TaskItem> items = JsonService.LoadJson(JsonPath);
            return new System.Web.Script.Serialization.JavaScriptSerializer().Serialize(items);
        }

        [Route("{id}")]
        [HttpGet]
        public Object GetItem(int id)
        {
            string result = string.Empty;
            List<TaskItem> items = JsonService.LoadJson(JsonPath);
            return items.First(q => q.ItemId.Equals(id));
        }


        [Route("{id}")]
        [HttpPost]
        public string DeleteTask(int id)
        {
            Target target = LogManager.Configuration.FindTargetByName("logfile");

            string result = String.Empty;

            //Read Json File
            List<TaskItem> items = JsonService.LoadJson(JsonPath);

            //Get selected item
            var jsonItem = items.First(q => q.ItemId.Equals(id));
            var idx = items.FindIndex(i => i.ItemId.Equals(id));

            items.RemoveAt(idx);
            //Serialize JsonService object
            try
            {
                JsonService.SaveJson(items, JsonPath);
                logger.Info("Task {0} deleted from path: {1}", jsonItem.Label, JsonPath);
            }
            catch (Exception ex)
            {
                logger.Error("Error: Cannot delete task {0} from path:{1}", jsonItem.Label, JsonPath);
            }
            return result;
        }

        [HttpPost]
        [Route("")]
        public string UpdateTask(TaskItem taskItem)
        {
            string result = String.Empty;

            //Read Json File
            List<TaskItem> items = JsonService.LoadJson(JsonPath);

            //Get selected item
            var jsonItem = items.First(q => q.ItemId.Equals(taskItem.ItemId));
            var idx = items.FindIndex(i => i.ItemId.Equals(taskItem.ItemId));

            if (taskItem.Current <= taskItem.Total)
            {
                jsonItem.Total = taskItem.Total;
                jsonItem.Label = taskItem.Label;
                jsonItem.Current = taskItem.Current;
                jsonItem.Description = taskItem.Description;
                jsonItem.Timeline = taskItem.Timeline;

                //Update Item
                items[idx] = jsonItem;

                //Serialize JsonService object
                try
                {
                    JsonService.SaveJson(items, JsonPath);
                    logger.Info("Task {0} updated in path: {1}", jsonItem.Label, JsonPath);
                }
                catch (Exception ex)
                {
                    logger.Error("Cannot update task {0} from path:{1}", jsonItem.Label, JsonPath);
                }
            }
            else
            {
                //Cannot update task    
                logger.Warn("Cannot update task {0} from path:{1}. Input Validation has failed.", jsonItem.Label, JsonPath);

            }
            return result;
        }

    }
}