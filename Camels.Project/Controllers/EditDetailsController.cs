

namespace Camels.Project.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Configuration;
    using System.Linq;
    using System.Web.Http;
    using Camels.Project.Models;
    using Camels.Project.Services;

    [RoutePrefix("editDetails")]
    public class EditDetailsController : ApiController
    {                
        [Route("")]
        [HttpGet]
        public string GetDropdownList()
        {            
            string s = ConfigurationManager.AppSettings["JSONPath"];
            List<TaskItem> items = JsonService.LoadJson();
            return new System.Web.Script.Serialization.JavaScriptSerializer().Serialize(items);           
        }
       
        [Route("{id}")]
        [HttpGet]
        public Object GetItem(int id)
        {
            string result = string.Empty;            
            List<TaskItem> items= JsonService.LoadJson();            
            return items.First(q=>q.ItemId.Equals(id));
        }

        [HttpPost]
        [Route("")]     
        public string UpdateTask(TaskItem taskItem)
        {
            string result = String.Empty;            

            //Read Json File
            List<TaskItem> items = JsonService.LoadJson();

           

            //Get selected item
            var jsonItem = items.First(q => q.ItemId.Equals(taskItem.ItemId));            
            var idx = items.FindIndex(i => i.ItemId.Equals(taskItem.ItemId));

            if (taskItem.Current <= taskItem.Total)
            {
                jsonItem.Total = taskItem.Total;
                jsonItem.Label = taskItem.Label;
                jsonItem.Current = taskItem.Current;
                jsonItem.Timeline = taskItem.Timeline;              

                //Update Item
                items[idx] = jsonItem;

                //Serialize JsonService object
                JsonService.SaveJson(items);

                //result = Newtonsoft.Json.JsonConvert.SerializeObject(items, Newtonsoft.Json.Formatting.Indented);
                //System.IO.File.WriteAllText(s, result);                
            }
            else
            {                
             //Cannot update task    
                
            }
            return result;
        }

    }
}