(function () {
  'use strict';

  angular.module('core.components')
    .controller('CreateTaskController', CreateTaskController);

  CreateTaskController.$inject = ['tasksService', '$window', '$scope', 'toaster'];

  function CreateTaskController(tasksService, $window, $scope, toaster) {

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
        toaster.pop({
          type: 'info',
          title: 'Created',
          body: 'New task Created',
          timeout: 3000
        });

        // toasterService.showSuccess();
      }).error(function () {
        toaster.pop({
          type: 'error',
          title: 'Error',
          body: 'Error creating new task',
          timeout: 3000
        });
        //alert("Error creating new task");
      });

    };

    $scope.goBack = function () {
      $window.history.back();
    };



  };
})();
