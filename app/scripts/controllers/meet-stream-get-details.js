'use strict';

/**
 * @ngdoc function
 * @name eiffelApp.controller:MeetStreamGetDetailsCtrl
 * @description
 * # MeetStreamGetDetailsCtrl
 * Controller of the eiffelApp
 */
angular.module('eiffelApp')
  .controller('MeetStreamGetDetailsCtrl', function ($rootScope,$scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      var _this=this;
      $rootScope.headerShow = "dashboard";

      $scope.myDate = new Date();
      $scope.minDate = new Date(
          $scope.myDate.getFullYear(),
          $scope.myDate.getMonth() - 2,
          $scope.myDate.getDate());
      $scope.maxDate = new Date(
          $scope.myDate.getFullYear(),
          $scope.myDate.getMonth() + 2,
          $scope.myDate.getDate());
      $scope.onlyWeekendsPredicate = function(date) {
          var day = date.getDay();
          return day === 0 || day === 6;
      }

      _this.submit=function () {

      }

  });
