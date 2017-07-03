(function () {
  'use strict';

  angular.module('core.components')
    .controller('CreateTaskController', CreateTaskController);

  CreateTaskController.$inject = ['tasksService', '$window','$scope'];
  
  function CreateTaskController(tasksService, $window, $scope) {

    var controllerRoute = 'createtask';

    //Save Task details button
    $scope.btnPostCall = function () {            
      var obj = {
        'ItemId': this.itemId,
        'Label': this.label,
        'Total': this.total,
        'Current': this.current,
        'Description': this.description
      }      
      var result = tasksService.createItem(controllerRoute, obj).then(function (data) {
        $window.history.back();
      });

    };

    $scope.goBack = function () {
      $window.history.back();
    };



  };
})();
