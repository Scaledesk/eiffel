'use strict';

/**
 * @ngdoc function
 * @name eiffelApp.controller:MyNetworkCtrl
 * @description
 * # MyNetworkCtrl
 * Controller of the eiffelApp
 */
angular.module('eiffelApp')
  .controller('MyNetworkCtrl', function ($rootScope,$scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      $rootScope.headerShow = "dashboard";
  });
