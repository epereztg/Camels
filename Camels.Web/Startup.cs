namespace Camels
{
  using Owin;
  using System.Web.Http;

  public class Startup
  {
    public void Configuration(IAppBuilder app)
    {

      HttpConfiguration config = new HttpConfiguration();

      config.Routes.MapHttpRoute(
        name: "Configuration",
        routeTemplate: "configuration",
        defaults: new { controller = "Configuration", action = "Get" }
      );

      app.UseWebApi(config);

    }
  }
}