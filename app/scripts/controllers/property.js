'use strict';

/**
 * @ngdoc function
 * @name eiffelApp.controller:PropertyCtrl
 * @description
 * # PropertyCtrl
 * Controller of the eiffelApp
 */
angular.module('eiffelApp')
  .controller('PropertyCtrl', function ($rootScope,$scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      var vm = $scope;
      vm.myInterval = 5000;
      vm.noWrapSlides = false;
      var slides = vm.slides = [];
      $scope.addSlide = function() {
          slides.push({
              image: '../assets/images/c' + slides.length + '.jpg',
              text: ['Carousel text #0','Carousel text #1','Carousel text #2','Carousel text #3'][slides.length % 4]
          });
      };
      for (var i=0; i<4; i++) {
          vm.addSlide();
      }
      $rootScope.headerShow = "dashboard";
  });
