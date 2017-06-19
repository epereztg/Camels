(function () {
  'use strict';

  angular.module('core.components')
    .controller('ItemDetailController', ItemDetailController);

  // 'item' is injected through state's resolve
  ItemDetailController.$inject = ['item', 'itemId', 'TasksService', '$window'];

  //function ItemDetailController($scope, itemId, TasksService) {
  function ItemDetailController(item, itemId, TasksService) {
    var controllerRoute = 'editDetails';

    var itemDetail = this;


    itemDetail.label = item.data.Label;
    itemDetail.total = item.data.Total;
    itemDetail.current = item.data.Current;
    itemDetail.itemId = itemId;
    itemDetail.itemSelected = itemDetail;


    //Read from JSON with backend
    itemDetail.result = TasksService.getItemsList(controllerRoute).success(function (data) {
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
      var result = TasksService.PostApiCall(controllerRoute, obj).success(function (data) {
        data = JSON.parse(data);
        itemDetail.message = data;
      });
    };


    //On DropDownList Change 
    itemDetail.onTaskChange = function () {

      TasksService.getItem(controllerRoute, itemDetail.itemSelected.ItemId).success(function (data) {
        //data = JSON.parse(data);               
        itemDetail.label = data.Label;
        itemDetail.label = data.Label;
        itemDetail.total = data.Total;
        itemDetail.current = data.Current;
        itemDetail.itemId = data.itemId;
      });


    };

    itemDetail.goBack = function () {
      $window.history.back();
    };



  };
})();
