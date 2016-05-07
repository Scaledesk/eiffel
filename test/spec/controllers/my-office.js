'use strict';

describe('Controller: MyOfficeCtrl', function () {

  // load the controller's module
  beforeEach(module('eiffelApp'));

  var MyOfficeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyOfficeCtrl = $controller('MyOfficeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MyOfficeCtrl.awesomeThings.length).toBe(3);
  });
});
