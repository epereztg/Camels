var service = angular.module('core.services');

service.factory('TasksService', function ($http) {
  var result;


  return {
    getList: function () {
      return $http.get('tasks/tasks.json').then(function (response) {
        return response.data;
      },
        function () {
          throw 'There was an error getting data';
        });
    },
    
    

    GetApiCall: function (controllerRoute) {
      result = $http.get('http://localhost:21275/' + controllerRoute).success(function(data, status) {
        result = (data);

      }).error(function() {
        alert("Something went wrong");
      });
      return result;
    },

    //GetApiCall: function (controllerRoute) {
    //  $http.get('http://localhost:21275/' + controllerRoute).then(function (response) {
    //    console.log(response.data);
    //    result = (response.data);
    //    return result;
    //  }).catch(function () {
    //    alert("Something went wrong");
    //  });
    //},


    //GetApiCall : function (controllerRoute) {
    //  return $http({
    //    method: 'GET',
    //    url: "http://localhost:21275/" + controllerRoute,
    //    headers: {
    //      'Content-Type': 'application/json'
    //    }       
    //  });
    //},

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


    //PostApiCall : function (controllerRoute, obj) {
    //  result = $http.post("http://localhost:21275/" + controllerRoute, obj).success(function(data, status) {
    //    result = (data);
    //  }).error(function() {
    //    alert("Something went wrong");
    //  });
    //  return result;

    //}
  }
});
//});
