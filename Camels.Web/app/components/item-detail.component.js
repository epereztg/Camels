(function() {
  'use strict';

  angular.module('core.components')    
    .controller('ItemDetailController', ItemDetailController);

  // 'item' is injected through state's resolve
  ItemDetailController.$inject = ['item', 'itemId', 'TasksService'];

  function ItemDetailController($scope, itemId, TasksService) {
    var controllerRoute = 'editDetails';
    var itemDetail = this;

    
    
    itemDetail.label = $scope.label;
    itemDetail.total = $scope.total;
    itemDetail.current = $scope.current;
    itemDetail.itemId = itemId;


    //Read from JSON with backend
    itemDetail.result = TasksService.GetApiCall(controllerRoute).success(function (data) {            
      data = JSON.parse(data);            
      itemDetail.StateList = data;
    });
    itemDetail.itemSelected = itemId;

    //Save Task details button
    itemDetail.btnPostCall = function () {            
      var obj = {
        'ItemId': itemDetail.itemId,
        'Label': itemDetail.label,
        'Total': itemDetail.total,
        'Current': itemDetail.current
      }        
      var result = TasksService.PostApiCall(controllerRoute,obj).success(function (data) {       
        data = JSON.parse(data);       
        itemDetail.message = data;        
      });
    };
  
    itemDetail.onTaskChange = function () {
      TasksService.GetApiCall(controllerRoute).success(function (data) {
        data = JSON.parse(data);
        debugger;
        itemDetail.ItemId = data[itemDetail.itemSelected.ItemId];
      });
      
    };





  };
})();
