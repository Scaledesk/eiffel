'use strict';

describe('Controller: NnnCtrl', function () {

  // load the controller's module
  beforeEach(module('eiffeliffelApp'));

  var NnnCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NnnCtrl = $controller('NnnCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NnnCtrl.awesomeThings.length).toBe(3);
  });
});
