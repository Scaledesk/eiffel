'use strict';

/**
 * @ngdoc function
 * @name eiffelApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the eiffelApp
 */
angular.module('eiffelApp')
  .controller('SearchCtrl', function ($rootScope,$scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      $rootScope.headerShow = "dashboard";
  });
