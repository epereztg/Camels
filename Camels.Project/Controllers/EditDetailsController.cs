using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Http.Cors;
//using System.Web.Mvc;
using Newtonsoft.Json;
using System.Web.Http;
using System.Web.Http.Routing;
using System.Web.Script.Serialization;
using Camels.Project.Models;

namespace Camels.Project.Controllers
{
    [EnableCors(origins: "http://localhost:21275", headers: "*", methods: "*")]
    [RoutePrefix("editDetails")]
    public class EditDetailsController : ApiController
    {
        List<TaskItem> items;
        string s;


        public List<TaskItem> LoadJson(string s)
        {
            using (System.IO.StreamReader r = new StreamReader(s))
            {
                string json = r.ReadToEnd();
                items = JsonConvert.DeserializeObject<List<TaskItem>>(json);
            }
            return items;
        }

        [Route("")]
        [HttpGet]
        public string GetDropdownList()
        {
            string result = string.Empty;

            s = ConfigurationManager.AppSettings["JSONPath"];
            this.items = LoadJson(s);
            result = new System.Web.Script.Serialization.JavaScriptSerializer().Serialize(this.items);

            return result;
        }

        [HttpPost]
        [Route("")]
       // [OutputCacheAttribute(VaryByParam = "*", Duration = 0, NoStore = true)]       
        public string UpdateTask(TaskItem taskItem)
        {
            string result = String.Empty;
            s = ConfigurationManager.AppSettings["JSONPath"];            


            ////Read Json File as array
            this.items = LoadJson(s);
            ////Get selected product in json file
            var jsonProduct = items.Where(q => q.ItemId.Equals(taskItem.ItemId)).Single();

            
            if (taskItem.Current <= taskItem.Total)
            {
                jsonProduct.Total = taskItem.Total;
                jsonProduct.Label = taskItem.Label;
                jsonProduct.Current = taskItem.Current;
                //Serialize json object
                result = Newtonsoft.Json.JsonConvert.SerializeObject(this.items, Newtonsoft.Json.Formatting.Indented);
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