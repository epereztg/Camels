'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # camelsrace
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'ui.router',   
    'ngAnimate',
    'core.components',
    'core.services',
    'toaster'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('dashboard');

    $stateProvider
      .state('base',
        {
          abstract: true,
          url: '',
          templateUrl: 'views/base.html'
        })
      .state('dashboard',
        {
          url: '/dashboard',
          parent: 'base',
          templateUrl: 'views/dashboard.html'
        })
      .state('createTask',
        {
          url: '/createTask',
          parent: 'base',
          templateUrl: 'views/create-task.template.html',
          controller: 'CreateTaskController as createTask'
        })
      .state('itemDetail',
        {
          url: '/item-detail/{itemId}',
          templateUrl: 'views/item-detail.template.html',
          controller: 'ItemDetailController as itemDetail',
          resolve: {
            itemId: [
              '$stateParams',
              function ($stateParams) {
                return $stateParams.itemId;
              }
            ],
            item: [
              '$stateParams', 'tasksService',
                function ($stateParams, tasksService) {
                  var controllerRoute = 'editDetails';

                  return tasksService.getItem(controllerRoute, parseInt($stateParams.itemId)).then(function (item) {
                    return item;
                  });
                }
            ]


          }
        });
  }
  );
