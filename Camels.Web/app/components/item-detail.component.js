(function () {
  'use strict';

  angular.module('core.components')
    .controller('ItemDetailController', ItemDetailController);

  // 'item' is injected through state's resolve
  ItemDetailController.$inject = ['item', 'itemId', 'tasksService', '$window'];

  //function ItemDetailController($scope, itemId, tasksService) {
  function ItemDetailController(item, itemId, tasksService, $window) {
    var controllerRoute = 'editDetails';

    var itemDetail = this;
    itemDetail.example = {
      value: 12
    };

    itemDetail.label = item.data.Label;
    itemDetail.total = item.data.Total;
    itemDetail.current = item.data.Current;
    itemDetail.itemId = itemId;
    itemDetail.timeline = item.data.Timeline;
    itemDetail.itemSelected = itemDetail;


    //Read from JSON with backend
    itemDetail.result = tasksService.getItems(controllerRoute).success(function (data) {
      data = JSON.parse(data);
      itemDetail.TasksList = data;
    });


    //Save Task details button
    itemDetail.btnPostCall = function () {
      var obj = {
        'ItemId': itemDetail.itemId,
        'Label': itemDetail.label,
        'Total': itemDetail.total,
        'Current': itemDetail.current,
        'Timeline':itemDetail.timeline
      }
      debugger;
      var result = tasksService.saveItem(controllerRoute, obj).success(function (data) {
        data = JSON.parse(data);
        itemDetail.message = data;
      });
    };


    //On DropDownList Change 
    itemDetail.onTaskChange = function () {

      tasksService.getItem(controllerRoute, itemDetail.itemSelected.ItemId).success(function (data) {
        //data = JSON.parse(data);               
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



  };
})();
