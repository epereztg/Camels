namespace Camels.app.controllers
{
    using System.Configuration;
    using System.Web.Http;

    public class ConfigurationController : ApiController
    {
        // GET api/<controller>
        public Config Get()
        {
            return new Config
            {
              BaseUrl = ConfigurationManager.AppSettings["baseUrl"],
              LocalPort = ConfigurationManager.AppSettings["localPort"]
            };
        }
    }
}