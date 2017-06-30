"use strict";

// Register `barList` component, along with its associated controller and template
angular.
module("core.components").
component("barList", {
  bindings: {
    width: '=',
    height: '=',
    max: '=',   
    data: '='
  },
  templateUrl: 'views/bar-list.template.html',
  controller: ['$http', function barListController($http) {
    var self = this;
    self.image = 'images/walkingCamel.gif'; 
  }]
});
