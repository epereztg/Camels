using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Microsoft.Owin;
using Owin;
using System.Web.Http.Cors;
using Microsoft.Owin.Security.OAuth;

//[assembly: OwinStartup(typeof(Camels.Project.Startup))]

namespace Camels.Project
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {

            var httpConfiguration = new HttpConfiguration();
            app.Map("/api", appBuilder => ConfigureApi(app, httpConfiguration));          

        }

        private static void ConfigureApi(IAppBuilder apiApp, HttpConfiguration config)
        {

   
        }

    }
}
