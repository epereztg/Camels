(function () {
  'use strict';

  angular.module('core.components')
    .controller('envController', envController);

  envController.$inject = ['baseUrl', 'localPort', 'envService'];
  
  function envController(baseUrl, localPort,envService) {

    envService.setBaseUrl(baseUrl);
    envService.setLocalPort(localPort);
  };

})();
