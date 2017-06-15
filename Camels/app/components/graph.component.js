﻿
"use strict";

angular.
module("core.components").
component("graph", {
  bindings: {
    width: '=',
    height: '=',
    yAxis: '@',
    xAxis: '@'
  },

  templateUrl: 'views/graph.template.html',

  controller: ['$http', 'TasksService', function graphController($http, TasksService) {
    var self = this;
    var controllerRoute = 'editDetails';



    TasksService.getList()
      .then(function (data) {

        self.data = data;
        self.max = 0;
        var arrLength = self.data.length;

        // "Arrow functions" are not supported by PhantomJS 2.x
        // PhantomJS only supports a small subset of ES6.
        // https://stackoverflow.com/questions/39026881/unexpected-token-using-array-some-with-karma-and-phantomjs
        // self.max = data.reduce((acc, task) => acc >= task.total ? acc : task.total, 0)

        for (var i = 0; i < arrLength; i++) {
          // Find Maximum X Axis Value
          if (self.data[i].total > self.max)
            self.max = self.data[i].total;
        }
        
      });


    //self.result = TasksService.GetApiCall(controllerRoute).success(function (data) {
    //  data = JSON.parse(data);
    //  self.StateList = data;
    //  self.data = data;

    //  self.max = 0;
    //  var arrLength = self.data.length;

    //  for (var i = 0; i < arrLength; i++) {
    //    // Find Maximum X Axis Value
    //    if (self.data[i].Total > self.max) {
    //      self.max = self.data[i].Total;
    //    }
    //  }

    //  
    //});


  }]
});
