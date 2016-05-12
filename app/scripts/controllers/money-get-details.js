'use strict';

/**
 * @ngdoc function
 * @name eiffelApp.controller:MoneyGetDetailsCtrl
 * @description
 * # MoneyGetDetailsCtrl
 * Controller of the eiffelApp
 */
angular.module('eiffelApp')
  .controller('MoneyGetDetailsCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

      $scope.data = {
          group : ''
                  };
  });
