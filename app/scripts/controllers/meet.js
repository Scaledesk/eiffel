'use strict';

/**
 * @ngdoc function
 * @name eiffelApp.controller:MeetCtrl
 * @description
 * # MeetCtrl
 * Controller of the eiffelApp
 */
angular.module('eiffelApp')
  .controller('MeetCtrl', function ($rootScope,$scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      $rootScope.headerShow = "dashboard";
  });
