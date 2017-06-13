var service = angular.module('core.services');

service.factory('TasksService', function ($http) {
  var result;


  return {
    getList: function () {
      return $http.get('tasks/tasks.json').then(function (response) {
        return response.data;
      }, function () {
        throw 'There was an error getting data';
      });
    },
    //Op1
    getSomeItem: function (itemId) {
      return $http.get('tasks/tasks.json')
        .success(function (items) {
          var aux = JSON.parse(JSON.stringify(items));
          items[itemId].label = "TaskModifieditems";
          console.log(items[itemId]);
          return items;
        })
        .error(function (data) {
          throw new Error(data + status + headers + config);
        });
    },
  
    GetApiCall : function () {
      result = $http.get('http://localhost:21275/editDetails').success(function (data, status) {
        result = (data);
        
      }).error(function () {
        alert("Something went wrong");
      });
      return result;
    },

    // This is used for calling post methods from web api with passing some data to the web api controller
    PostApiCall: function (controllerName, methodName, obj) {
      result = $http.post('http://localhost:21275/editDetails', obj).success(function (data, status) {
        result = (data);
      }).error(function () {
        alert("Something went wrong");
      });
      return result;
    }



  };


});
//});
