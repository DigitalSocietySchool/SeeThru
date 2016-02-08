'use strict';

/**
 * @ngdoc directive
 * @name ecosenseUiApp.directive:navbar
 * @description
 * # navbar
 */
angular.module('ecosenseUiApp')
  .directive('navbar', ['$location', '$rootScope', '$cookies', 'apiService', 'authService', 'userModel', function ($location, $rootScope, $cookies, apiService, authService, userModel) {
    return {
      templateUrl: 'views/partials/navbar.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.currentlyActive = $('.navbar-nav').children().first();
        scope.scrollDown = function($event, to) {
          $($event.toElement).parent().addClass('active');
          scope.currentlyActive.removeClass('active');
          scope.currentlyActive = $($event.toElement).parent();
          $(window).scrollTo(to); 
        };
        scope.goBack = function() {
          $location.path('/');
        };
      }
    };
  }]);
