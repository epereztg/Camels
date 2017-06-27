(function (global, angular) {
  var service = angular.module('core.services');

  service.factory('envApi', function ($http, $location) {

    //Url to call configuration controller
    //var url = $location.protocol() + '://' + $location.host() + ':' + $location.port() + '/configuration/'; 
    var url ='../configuration/';

    return {
      get: function () {
        return $http({
          method: 'GET',
          url: url,
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(function (result) {         
          return result.data;
        });
      },        
      setBaseUrl: function (obj) {
        this.baseUrl = obj;
      },
      setLocalPort: function (obj) {
        this.localPort = obj;
      }
    }

  });
})(this, angular);


