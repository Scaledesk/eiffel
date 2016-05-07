'use strict';

describe('Controller: ForgotPwdCtrl', function () {

  // load the controller's module
  beforeEach(module('eiffelApp'));

  var ForgotPwdCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ForgotPwdCtrl = $controller('ForgotPwdCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ForgotPwdCtrl.awesomeThings.length).toBe(3);
  });
});
