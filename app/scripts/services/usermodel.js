'use strict';

/**
 * @ngdoc service
 * @name ecosenseUiApp.userModel
 * @description
 * # userModel
 * Factory in the ecosenseUiApp.
 */
angular.module('ecosenseUiApp')
  .factory('userModel', function () {
    var user = null;
    return {
      getName: function () {
        return user.name;
      },
      getUser: function() {
        return user;
      },
      setUser: function(us) {
        user = us;
      }
    };
  });
