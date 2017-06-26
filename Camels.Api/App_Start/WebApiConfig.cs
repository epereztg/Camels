using System.Web.Http;
using System.Web.Http.Cors;

namespace Camels.Project
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services            
            EnableCrossSiteRequests(config);

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{ItemId}",
                defaults: new { id = RouteParameter.Optional }
            );
        }

        private static void EnableCrossSiteRequests(HttpConfiguration config)
        {            
            var cors = new EnableCorsAttribute(
                origins: "http://localhost:1443,https://localhost:1443",
                headers: "*",
                methods: "*"
            );
            config.EnableCors(cors);
        }
    }
}
