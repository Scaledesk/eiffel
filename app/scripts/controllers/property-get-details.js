'use strict';

/**
 * @ngdoc function
 * @name eiffelApp.controller:PropertyGetDetailsCtrl
 * @description
 * # PropertyGetDetailsCtrl
 * Controller of the eiffelApp
 */
angular.module('eiffelApp')
  .controller('PropertyGetDetailsCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      $scope.tags = [
          { text: 'just' },
          { text: 'some' },
          { text: 'cool' },
          { text: 'tags' }
      ];
      $scope.loadTags = function(query) {
          return $http.get('/tags?query=' + query);
      };
  });
