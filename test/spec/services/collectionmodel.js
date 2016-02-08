'use strict';

describe('Service: collectionModel', function () {

  // load the service's module
  beforeEach(module('ecosenseUiApp'));

  // instantiate service
  var collectionModel;
  beforeEach(inject(function (_collectionModel_) {
    collectionModel = _collectionModel_;
  }));

  it('should do something', function () {
    expect(!!collectionModel).toBe(true);
  });

});
