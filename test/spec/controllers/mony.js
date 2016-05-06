'use strict';

describe('Controller: MonyCtrl', function () {

  // load the controller's module
  beforeEach(module('eiffelApp'));

  var MonyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MonyCtrl = $controller('MonyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MonyCtrl.awesomeThings.length).toBe(3);
  });
});
