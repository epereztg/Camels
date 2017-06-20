namespace Camels.Project.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Configuration;
    using System.IO;
    using System.Linq;
    using System.Web;
    using System.Web.Configuration;
    using System.Web.Http.Cors;
    //using System.Web.Mvc;
    using Newtonsoft.Json;
    using System.Web.Http;
    using System.Web.Http.Routing;
    using System.Web.Script.Serialization;
    using Camels.Project.Models;
    using System.Collections;
    
    [RoutePrefix("editDetails")]
    public class EditDetailsController : ApiController
    {                
        private string jsonPath = AppDomain.CurrentDomain.BaseDirectory + ConfigurationManager.AppSettings["JSONPath"];

        public List<TaskItem> LoadJson()
        {
            List<TaskItem> items;
            
            string s = this.jsonPath;
            using (System.IO.StreamReader r = new StreamReader(s))
            {
                string json = r.ReadToEnd();
                items= JsonConvert.DeserializeObject<List<TaskItem>>(json);
            }
            return items;
        }

        [Route("")]
        [HttpGet]
        public string GetDropdownList()
        {            
            string s = ConfigurationManager.AppSettings["JSONPath"];
            List<TaskItem> items = LoadJson();
            return new System.Web.Script.Serialization.JavaScriptSerializer().Serialize(items);           
        }
       
        [Route("{id}")]
        [HttpGet]
        public Object GetItem(int id)
        {
            string result = string.Empty;            
            List<TaskItem> items=LoadJson();            
            return items.First(q=>q.ItemId.Equals(id));
        }

        [HttpPost]
        [Route("")]     
        public string UpdateTask(TaskItem taskItem)
        {
            string result = String.Empty;
            string s = this.jsonPath;            

            ////Read Json File as array
            List<TaskItem> items = LoadJson();
            ////Get selected product in json file
            var jsonProduct = items.First(q => q.ItemId.Equals(taskItem.ItemId));            
            var idx = items.FindIndex(i => i.ItemId.Equals(taskItem.ItemId));

            if (taskItem.Current <= taskItem.Total)
            {
                jsonProduct.Total = taskItem.Total;
                jsonProduct.Label = taskItem.Label;
                jsonProduct.Current = taskItem.Current;
                jsonProduct.Timeline = taskItem.Timeline;              

                //Update Item
                items[idx] = jsonProduct;

                //Serialize json object
                result = Newtonsoft.Json.JsonConvert.SerializeObject(items, Newtonsoft.Json.Formatting.Indented);
                System.IO.File.WriteAllText(s, result);                
            }
            else
            {                
             //Cannot update task    
                
            }
            return result;
        }

    }
}