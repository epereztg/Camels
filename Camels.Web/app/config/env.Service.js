(function (global, angular) {
  'use strict';

  function envService(envApi) {

    this.baseUrl = envApi.baseUrl;
    this.localPort = envApi.localPort;


    this.getBaseUrl = function () {
      return envApi.get()
        .then(function (response) {
          return response.BaseUrl;
        });

    };

    this.getLocalPort = function () {
      return envApi.get()
        .then(function (response) {
          return response.LocalPort;
        });

    };

    return {
      baseUrl: this.baseUrl,
      localPort: this.localPort,
      getLocalPort: this.getLocalPort,
      getBaseUrl: this.getBaseUrl

    };
  }
  angular.module('core.services')
    .factory('envService', envService);

})(this, angular);
