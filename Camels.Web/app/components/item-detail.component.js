(function () {
  'use strict';

  angular.module('core.components')
    .directive('ngConfirmClick', [
    function () {
        return {
            link: function (scope, element, attr) {
                var msg = attr.ngConfirmClick || "Are you sure?";
                var clickAction = attr.confirmedClick;
                element.bind('click', function (event) {
                    if (window.confirm(msg)) {
                      scope.$eval(clickAction);
                    }
                });
            }
        };
    }])
    .controller('ItemDetailController', ItemDetailController);

  ItemDetailController.$inject = ['item', 'itemId', 'tasksService', 'configApi', '$window', 'toaster'];
  
  function ItemDetailController(item, itemId, tasksService, configApi, $window, toaster) {

    var controllerRoute = 'editDetails';

    var itemDetail = this;

    itemDetail.label = item.Label;
    itemDetail.total = item.Total;
    itemDetail.current = item.Current;
    itemDetail.itemId = itemId;
    itemDetail.timeline = item.Timeline;
    itemDetail.description = item.Description;
    
    


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
        'Description':itemDetail.description,
        'Timeline':itemDetail.timeline
      }      
      var result = tasksService.saveItem(controllerRoute, obj).then(function (data) {
        //Save and Back
        $window.history.back();    
        toaster.pop('info', "Updated", "Task has been updated");
      });
    };


    //On DropDownList Change 
    itemDetail.onTaskChange = function () {

      tasksService.getItem(controllerRoute, itemDetail.itemSelected.ItemId).then(function (data) {        
        itemDetail.label = data.Label;        
        itemDetail.total = data.Total;
        itemDetail.current = data.Current;
        itemDetail.itemId = data.ItemId;
        itemDetail.description =data.description,
        itemDetail.timeline = data.Timeline;
      });
    };

    itemDetail.goBack = function () {
      $window.history.back();
    };
    
    itemDetail.deleteTaskButton = function () { 
      var result = tasksService.deleteTask(controllerRoute, itemDetail.itemId).then(function (data) {
        $window.history.back();
        toaster.pop('info', "Deleted", "Task has been deleted");
      });
    };

  };
})();
