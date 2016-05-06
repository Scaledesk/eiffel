'use strict';

describe('Controller: PalashCtrl', function () {

  // load the controller's module
  beforeEach(module('eiffeliffelApp'));

  var PalashCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PalashCtrl = $controller('PalashCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PalashCtrl.awesomeThings.length).toBe(3);
  });
});
