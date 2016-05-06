'use strict';

describe('Controller: MeetCtrl', function () {

  // load the controller's module
  beforeEach(module('eiffelApp'));

  var MeetCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MeetCtrl = $controller('MeetCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MeetCtrl.awesomeThings.length).toBe(3);
  });
});
