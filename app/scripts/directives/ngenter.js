'use strict';

/**
 * @ngdoc directive
 * @name eiffelApp.directive:ngEnter
 * @description
 * # ngEnter
 */
angular.module('eiffelApp')
  .directive('ngEnter', function () {

        return function (scope,element,attrs){
            element.bind("keydown keypress",function(event){
                if(event.which===13){
                    scope.$apply(function(){
                        scope.$eval(attrs.ngEnter);
                    });
                    event.preventDefault();
                }
            })
     /* template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the ngEnter directive');
      }*/
    };
  });
