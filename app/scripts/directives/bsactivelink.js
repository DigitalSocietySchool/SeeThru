'use strict';

/**
 * @ngdoc directive
 * @name ecosenseUiApp.directive:bsActiveLink
 * @description
 * # bsActiveLink
 */
angular.module('ecosenseUiApp')
.directive('bsActiveLink', ['$location', function ($location) {
  return {
    restrict: 'A', //use as attribute 
    replace: false,
    link: function (scope, elem) {
      //after the route has changed
      scope.$on('$routeChangeSuccess', function () {
          var hrefs = ['/#' + $location.path(),
                       '#' + $location.path(), //html5: false
                       $location.path()]; //html5: true
          var alreadySetDropdown = false;
          angular.forEach(elem.find('a'), function (a) {
              a = angular.element(a);
              var parent = a.parent();
              if(!a.hasClass('dropdown-link')) {
                if(-1 !== hrefs.indexOf(a.attr('href'))) {
                  a.parent().addClass('active');
                } else {
                  a.parent().removeClass('active');   
                }
              } else {
                var secondParent = parent.parent();
                var dropdownLink = secondParent.prev();
                if(-1 !== hrefs.indexOf(a.attr('href'))) {
                  alreadySetDropdown = true;
                  dropdownLink.addClass('active');
                } else {
                  if(!alreadySetDropdown) {
                    dropdownLink.removeClass('active');     
                  }
                }
              }
          });     
      });
    }
  };
}]);