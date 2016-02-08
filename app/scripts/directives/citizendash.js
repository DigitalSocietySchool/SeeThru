'use strict';

/**
 * @ngdoc directive
 * @name ecosenseUiApp.directive:citizendash
 * @description
 * # citizendash
 */
angular.module('ecosenseUiApp')
  .directive('citizendash', ['$rootScope', function ($rootScope) {
    return {
      templateUrl: 'views/partials/citizendashboard.html',
      restrict: 'E',
      scope: {
        data: '='
      },
      link: function postLink(scope, element, attrs) {
        scope.baseURL = $rootScope.baseURL;
      }
    };
  }]);
