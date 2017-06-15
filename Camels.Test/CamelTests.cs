using System;
using System.Linq;
using Camels.Project.Controllers;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Web;

namespace Camels.Test
{
    [TestClass]
    public class CamelTests
    {
        [TestMethod]
        public void TestMethod1()
        {
            EditDetailsController controller = new EditDetailsController();

            //Assert.AreEqual(controller.GetDropdownList().Count(), 12);


        }
    }
}
