namespace Camels.app.config
{
  using System.Configuration;
  using System.Web.Http; 

  public class ConfigurationController : ApiController
  {
    // GET api/<controller>
    public InitialConfig Get()
    {
      return new InitialConfig
      {
        BaseUrl = ConfigurationManager.AppSettings["baseUrl"],
        LocalPort = ConfigurationManager.AppSettings["localPort"]
      };
    }
  }
}