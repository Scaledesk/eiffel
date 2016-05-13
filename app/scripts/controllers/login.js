'use strict';

/**
 * @ngdoc function
 * @name eiffelApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the eiffelApp
 */
angular.module('eiffelApp')
  .controller('LoginCtrl', function ($scope,$rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

      $scope.example = {
        value: 12
    }
      // $scope.headerShow="dashboard";
      $rootScope.headerShow = "dashboard";
  });
