var service = angular.module('core.services');

service.factory('TasksService', function($http) {
  return {
    getList: function() {
      return $http.get('tasks/tasks.json').then(function(response) {
        return response.data;
      }, function() {
        throw 'There was an error getting data';
      });
    },
    //Op1
    getSomeItem: function(itemId) {
      return $http.get('tasks/tasks.json')
        .success(function(items) {
          var aux = JSON.parse(JSON.stringify(items));
          items[itemId].label = "TaskModifieditems";
          console.log(items[itemId]);
          return items
        })
        .error(function(data) {
          throw new Error(data + status + headers + config)
        });
    }
  };
  //Op2
  // getSomeItem: function(itemId) {
  //   this.getList()
  //     .then(function(items) {
  //       var aux = JSON.parse(JSON.stringify(items));
  //       items[itemId].label = "TaskModifieditems";
  //       console.log(items[itemId]);
  //       return items;
  //     })
  // }
});
//});
