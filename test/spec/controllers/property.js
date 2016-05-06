'use strict';

describe('Controller: PropertyCtrl', function () {

  // load the controller's module
  beforeEach(module('eiffelApp'));

  var PropertyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PropertyCtrl = $controller('PropertyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PropertyCtrl.awesomeThings.length).toBe(3);
  });
});
