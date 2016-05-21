'use strict';

/**
 * @ngdoc function
 * @name eiffelApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the eiffelApp
 */
angular.module('eiffelApp')
  .controller('NewsCtrl', function ($rootScope,$scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      $rootScope.headerShow = "dashboard";
  });
