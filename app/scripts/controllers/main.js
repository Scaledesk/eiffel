'use strict';

/**
 * @ngdoc function
 * @name eiffelApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the eiffelApp
 */
angular.module('eiffelApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      $scope.headerShow="login";
  });
