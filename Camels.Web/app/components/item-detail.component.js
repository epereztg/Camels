(function () {
  'use strict';

  angular.module('core.components')
    .controller('ItemDetailController', ItemDetailController);

  ItemDetailController.$inject = [ 'item', 'itemId',  'tasksService', '$window'];
  
  function ItemDetailController( item, itemId, tasksService, $window) {
    //envService.setBaseUrl(baseUrl);
    //envService.setLocalPort(localPort);

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
    itemDetail.btnPostCall = function () {
      var obj = {
        'ItemId': itemDetail.itemId,
        'Label': itemDetail.label,
        'Total': itemDetail.total,
        'Current': itemDetail.current,
        'Timeline':itemDetail.timeline
      }      
      var result = tasksService.saveItem(controllerRoute, obj).then(function (data) {
        data = JSON.parse(data);
        itemDetail.message = data;
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



  };
})();
