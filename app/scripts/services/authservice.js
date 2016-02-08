'use strict';

/**
 * @ngdoc service
 * @name ecosenseUiApp.authservice
 * @description
 * # authservice
 * Factory in the ecosenseUiApp.
 */
angular.module('ecosenseUiApp')
  .factory('authService', ['$cookies', '$rootScope', function ($cookies, $rootScope) {
    var token = null;
    return {
      setToken: function (tok) {
        $rootScope.loggedIn = true;
        var now = new Date();
        $cookies.put('userToken', tok, (now.getDate() + 14));
        token = tok;
      },
      getToken : function() {
        return token;
      },
      clearToken : function() {
        $cookies.remove('userToken');
        token = null;
      },
      logout: function() {
        $cookies.remove('userToken');
        token = null;
        $rootScope.loggedIn = false;
        delete $rootScope.user;
      }
    };
  }]);
