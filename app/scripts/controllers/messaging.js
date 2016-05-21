'use strict';

/**
 * @ngdoc function
 * @name eiffelApp.controller:MessagingCtrl
 * @description
 * # MessagingCtrl
 * Controller of the eiffelApp
 */
angular.module('eiffelApp')
  .controller('MessagingCtrl', function ($rootScope,$scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      $rootScope.headerShow = "dashboard";
  });
