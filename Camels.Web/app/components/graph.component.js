
"use strict";

angular.
module("core.components").
component("graph", {
  bindings: {
    width: '=',
    height: '=',
    yAxisLabel: '@',
    xAxisLabel: '@'
  },

  templateUrl: 'views/graph.template.html',

  controller: ['$http', 'tasksService', function graphController($http, tasksService) {
    var self = this;
    var controllerRoute = 'tasks';
  
    tasksService.getItems(controllerRoute).success(function (data) {
      //data = JSON.parse(data);
          
      self.data = data;

      self.max = 0;
     
      // https://stackoverflow.com/questions/39026881/unexpected-token-using-array-some-with-karma-and-phantomjs
      //    // self.max = data.reduce((acc, task) => acc >= task.total ? acc : task.total, 0)
      for (var i = 0; i < self.data.length; i++) {
        // Find Maximum X Axis Value
        if (self.data[i].Total > self.max) {
          self.max = self.data[i].Total;
        }
      }

    });


  }]
});
