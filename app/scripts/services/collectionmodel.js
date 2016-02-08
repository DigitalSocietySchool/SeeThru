'use strict';

/**
 * @ngdoc service
 * @name ecosenseUiApp.collectionModel
 * @description
 * # collectionModel
 * Factory in the ecosenseUiApp.
 */
angular.module('ecosenseUiApp')
  .factory('collectionModel', ['$rootScope', function ($rootScope) {
    var currentCollection = null;

    // Public API here
    return {
      setCurrentCollection: function (collection) {
        currentCollection = collection;
      },
      getCurrentCollection: function() {
        return currentCollection;
      }
    };
  }]);
