using System;
using System.Linq;
using Camels.Project.Controllers;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Web;
using Camels.Project.Services;

namespace Camels.Test
{
    [TestClass]
    public class CamelTests
    {
        private string JsonPath = "../../Files/tasks.json";
        [TestMethod]
        public void JsonServiceLoadTest()
        {            
            //Test load and read Json file                                         
            var jsonData = JsonService.LoadJson(this.JsonPath);
            Assert.IsNotNull(jsonData);

            Assert.IsTrue(jsonData.Count == 2);
            
            Assert.IsTrue(jsonData.First(q=>q.Timeline.Count.Equals(5)).ItemId == 1);
            Assert.IsTrue(jsonData.First(q => q.Timeline.Count.Equals(3)).ItemId == 2);

            for (int i = 1; i < jsonData.Count-1; i++)
            {
                Assert.AreEqual(jsonData[i].ItemId, i.ToString());
                Assert.AreEqual(jsonData[i].Label, "Task"+(i-1));
                Assert.AreEqual(jsonData[i].Total, i*100);
                Assert.AreEqual(jsonData[i].Current, i*10);
            }
        }

        [TestMethod]
        public void JsonServiceSaveTest()
        {            
            var jsonData = JsonService.LoadJson(this.JsonPath);
           
            //Test modify and save Json file
            jsonData[0].Label = "Task1_modified";
            JsonService.SaveJson(jsonData, JsonPath);
            jsonData = JsonService.LoadJson(JsonPath);
            Assert.AreEqual(jsonData[0].Label, "Task1_modified");

            jsonData[1].Label = "Task2_modified";
            JsonService.SaveJson(jsonData, JsonPath);
            jsonData = JsonService.LoadJson(JsonPath);
            Assert.AreEqual(jsonData[1].Label, "Task2_modified");

        }
    }
}
