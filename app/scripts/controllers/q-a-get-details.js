'use strict';

/**
 * @ngdoc function
 * @name eiffelApp.controller:QAGetDetailsCtrl
 * @description
 * # QAGetDetailsCtrl
 * Controller of the eiffelApp
 */
angular.module('eiffelApp')
  .controller('QAGetDetailsCtrl', function ($rootScope,$scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
        
    ];
      var _this=this;
      $rootScope.headerShow = "dashboard";
      _this.submit=function (){
          // Set the 'submitted' flag to true
          $scope.submitted = true;



          }
  });
