namespace Camels.Project.Controllers
{
    using System.Collections.Generic;
    using System.Configuration;
    using System.Web.Http;
    using Camels.Project.Models;
    using Camels.Project.Services;

    [RoutePrefix("tasks")]
    public class TasksController : ApiController
    {                            

        [Route("")]
        [HttpGet]
        public List<TaskItem> GetItems()
        {           
            var s = ConfigurationManager.AppSettings["JSONPath"];
            return JsonService.LoadJson();
        }
 
    }
}