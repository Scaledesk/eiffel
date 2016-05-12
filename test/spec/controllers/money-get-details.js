'use strict';

describe('Controller: MoneyGetDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('eiffelApp'));

  var MoneyGetDetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MoneyGetDetailsCtrl = $controller('MoneyGetDetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MoneyGetDetailsCtrl.awesomeThings.length).toBe(3);
  });
});
