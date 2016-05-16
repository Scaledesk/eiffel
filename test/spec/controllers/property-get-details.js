'use strict';

describe('Controller: PropertyGetDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('eiffelApp'));

  var PropertyGetDetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PropertyGetDetailsCtrl = $controller('PropertyGetDetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PropertyGetDetailsCtrl.awesomeThings.length).toBe(3);
  });
});
