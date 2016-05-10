'use strict';

/**
 * @ngdoc function
 * @name eiffelApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the eiffelApp
 */
angular.module('eiffelApp')
  .controller('LoginCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     $scope.example = {
        value: 12
    }
    
  });
