'use strict';

describe('Controller: MeetStreamGetDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('eiffelApp'));

  var MeetStreamGetDetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MeetStreamGetDetailsCtrl = $controller('MeetStreamGetDetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MeetStreamGetDetailsCtrl.awesomeThings.length).toBe(3);
  });
});
