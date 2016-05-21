'use strict';

/**
 * @ngdoc function
 * @name eiffelApp.controller:MyOfficeCtrl
 * @description
 * # MyOfficeCtrl
 * Controller of the eiffelApp
 */
angular.module('eiffelApp')
  .controller('MyOfficeCtrl', function ($rootScope,$scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      $rootScope.headerShow = "dashboard";
  });
