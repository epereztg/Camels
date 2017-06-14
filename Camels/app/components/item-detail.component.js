(function() {
  'use strict';

  angular.module('core.components')    
    .controller('ItemDetailController', ItemDetailController);

  // 'item' is injected through state's resolve
  ItemDetailController.$inject = ['item', 'itemId', 'TasksService'];

  function ItemDetailController($scope, itemId, TasksService) {
    var controllerRoute = 'editDetails';
    var itemDetail = this;
    //$scope.id = $stateParams.itemID;
    //itemDetail.name = item;
    itemDetail.label = $scope.label;
    itemDetail.total = $scope.total;
    itemDetail.current = $scope.current;
    itemDetail.itemId = itemId;


    itemDetail.getSomeItem = function(itemId) {
      //Op2
      var itemNew= TasksService.getSomeItem(itemId);     
    }

    //Read from JSON with backend
    itemDetail.result = TasksService.GetApiCall(controllerRoute).success(function (data) {            
      data = JSON.parse(data);            
      itemDetail.StateList = data;
    });
   
    itemDetail.btnPostCall = function () {            
      var obj = {
        'ItemId': itemDetail.itemId,
        'Label': itemDetail.label,
        'Total': itemDetail.total,
        'Current': itemDetail.current
      }
      //var obj = {
      //  'ItemId': itemDetail.itemId
      //  //'stateName':'lhksdksjhksjdh'
      //}
      
      //Call Post method from web api in angular controller using angular service. I am passing string value to the web api through service.
      var result = TasksService.PostApiCall(controllerRoute,obj).success(function (data) {       
        data = JSON.parse(data);       
        itemDetail.message = data;
        
      });
    };
  


  };
})();
