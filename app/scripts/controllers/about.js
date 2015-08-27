'use strict';

/**
 * @ngdoc function
 * @name dynamicRouteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dynamicRouteApp
 */
angular.module('dynamicRouteApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
