'use strict';

/**
 * @ngdoc function
 * @name eiffelApp.controller:ServiceCtrl
 * @description
 * # ServiceCtrl
 * Controller of the eiffelApp
 */
angular.module('eiffelApp')
  .controller('ServiceCtrl', function ($rootScope,$scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      $rootScope.headerShow = "dashboard";
  });
