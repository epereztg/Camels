'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'ui.router',
     'ngAnimate',
    'core.components',
    'core.services'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    //$urlRouterProvider.when('/dashboard', '/dashboard/overview');    
    //$urlRouterProvider.otherwise('dashboard/overview');

    $urlRouterProvider.otherwise('dashboard');

    $stateProvider
      .state('base',
        {
          abstract: true,
          url: '',
          templateUrl: 'views/base.html'
        })
      .state('login',
        {
          url: '/login',
          parent: 'base',
          templateUrl: 'views/login.html'
        })
      .state('dashboard',
        {
          url: '/dashboard',
          parent: 'base',
          templateUrl: 'views/dashboard.html',
          controller: 'envController',   
          resolve: {
            baseUrl: ['envService',
              function (envService) {                  
                return envService.getBaseUrl().then(function (it) {
                  console.log('app.js baseurl' + it);
                  return it;
                });
              }
            ],
            localPort: ['envService',
              function (envService) {
                return envService.getLocalPort().then(function (item) {
                  console.log('app.js port:' + item);
                  return item;
                });
              }
            ]


          }

        })
      .state('itemDetail',
        {
          url: '/item-detail/{itemId}',
          templateUrl: 'views/item-detail.template.html',
          controller: 'ItemDetailController as itemDetail',
          resolve: {
            itemId: [
              '$stateParams', 'tasksService',
              function ($stateParams) {
                return $stateParams.itemId;
              }
            ],
            item: [
              '$stateParams', 'tasksService',
              function ($stateParams, tasksService) {
                var items;
                var controllerRoute = 'editDetails';

                //Call Using Backend:
                return tasksService.getItem(controllerRoute, parseInt($stateParams.itemId)).then(function (item) {
                  return item;
                });
              }
            ]
          }
        });

  }



  );
