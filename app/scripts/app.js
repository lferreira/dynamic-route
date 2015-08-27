'use strict';

/**
 * @ngdoc overview
 * @name dynamicRouteApp
 * @description
 * # dynamicRouteApp
 *
 * Main module of the application.
 */
angular
  .module('dynamicRouteApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/:category/:subCategory', {
        template: '<div ng-include="templateUrl">Loading...</div>',
        controller: 'DynamicController'
      }).otherwise({
        redirectTo: '/'
      });
  });