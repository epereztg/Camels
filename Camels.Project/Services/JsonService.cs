using Camels.Project.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace Camels.Project.Services
{
    public class JsonService
    {
        private static readonly string JsonPath = AppDomain.CurrentDomain.BaseDirectory + ConfigurationManager.AppSettings["JSONPath"];

        public static List<TaskItem> LoadJson()
        {
            List<TaskItem> items;

            using (System.IO.StreamReader r = new StreamReader(JsonPath))
            {
                var json = r.ReadToEnd();
                items = JsonConvert.DeserializeObject<List<TaskItem>>(json);
            }
            return items;
        }
        public static void SaveJson(List<TaskItem> items)
        {
            if (items == null) { return; }

            try
            {
                var result = Newtonsoft.Json.JsonConvert.SerializeObject(items, Newtonsoft.Json.Formatting.Indented);
                System.IO.File.WriteAllText(JsonPath, result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

        }


    }
}