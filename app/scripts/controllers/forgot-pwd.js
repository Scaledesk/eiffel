'use strict';

/**
 * @ngdoc function
 * @name eiffelApp.controller:ForgotPwdCtrl
 * @description
 * # ForgotPwdCtrl
 * Controller of the eiffelApp
 */
angular.module('eiffelApp')
  .controller('ForgotPwdCtrl', function ($rootScope,$scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      $rootScope.headerShow = "dashboard";
  });
