(function () {
  'use strict';

  angular.module('core.components')
    .controller('ItemDetailController', ItemDetailController);

  ItemDetailController.$inject = [ 'item', 'itemId',  'tasksService','configApi', '$window'];
  
  function ItemDetailController( item, itemId, tasksService,configApi, $window) {   

    var controllerRoute = 'editDetails';

    var itemDetail = this;

    itemDetail.label = item.Label;
    itemDetail.total = item.Total;
    itemDetail.current = item.Current;
    itemDetail.itemId = itemId;
    itemDetail.timeline = item.Timeline;    


    //Read from JSON with backend
    itemDetail.result = tasksService.getItems(controllerRoute).then(function (data) {
      data = JSON.parse(data);
      itemDetail.TasksList = data;     
    });


    //Save Task details button
    itemDetail.saveItemButton = function () {
      var obj = {
        'ItemId': itemDetail.itemId,
        'Label': itemDetail.label,
        'Total': itemDetail.total,
        'Current': itemDetail.current,
        'Timeline':itemDetail.timeline
      }      
      var result = tasksService.saveItem(controllerRoute, obj).then(function (data) {
        //Save and Back
        $window.history.back();
      });
    };


    //On DropDownList Change 
    itemDetail.onTaskChange = function () {

      tasksService.getItem(controllerRoute, itemDetail.itemSelected.ItemId).then(function (data) {        
        itemDetail.label = data.Label;        
        itemDetail.total = data.Total;
        itemDetail.current = data.Current;
        itemDetail.itemId = data.ItemId;
        itemDetail.timeline = data.Timeline;
      });
    };

    itemDetail.goBack = function () {
      $window.history.back();
    };
    itemDetail.delete = function () {
        $confirm({ text: 'Are you sure you want to delete?' })
          .then(function () {
              $scope.deletedConfirm = 'Deleted';
          });
    }
    
    itemDetail.deleteTaskButton = function () { 
      var result = tasksService.deleteTask(controllerRoute, itemDetail.itemId).then(function (data) {
        $window.history.back();
      });
    };

  };
})();
