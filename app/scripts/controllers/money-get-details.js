'use strict';

/**
 * @ngdoc function
 * @name eiffelApp.controller:MoneyGetDetailsCtrl
 * @description
 * # MoneyGetDetailsCtrl
 * Controller of the eiffelApp
 */
angular.module('eiffelApp')
  .controller('MoneyGetDetailsCtrl', function ($scope,$rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      $rootScope.headerShow = "dashboard";
      $scope.data = {
          group : ''
                  };
  });

    $('[data-toggle="popover"]').popover();