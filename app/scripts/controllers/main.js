'use strict';

/**
 * @ngdoc function
 * @name dynamicRouteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dynamicRouteApp
 */
angular.module('dynamicRouteApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('DynamicController', function ($scope, $routeParams) {
	console.log($routeParams);
	$scope.templateUrl = $routeParams.category + '/' + $routeParams.subCategory;
  });