
'use strict';

/**
 * @ngdoc overview
 * @name eiffelApp
 * @description
 * # eiffelApp
 *
 * Main module of the application.
 */
angular
  .module('eiffelApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
     

.when('/login', {
  templateUrl: 'views/login.html',
  controller: 'LoginCtrl',
  controllerAs: 'login'
})
.when('/signup', {
  templateUrl: 'views/signup.html',
  controller: 'SignupCtrl',
  controllerAs: 'signup'
})
.otherwise({
        redirectTo: '/'
      });
  });
  

