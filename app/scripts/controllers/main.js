'use strict';

/**
 * @ngdoc function
 * @name eiffelApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the eiffelApp
 */
angular.module('eiffelApp')
  .controller('MainCtrl', function ($scope,$rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      $rootScope.headerShow="login";
     /* $rootScope.headerShow = "dashboard";*/
  });
