'use strict';

describe('Controller: MyNetworkCtrl', function () {

  // load the controller's module
  beforeEach(module('eiffelApp'));

  var MyNetworkCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyNetworkCtrl = $controller('MyNetworkCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MyNetworkCtrl.awesomeThings.length).toBe(3);
  });
});
