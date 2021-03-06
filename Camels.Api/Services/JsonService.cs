﻿

namespace Camels.Project.Services
{
    using Camels.Project.Models;
    using System;
    using System.Collections.Generic;
    using System.IO;
    using Newtonsoft.Json;
    using NLog;

    public class JsonService
    {
        private static Logger logger = LogManager.GetCurrentClassLogger();
        public static List<TaskItem> LoadJson(string path)
        {
            List<TaskItem> items;

            using (StreamReader r = new StreamReader(path))
            {
                var json = r.ReadToEnd();
                items = JsonConvert.DeserializeObject<List<TaskItem>>(json);
            }
            return items;
        }
        public static void SaveJson(List<TaskItem> items, string path)
        {
            if (items == null) { return; }

            try
            {
                var result = JsonConvert.SerializeObject(items, Newtonsoft.Json.Formatting.Indented);
                System.IO.File.WriteAllText(path, result);
                logger.Info("Json file saved to: {0}" , path);
            }
            catch (Exception ex)
            {
                logger.Error("Cannot save JSON file to path:{0}", path);
                throw;
            }

        }


    }
}