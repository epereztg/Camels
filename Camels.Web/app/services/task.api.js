(function (global, angular) {
  var service = angular.module('core.services');

  //service.factory('tasksApi', function ($http, $location) {
  service.factory('tasksApi', function ($http, $window, envApi, $location) {
    var result;
    //var baseUrl = $location.protocol() + '://' + $location.host() + ':' + envApi.localPort + '/' + envApi.baseUrl;
    //var baseUrl = $location.protocol() + '://localhost:21275/';
    //var baseUrl;
    //envApi.get().then(function (response) {
    //  baseUrl = $location.protocol() + '://' + $location.host() + ':' + response.localPort + '/' + response.applicationName;
    //});

    var buildBaseUrl = function(appName, localPort) {
      return $location.protocol() + '://' + $location.host() + ':' + localPort + '/' + appName;
    }

    return {
      getItemsWithApplicationName: function (config, controllerRoute) {
        return $http({
          method: 'GET',
          url: buildBaseUrl(config.appName, config.localPort) + '/' + controllerRoute,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      },
      getItems: function (controllerRoute) {
        return $http({
          method: 'GET',
          url: getBaseUrl() + controllerRoute,
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


