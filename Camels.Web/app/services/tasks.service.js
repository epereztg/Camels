(function (global, angular) {
  'use strict';

  function TasksService(tasksApi) {

    this.getItems = function (filter) {
      console.log(filter);
      return tasksApi.getItems(filter)
            .then(function (response) {
              return response.data;
            });
    };

    this.getItem = function (controllerRoute, taskId) {
      return tasksApi.getItem(controllerRoute, taskId)
            .then(function (response) {
              return response.data;
            });
    };


    this.saveItem = function (controllerRoute, obj) {
      return tasksApi.saveItem(controllerRoute, obj)
        .then(function (response) {
          return response.data;
        });
    };


    return {
      getItems: this.getItems,
      getItem: this.getItem,
      saveItem: this.saveItem
    };
  }
  angular.module('core.services')
        .factory('tasksService', TasksService);

})(this, angular);
