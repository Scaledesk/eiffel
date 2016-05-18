'use strict';

/**
 * @ngdoc function
 * @name eiffelApp.controller:ServiceGetDetailsCtrl
 * @description
 * # ServiceGetDetailsCtrl
 * Controller of the eiffelApp
 */
angular.module('eiffelApp')
  .controller('ServiceGetDetailsCtrl', function ($scope,$rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      $rootScope.headerShow = "dashboard";
  });
