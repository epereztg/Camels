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

      $urlRouterProvider.when('/dashboard', '/dashboard/overview');
      //$urlRouterProvider.otherwise('/login');//original
      $urlRouterProvider.otherwise('dashboard/overview');

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
              //controller: 'LoginCtrl'
          })
        .state('dashboard',
          {
              url: '/dashboard',
              parent: 'base',
              templateUrl: 'views/dashboard.html'
              //controller: 'DashboardCtrl'
          })
        .state('overview',
          {
              url: '/overview',
              parent: 'dashboard',
              templateUrl: 'views/dashboard/overview.html'
          })
        .state('reports',
          {
              url: '/reports',
              parent: 'dashboard',
              templateUrl: 'views/dashboard/reports.html'
          })
        .state('itemDetail',
          {
              url: '/item-detail/{itemId}',
              templateUrl: 'views/item-detail.template.html',
              controller: 'ItemDetailController as itemDetail',
              resolve: {
                  itemId: [
                    '$stateParams', 'TasksService',
                    function ($stateParams) {
                        return $stateParams.itemId;
                    },
                  ],
                  item: [
                    '$stateParams', 'TasksService',
                    function ($stateParams, TasksService) {
                        var items;
                        var controllerRoute = 'editDetails';

                        //Call Using Backend:
                        return TasksService.GetItemsList(controllerRoute).success(function (items) {

                          items = JSON.parse(items);
                            
                          var id = _.result(_.find(items, function (obj) {
                              return obj.ItemId === parseInt($stateParams.itemId);
                            }), 'ItemId');
                           
                          return items[id];
                        });

                        ////Call Using AngularJS Service:                
                        //return TasksService.getList()
                        //  .then(function(items) {
                        //    return items[$stateParams.itemId];
                        //  });
                    }
                  ]
              }
          });

  });
