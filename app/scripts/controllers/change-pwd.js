'use strict';

/**
 * @ngdoc function
 * @name eiffelApp.controller:ChangePwdCtrl
 * @description
 * # ChangePwdCtrl
 * Controller of the eiffelApp
 */
angular.module('eiffelApp')
  .controller('ChangePwdCtrl', function ($rootScope,$scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      $rootScope.headerShow = "dashboard";
  });
