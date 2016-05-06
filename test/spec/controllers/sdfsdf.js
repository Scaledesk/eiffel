'use strict';

describe('Controller: SdfsdfCtrl', function () {

  // load the controller's module
  beforeEach(module('eiffeliffelApp'));

  var SdfsdfCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SdfsdfCtrl = $controller('SdfsdfCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SdfsdfCtrl.awesomeThings.length).toBe(3);
  });
});
