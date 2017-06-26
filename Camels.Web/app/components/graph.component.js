
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

    tasksService.getItems(controllerRoute).then(function (data) {
      self.data = data;
      self.max = 0;

      var maxItem = _.maxBy(data,
        function(o) {
          return o.Total;
        });
      self.max = maxItem.Total;      
    });

  }]
});
