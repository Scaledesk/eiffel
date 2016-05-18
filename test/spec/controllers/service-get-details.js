'use strict';

describe('Controller: ServiceGetDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('eiffelApp'));

  var ServiceGetDetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServiceGetDetailsCtrl = $controller('ServiceGetDetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ServiceGetDetailsCtrl.awesomeThings.length).toBe(3);
  });
});
