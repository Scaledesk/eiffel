'use strict';

describe('Controller: Nn1Ctrl', function () {

  // load the controller's module
  beforeEach(module('eiffeliffelApp'));

  var Nn1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Nn1Ctrl = $controller('Nn1Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Nn1Ctrl.awesomeThings.length).toBe(3);
  });
});
