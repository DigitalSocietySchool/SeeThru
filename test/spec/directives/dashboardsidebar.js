'use strict';

describe('Directive: dashboardSidebar', function () {

  // load the directive's module
  beforeEach(module('ecosenseUiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dashboard-sidebar></dashboard-sidebar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dashboardSidebar directive');
  }));
});
