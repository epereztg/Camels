var service = angular.module('core.services');

service.factory('tasksService', function ($http) {
  var result;


  return {
    //Use service 
    getList: function () {
      return $http.get('tasks/tasks.json').then(function (response) {
        return response.data;
      },
        function () {
          throw 'There was an error getting data';
        });
    },
    
    
    //Use Backend
    getItemsList: function (controllerRoute) {
      result = $http.get('http://localhost:21275/' + controllerRoute).success(function(data, status) {
        result = (data);

      }).error(function() {
        alert("Something went wrong with getItemsList");
      });
      return result;
    },
    getItem: function (controllerRoute, id) {
      result = $http.get('http://localhost:21275/' + controllerRoute+'/'+id).success(function (data, status) {
        result = (data);

      }).error(function () {
        alert("Something went wrong with getItem");
      });
      return result;
    },


    PostApiCall: function (controllerRoute, obj) {
      return $http({
        method: 'POST',
        url: "http://localhost:21275/" + controllerRoute,
        header: {          
          'Content-Type': 'application/json'
        },
        data: obj
      })
        .success(function (data) {
          result = (data);

        }).error(function () {
          alert("Something went wrong");
        });
    }

  }
});


