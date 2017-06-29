(function (global, angular) { 
  function configApi($http, $location,$q) {
    //Url to call configuration controller
    var url = '../configuration/';
    var baseUrl;
    var localPort;
    var config;
   
    var getConfig= function () {
      return $http({
        method: 'GET',
        url: url,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (result) {
        return result.data;
      });
    }


    var get = function () {
      var promise;
      if (!config) {
        // The service hasn't yet cached any data.
        // Make a request to the server.        
        promise = this.getConfig();
        promise.then(function (data) {
          config = data;
        });
      } else {        
        // The service has already cached data from the server.
        // Wrap cached data in promise and return.
        promise = $q.when(config);
      }
   
      return promise;
    }
   

    return {
      getConfig: getConfig,
      get: get   
    }

  }
  angular.module('core.services')
    .factory('configApi', configApi);
})(this, angular);


