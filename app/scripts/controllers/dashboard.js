'use strict';

/**
 * @ngdoc function
 * @name eiffelApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the eiffelApp
 */
angular.module('eiffelApp')
  .controller('DashboardCtrl', function ($scope,$rootScope,$location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      $rootScope.headerShow = "dashboard";
  });
