using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Http.Cors;
using System.Web.Mvc;
using Newtonsoft.Json;
using Camels.Backend.Models;


namespace Camels.Project.Controllers
{


    [RoutePrefix("editDetails")]
    public class EditDetailsController : Controller
    {
        List<Task> items;
        string s;
       
      
        public List<Task> LoadJson(string s)
        {
            using (System.IO.StreamReader r = new StreamReader(s))
            {
                string json = r.ReadToEnd();
                items = JsonConvert.DeserializeObject<List<Task>>(json);
            }
            return items;
        }
        [HttpGet]
        [Route("")]
        public string GetDropdownList()
        {
            string result = string.Empty;
            List<States> lstStates = new List<States>();
            States objStates = new States();
            objStates.stateId = 1;
            objStates.stateName = "Karnataka";
            lstStates.Add(objStates);
            objStates = new States();
            objStates.stateId = 2;
            objStates.stateName = "Maharastra";
            lstStates.Add(objStates);
            objStates = new States();
            objStates.stateId = 3;
            objStates.stateName = "Delhi";
            lstStates.Add(objStates);

            //json stringfy the result
           // result = new System.Web.Script.Serialization.JavaScriptSerializer().Serialize(lstStates);
            result = "Funcionaaaaaaaaaaaa";
            return result;
        }

        //[HttpPost]
        //[OutputCacheAttribute(VaryByParam = "*", Duration = 0, NoStore = true)]
        //public string UpdateTask()
        //{

        //    s = ConfigurationManager.AppSettings["JSONPath"];


        //    //var dateTime = System.DateTime.UtcNow;
        //    ////----Add bid to list of bids for that product
        //    ////Read Json File as array
        //    this.items = LoadJson(s);
        //    ////Get selected product in json file
        //    //var jsonProduct = items.Where(q => q.id.Equals(Int32.Parse(productId))).Single();
        //    //if (jsonProduct.price < decBidPrice)
        //    //{
        //    //    //Create new bid && Add new bid to Json file
        //    //    if (jsonProduct.bids != null)
        //    //    {
        //    //        jsonProduct.bids.Add(new Bid(firstname, lastname, decBidPrice, dateTime));
        //    //    }
        //    //    else jsonProduct.bids = new List<Bid> { new Bid(firstname, lastname, decBidPrice, dateTime) };
        //    //    //----Change product price to that value (if we got to that point, it should be currently the max bid)
        //    //    jsonProduct.price = decBidPrice;
        //    //    //Serialize json object
        //    //    string output = Newtonsoft.Json.JsonConvert.SerializeObject(this.items, Newtonsoft.Json.Formatting.Indented);
        //    //    System.IO.File.WriteAllText(s, output);
        //    //}
        //    //else
        //    //{
        //    //    //Somebody updated the bid before you!
        //    //    //You should bid higher man!

        //    //}
        //    //return RedirectToAction("Index");
        //    string result = string.Empty;
        //    return result;
        //}

        [HttpPost]
        public string GetResult(States obj)
        {
            string result = string.Empty;
            result = "My state name is " + obj.stateName;
            //json stringfy the result
           // result = new System.Web.Script.Serialization.JavaScriptSerializer().Serialize(result);
            return result;
        }



    }
}