'use strict';

describe('Controller: NnCtrl', function () {

  // load the controller's module
  beforeEach(module('eiffeliffelApp'));

  var NnCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NnCtrl = $controller('NnCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NnCtrl.awesomeThings.length).toBe(3);
  });
});
