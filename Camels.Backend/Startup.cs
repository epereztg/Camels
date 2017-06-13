using Microsoft.Owin;
using Owin;


[assembly: OwinStartupAttribute(typeof(Camels.Backend.Startup))]
namespace Camels.Backend
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // ConfigureAuth(app);
            var httpConfiguration = new HttpConfiguration();
            app.Map("/api", appBuilder => ConfigureApi(appBuilder, httpConfiguration));

            httpConfiguration.EnableCors(new EnableCorsAttribute("*", "*", "*"));

        }
        //public static void Register(HttpConfiguration config)
        //{
        //    // Other configuration omitted
        //    config.EnableCors(new EnableCorsAttribute("*", "*", "*"));
        //}
    }
}
