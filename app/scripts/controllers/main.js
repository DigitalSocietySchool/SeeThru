'use strict';

/**
 * @ngdoc function
 * @name ecosenseUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ecosenseUiApp
 */
angular.module('ecosenseUiApp')
  .controller('MainCtrl', ['$scope', 'apiService', '$routeParams', '$location', function ($scope, apiService, $routeParams, $location) {
  	$scope.goToQuiz = function() {
  		$location.path('/quiz');
  	};
  }]);
