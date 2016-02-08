'use strict';

describe('Controller: UnearthCtrl', function () {

  // load the controller's module
  beforeEach(module('ecosenseUiApp'));

  var UnearthCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UnearthCtrl = $controller('UnearthCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UnearthCtrl.awesomeThings.length).toBe(3);
  });
});
