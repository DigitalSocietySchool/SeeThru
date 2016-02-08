'use strict';

describe('Controller: DropoffFindCtrl', function () {

  // load the controller's module
  beforeEach(module('ecosenseUiApp'));

  var DropoffFindCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DropoffFindCtrl = $controller('DropoffFindCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DropoffFindCtrl.awesomeThings.length).toBe(3);
  });
});
