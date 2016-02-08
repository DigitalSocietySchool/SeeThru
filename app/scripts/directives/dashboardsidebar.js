'use strict';

/**
 * @ngdoc directive
 * @name ecosenseUiApp.directive:dashboardSidebar
 * @description
 * # dashboardSidebar
 */
angular.module('ecosenseUiApp')
  .directive('dashboardsidebar', function () {
    return {
      templateUrl: 'views/directives/dashboardsidebar.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
