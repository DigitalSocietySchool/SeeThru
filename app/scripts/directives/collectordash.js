'use strict';

/**
 * @ngdoc directive
 * @name ecosenseUiApp.directive:collectordash
 * @description
 * # collectordash
 */
angular.module('ecosenseUiApp')
  .directive('collectordash', function () {
    return {
      templateUrl: 'views/partials/collectordashboard.html',
      restrict: 'E',
      scope: {
        data: '='
      },
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
