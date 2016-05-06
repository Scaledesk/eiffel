'use strict';

describe('Controller: SinupCtrl', function () {

  // load the controller's module
  beforeEach(module('eiffeliffelApp'));

  var SinupCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SinupCtrl = $controller('SinupCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SinupCtrl.awesomeThings.length).toBe(3);
  });
});
