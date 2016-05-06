'use strict';

describe('Controller: QCtrl', function () {

  // load the controller's module
  beforeEach(module('eiffelApp'));

  var QCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QCtrl = $controller('QCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(QCtrl.awesomeThings.length).toBe(3);
  });
});
