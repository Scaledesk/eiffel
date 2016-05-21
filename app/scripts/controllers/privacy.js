'use strict';

/**
 * @ngdoc function
 * @name eiffelApp.controller:PrivacyCtrl
 * @description
 * # PrivacyCtrl
 * Controller of the eiffelApp
 */
angular.module('eiffelApp')
  .controller('PrivacyCtrl', function ($rootScope,$scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      $rootScope.headerShow = "dashboard";
  });
