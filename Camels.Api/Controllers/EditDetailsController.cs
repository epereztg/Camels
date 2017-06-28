namespace Camels.Project.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Configuration;
    using System.Linq;
    using System.Web.Http;
    using Models;
    using Services;

    [RoutePrefix("editDetails")]
    public class EditDetailsController : ApiController
    {
        private static readonly string JsonPath = AppDomain.CurrentDomain.BaseDirectory + ConfigurationManager.AppSettings["JSONPath"];
        [Route("")]
        [HttpGet]
        public string GetDropdownList()
        {            
            string s = ConfigurationManager.AppSettings["JSONPath"];
            List<TaskItem> items = JsonService.LoadJson(JsonPath);
            return new System.Web.Script.Serialization.JavaScriptSerializer().Serialize(items);           
        }
       
        [Route("{id}")]
        [HttpGet]
        public Object GetItem(int id)
        {
            string result = string.Empty;            
            List<TaskItem> items= JsonService.LoadJson(JsonPath);            
            return items.First(q=>q.ItemId.Equals(id));
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
                jsonItem.Timeline = taskItem.Timeline;              

                //Update Item
                items[idx] = jsonItem;

                //Serialize JsonService object
                 JsonService.SaveJson(items, JsonPath);               
            }
            else
            {                
             //Cannot update task    
                
            }
            return result;
        }

    }
}