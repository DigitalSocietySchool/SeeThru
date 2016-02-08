'use strict';

/**
 * @ngdoc directive
 * @name ecosenseUiApp.directive:loadingBar
 * @description
 * # loadingBar
 */
angular.module('ecosenseUiApp')
  .directive('loadingBar', ['$rootScope', function ($rootScope) {
    return {
      templateUrl: 'views/partials/loadingbar.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.isRouteLoading = false;
        console.log('hello');
        $rootScope.$on('$routeChangeStart', function(){
          scope.isRouteLoading = true;
          console.log('Route starting, showing loading bar ');
        });

        $rootScope.$on('$routeChangeSuccess', function(){
          scope.isRouteLoading = false;
          console.log('Route finished, hiding loading bar ');
        });
      }
    };
  }]);
