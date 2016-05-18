'use strict';

describe('Controller: QAGetDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('eiffelApp'));

  var QAGetDetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QAGetDetailsCtrl = $controller('QAGetDetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(QAGetDetailsCtrl.awesomeThings.length).toBe(3);
  });
});
