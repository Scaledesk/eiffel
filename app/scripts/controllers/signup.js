'use strict';

/**
 * @ngdoc function
 * @name eiffelApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the eiffelApp
 */
angular.module('eiffelApp')
  .controller('SignupCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
     $scope.signupSubmit =function() {



         var number =$scope.number;
         var password =$scope.password;
         var opt =$scope.opt;
        //   alert(number);
         /*console.log($scope);*/
         console.log(number);
         console.log(password);
         console.log(opt);
         $scope .addedClass="fold-up";
         $scope.successClass={'margin-top':'0px'};

    /* alert("nitesh");
         console.log("1534651565");*/
         /*return true;*/
     }
     /* $scope.signupSubmit1 =function($event) {
          console.log($event.keyCode);

          var number =$scope.number;
          var password =$scope.password;
          var opt =$scope.opt;

          /!*console.log($scope);*!/
          console.log(number);
          console.log(password);
          console.log(opt);
          alert(number);
          $scope .addedClass="fold-up";
          $scope.successClass={'margin-top':'0px'};



      }
*/
     /* alert($scope.number);*/
     /* console.log($scope.password);
      console.log($scope.opt);*/
  });
