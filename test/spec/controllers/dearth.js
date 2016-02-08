'use strict';

describe('Controller: DearthCtrl', function () {

  // load the controller's module
  beforeEach(module('ecosenseUiApp'));

  var DearthCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DearthCtrl = $controller('DearthCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DearthCtrl.awesomeThings.length).toBe(3);
  });
});
