'use strict';

/**
 * @ngdoc directive
 * @name ecosenseUiApp.directive:logoutButton
 * @description
 * # logoutButton
 */
angular.module('ecosenseUiApp')
  .directive('logoutbutton', ['$rootScope', 'apiService', 'authService', '$location', function ($rootScope, apiService, authService, $location) {
    return {
      templateUrl: 'views/partials/logoutbutton.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the logoutButton directive');
        scope.logout = function() {
          authService.logout();
          $location.path('/');
        };
      }
    };
  }]);
