(function() {
  'use strict';

  angular.module('core.components')    
    .controller('ItemDetailController', ItemDetailController);

  // 'item' is injected through state's resolve
  ItemDetailController.$inject = ['item', 'itemId', 'TasksService'];

  function ItemDetailController($scope, itemId, TasksService) {

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


    itemDetail.result = TasksService.GetApiCall().success(function (data) {
      debugger;
      console.log("Start");
      var data = $.parseJSON(JSON.parse(data));
      console.log(data);
      itemDetail.StateList = data;
    });



  };
})();
