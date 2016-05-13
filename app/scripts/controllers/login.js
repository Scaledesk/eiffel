'use strict';

/**
 * @ngdoc function
 * @name eiffelApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the eiffelApp
 */
angular.module('eiffelApp')
  .controller('LoginCtrl', function ($scope,$rootScope,$location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     /* $scope.example = {
        value: 12
    }*/
      $rootScope.headerShow = "login";

      $scope.loginSubmit =function() {
          // $scope.headerShow="dashboard";
       //alert(567981);
              /*  console.log('dbhsvhdcgvshdcgsdc');*/
          $location.path('/dashboard/');
          /*window.location('#/dashboard');*/
      }

  });
