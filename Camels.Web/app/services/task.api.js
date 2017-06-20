(function (global, angular) {
  var service = angular.module('core.services');

  service.factory('tasksApi', function ($http) {
    var result;
    var baseUrl = 'http://localhost:21275/';

    return {
      getItems: function (controllerRoute) {
        return $http({
          method: 'GET',
          url: baseUrl + controllerRoute,
          headers: {
            'Content-Type': 'application/json'
          }
         
        });
      },
      getItem: function (controllerRoute, id) {
        return $http({
          method: 'GET',
          url: baseUrl + controllerRoute + '/' + id,
          headers: {
            'Content-Type': 'application/json'
          }
         
        });
      },


      saveItem: function (controllerRoute, obj) {
        return $http({
          method: 'POST',
          url: baseUrl + controllerRoute,
          header: {
            'Content-Type': 'application/json'
          },
          data: obj
        })
          .success(function (data) {
            result = (data);

          }).error(function () {
            alert("Something went wrong in the post call");
          });
      }

    }
  });
})(this, angular);


