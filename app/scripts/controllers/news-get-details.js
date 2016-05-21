'use strict';

/**
 * @ngdoc function
 * @name eiffelApp.controller:NewsGetDetailsCtrl
 * @description
 * # NewsGetDetailsCtrl
 * Controller of the eiffelApp
 */
angular.module('eiffelApp')
  .controller('NewsGetDetailsCtrl', function ($rootScope,$scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      $rootScope.headerShow = "dashboard";
  });
