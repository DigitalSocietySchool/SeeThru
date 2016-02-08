'use strict';

describe('Controller: DropoffCtrl', function () {

  // load the controller's module
  beforeEach(module('ecosenseUiApp'));

  var DropoffCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DropoffCtrl = $controller('DropoffCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DropoffCtrl.awesomeThings.length).toBe(3);
  });
});
