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

    return {
      get: _.once(getConfig)   
    }

  }
  angular.module('core.services')
    .factory('configApi', configApi);
})(this, angular);


