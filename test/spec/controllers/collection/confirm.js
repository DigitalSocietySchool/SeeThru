'use strict';

describe('Controller: CollectionConfirmCtrl', function () {

  // load the controller's module
  beforeEach(module('ecosenseUiApp'));

  var CollectionConfirmCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CollectionConfirmCtrl = $controller('CollectionConfirmCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CollectionConfirmCtrl.awesomeThings.length).toBe(3);
  });
});
