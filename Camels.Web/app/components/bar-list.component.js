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

    self.lists = [
      {
        name: '11'
      }, {
        name: '22'
      }
    ];
    self.clickMenu = function (item) {
      console.log(item);
    };

    self.rightClick = function (event) {
      console.log(event);
    };


  }]
});


  
//$scope.removeItem = function (list, item) {
//  lodash.remove(list, function (someItem) { return item === someItem });
//}
