(function () {
  'use strict';

  angular.module('core.components')
    .controller('CreateTaskController', CreateTaskController);

  CreateTaskController.$inject = ['tasksService', '$window'];
  
  function CreateTaskController(tasksService,$window) {

    var controllerRoute = 'createtask';

    var itemDetail = this;

    //itemDetail.label = item.Label;
    //itemDetail.total = item.Total;
    //itemDetail.current = item.Current;
    //itemDetail.itemId = itemId;
    //itemDetail.timeline = item.Timeline;    


    //Read from JSON with backend
    itemDetail.result = tasksService.getItems(controllerRoute).then(function (data) {
      data = JSON.parse(data);
      itemDetail.TasksList = data;     
    });


    //Save Task details button
    itemDetail.btnPostCall = function () {
      var obj = {
        'ItemId': itemDetail.itemId,
        'Label': itemDetail.label,
        'Total': itemDetail.total,
        'Current': itemDetail.current       
      }      
      var result = tasksService.createItem(controllerRoute, obj).then(function (data) {
        $window.history.back();
      });

    };

    itemDetail.goBack = function () {
      $window.history.back();
    };



  };
})();
