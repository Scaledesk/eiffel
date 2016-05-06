
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

.when('/money', {
  templateUrl: 'views/money.html',
  controller: 'MoneyCtrl',
  controllerAs: 'money'
})
.when('/property', {
  templateUrl: 'views/property.html',
  controller: 'PropertyCtrl',
  controllerAs: 'property'
})
.when('/service', {
  templateUrl: 'views/service.html',
  controller: 'ServiceCtrl',
  controllerAs: 'service'
})
.when('/news', {
  templateUrl: 'views/news.html',
  controller: 'NewsCtrl',
  controllerAs: 'news'
})
.when('/q', {
  templateUrl: 'views/q.html',
  controller: 'QCtrl',
  controllerAs: 'q'
})
.when('/meet', {
  templateUrl: 'views/meet.html',
  controller: 'MeetCtrl',
  controllerAs: 'meet'
})
.otherwise({
        redirectTo: '/'
      });
  });
  

