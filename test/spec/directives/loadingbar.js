'use strict';

describe('Directive: loadingBar', function () {

  // load the directive's module
  beforeEach(module('ecosenseUiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<loading-bar></loading-bar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the loadingBar directive');
  }));
});
