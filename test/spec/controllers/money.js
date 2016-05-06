'use strict';

describe('Controller: MoneyCtrl', function () {

  // load the controller's module
  beforeEach(module('eiffelApp'));

  var MoneyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MoneyCtrl = $controller('MoneyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MoneyCtrl.awesomeThings.length).toBe(3);
  });
});
