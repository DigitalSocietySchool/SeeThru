'use strict';

/**
 * @ngdoc overview
 * @name ecosenseUiApp
 * @description
 * # ecosenseUiApp
 *
 * Main module of the application.
 */
angular
  .module('ecosenseUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/quiz', {
        templateUrl: 'views/quiz.html',
        controller: 'QuizCtrl',
        controllerAs: 'quiz'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function($rootScope, $location, $cookies) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
      if(next.templateUrl === 'views/quiz.html') {
        $rootScope.viewingQuiz = true;
      } else {
        $rootScope.viewingQuiz = false;
      }
    });
  });
