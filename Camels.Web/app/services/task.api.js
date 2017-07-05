(function (global, angular) {
  var service = angular.module('core.services');
  
  service.factory('tasksApi', function ($http, $window, configApi, $location) {
    var result;  

    var buildBaseUrl = function(appName, localPort) {
      return $location.protocol() + '://' + $location.host() + ':' + localPort + '/' + appName;
    }

    return {
      getItems: function (config, controllerRoute) {
        return $http({
          method: 'GET',
          url: buildBaseUrl(config.appName, config.localPort) +  controllerRoute,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      },
      getItem: function (config, controllerRoute, id) {
        return $http({
          method: 'GET',
          url: buildBaseUrl(config.appName, config.localPort) + controllerRoute + '/' + id,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      },    
      saveItem: function (config,controllerRoute, obj) {
        return $http({
          method: 'POST',          
          url: buildBaseUrl(config.appName, config.localPort) + controllerRoute,
          header: {
            'Content-Type': 'application/json'
          },
          data: obj
        })
          .success(function (data) {
            result = (data);

          }).error(function () {
            //alert("Something went wrong in the post call");
          });
      },
      createItem: function (config, controllerRoute, obj) {
        return $http({
            method: 'POST',
            url: buildBaseUrl(config.appName, config.localPort) + controllerRoute,
            header: {
              'Content-Type': 'application/json'
            },
            data: obj
          })
          .success(function (data) {
            result = (data);

          }).error(function () {
            //alert("Something went wrong in the post call");
          });
      },
      deleteTask: function (config, controllerRoute, id) {
        return $http({
          method: 'POST',
          url: buildBaseUrl(config.appName, config.localPort) + controllerRoute + '/' + id,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }

    }
  });
})(this, angular);


