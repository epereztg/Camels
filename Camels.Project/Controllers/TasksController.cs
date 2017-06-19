using System;
using System.Collections.Generic;
namespace Camels.Project.Controllers
{
    using System.Configuration;
    using System.IO;
    using System.Web;
    using System.Web.Configuration;
    using System.Web.Http.Cors;
    using Newtonsoft.Json;
    using System.Web.Http;
    using System.Web.Http.Routing;
    using System.Web.Script.Serialization;
    using Camels.Project.Models;
    using System.Collections;

    [RoutePrefix("tasks")]
    public class TasksController : ApiController
    {                     

        public List<TaskItem> LoadJson(string jsonPath)
        {
            List<TaskItem> items;
            jsonPath = AppDomain.CurrentDomain.BaseDirectory + jsonPath;
            using (System.IO.StreamReader r = new StreamReader(jsonPath))
            {
                string json = r.ReadToEnd();
                items= JsonConvert.DeserializeObject<List<TaskItem>>(json);
            }
            return items;
        }


        [Route("")]
        [HttpGet]
        public List<TaskItem> GetItems()
        {           
            string s = ConfigurationManager.AppSettings["JSONPath"];         
            return LoadJson(s);
        }
 
    }
}