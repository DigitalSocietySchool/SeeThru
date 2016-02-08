'use strict';

/**
 * @ngdoc directive
 * @name ecosenseUiApp.directive:loginForm
 * @description
 * # loginForm
 */
angular.module('ecosenseUiApp')
  .directive('loginForm', ['$location', 'apiService', function ($location, apiService) {
    return {
      templateUrl: 'views/partials/loginform.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.incorrectPassword = false;
        scope.serverError = false;
        scope.loading = false;
        scope.submit = function(user, loginForm) {
          if(loginForm.$valid) {
            scope.loading = true;
            apiService.login(user).then(function(response) {
              if(response.data.status === 200) {
                console.log('Successful login, grabbing user');
                scope.incorrectPassword = false;
                scope.serverError = false;
                apiService.getAuthenticatedUser().then(function(user) {
                  console.log('Grabbed user, redirecting');
                  $location.path('/dashboard');
                }).catch(function(error) {

                });
              }
            }).catch(function(error) {
              scope.loading = false;
              if(error.status === 401) {
                scope.incorrectPassword = true;
              } else {
                scope.serverError = true;
              }
              console.error('error', error);
            });
          }
        };
      }
    };
  }]);
