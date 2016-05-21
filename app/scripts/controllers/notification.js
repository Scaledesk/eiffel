'use strict';

/**
 * @ngdoc function
 * @name eiffelApp.controller:NotificationCtrl
 * @description
 * # NotificationCtrl
 * Controller of the eiffelApp
 */
angular.module('eiffelApp')
  .controller('NotificationCtrl', function ($rootScope,$scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      $rootScope.headerShow = "dashboard";
  });
