'use strict';

/**
 * @ngdoc function
 * @name eiffelApp.controller:MoneyCtrl
 * @description
 * # MoneyCtrl
 * Controller of the eiffelApp
 */
angular.module('eiffelApp')
  .controller('MoneyCtrl', function ($rootScope,$scope) {
      //accordian start
          $scope.oneAtATime = true;
          $scope.groups = [
              {
                  title: 'Feeds',
                  content: 'Newest'
              },
              {
                  title: 'My Network',
                  content: ''
              }
          ];

          $scope.items = ['Item 1', 'Item 2', 'Item 3'];

          $scope.addItem = function() {
              var newItemNo = $scope.items.length + 1;
              $scope.items.push('Item ' + newItemNo);
          };

          $scope.status = {
              isFirstOpen: true,
              isFirstDisabled: false
          };
      //accordian end
      //tooltip start
      $scope.demo = {
          showTooltip : true,
          tipDirection : 'bottom'
      };
      $scope.$watch('demo.tipDirection',function(val) {
          if (val && val.length ) {
              $scope.demo.showTooltip = true;
          }
      })
      //tooltip end
      

      $rootScope.headerShow = "dashboard";

  });
