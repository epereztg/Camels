'use strict';

// Define the `app` module
//angular.module('app', ['ui.router']);


angular.module('app', [
    'ui.router',
    'core.components',
    'core.services'
  ])
  .config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  //$urlRouterProvider.otherwise('/');

  $urlRouterProvider.when('/dashboard', '/dashboard/overview');
    $urlRouterProvider.otherwise('/dashboard');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.template.html'
    })
    .state('dashboard', {
      url: '/dashboard',
      parent: 'base',
        templateUrl: 'views/dashboard.html',
     
      controller: 'DashboardCtrl'
    })
    .state('overview', {
      url: '/overview',
      parent: 'dashboard',
        templateUrl: 'views/dashboard/overview.html'
      
    })
    .state('reports', {
            url: '/reports',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/reports.html'
    })

    .state('itemDetail', {
      url: '/item-detail/{itemId}',
      templateUrl: 'views/item-detail.template.html',
      controller: 'ItemDetailController as itemDetail',
      resolve: {
        itemId: ['$stateParams', 'TasksService',
          function($stateParams) {
            return $stateParams.itemId
          },
        ],
        item: ['$stateParams', 'TasksService',
          function($stateParams, TasksService) {
            var items;           
            var controllerRoute = 'editDetails';
            TasksService.getList(controllerRoute).success(function (data) {
              data = JSON.parse(data);
              return data;
            });
            //TasksService.getList()
            //  .then(function(items) {
            //    return items[$stateParams.itemId];
            //  });
          }

        ]
      }
    })

  ;
}
