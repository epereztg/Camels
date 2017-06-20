namespace Camels.Project.Controllers
{
    using System.Collections.Generic;
    using System.Web.Http;
    using Models;
    using Services;
    using System;
    using System.Configuration;

    [RoutePrefix("tasks")]
    public class TasksController : ApiController
    {
        private static readonly string JsonPath = AppDomain.CurrentDomain.BaseDirectory + ConfigurationManager.AppSettings["JSONPath"];
        [Route("")]
        [HttpGet]
        public List<TaskItem> GetItems()
        {                       
            return JsonService.LoadJson(JsonPath);
        }
 
    }
}