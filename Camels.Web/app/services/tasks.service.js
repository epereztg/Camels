(function (global, angular) {
  'use strict';

  function tasksService(tasksApi, configApi) {

    this.getItems = function (controllerRoute) {     
      return configApi.get().then(function (config) {
          var configObj = {
            appName: config.ApplicationName,
            localPort: config.LocalPort
          };

          return tasksApi.getItems(configObj, controllerRoute)
          .then(function (response) {
            return response.data;
          });

      });
    };

    this.getItem = function (controllerRoute, taskId) {
      return configApi.get().then(function (config) {
        var configObj = {
          appName: config.ApplicationName,
          localPort: config.LocalPort
        };

        return tasksApi.getItem(configObj, controllerRoute, taskId)
          .then(function (response) {
            return response.data;
          });

      });
    };

    this.saveItem = function (controllerRoute, obj) {
      return configApi.get().then(function (config) {
        var configObj = {
          appName: config.ApplicationName,
          localPort: config.LocalPort
        };

        return tasksApi.saveItem(configObj, controllerRoute,obj)
          .then(function (response) {
            return response.data;
          });

      });
    };


    return {
      getItems: this.getItems,
      getItem: this.getItem,
      saveItem: this.saveItem
    };
  }
  angular.module('core.services')
        .factory('tasksService', tasksService);

})(this, angular);
