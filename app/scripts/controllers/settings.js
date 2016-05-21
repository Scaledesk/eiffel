'use strict';

/**
 * @ngdoc function
 * @name eiffelApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the eiffelApp
 */
angular.module('eiffelApp')
  .controller('SettingsCtrl', function ($rootScope,$scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      $rootScope.headerShow = "dashboard";
  });
