'use strict';

/**
 * @ngdoc function
 * @name eiffelApp.controller:QCtrl
 * @description
 * # QCtrl
 * Controller of the eiffelApp
 */
angular.module('eiffelApp')
  .controller('QCtrl', function ($rootScope,$scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      $rootScope.headerShow = "dashboard";
  });
