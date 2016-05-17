
'use strict';

/**
 * @ngdoc overview
 * @name eiffelApp
 * @description
 * # eiffelApp
 *
 * Main module of the application. ,'ui.select', 'ngSanitize'
 */
angular
  .module('eiffelApp', ['ngRoute','ngMaterial','ui.bootstrap','ngAnimate','ngTouch','slick'])
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
        .when('/property-get-details', {
          templateUrl: 'views/property-get-details.html',
          controller: 'PropertyGetDetailsCtrl',
          controllerAs: 'property-get-details'
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
.when('/forgot-pwd', {
  templateUrl: 'views/forgot-pwd.html',
  controller: 'ForgotPwdCtrl',
  controllerAs: 'forgotPwd'
})
.when('/profile', {
  templateUrl: 'views/profile.html',
  controller: 'ProfileCtrl',
  controllerAs: 'profile'
})
.when('/my-office', {
  templateUrl: 'views/my-office.html',
  controller: 'MyOfficeCtrl',
  controllerAs: 'myOffice'
})
.when('/settings', {
  templateUrl: 'views/settings.html',
  controller: 'SettingsCtrl',
  controllerAs: 'settings'
})
.when('/change-pwd', {
  templateUrl: 'views/change-pwd.html',
  controller: 'ChangePwdCtrl',
  controllerAs: 'changePwd'
})
.when('/search', {
  templateUrl: 'views/search.html',
  controller: 'SearchCtrl',
  controllerAs: 'search'
})
.when('/messaging', {
  templateUrl: 'views/messaging.html',
  controller: 'MessagingCtrl',
  controllerAs: 'messaging'
})
.when('/notification', {
  templateUrl: 'views/notification.html',
  controller: 'NotificationCtrl',
  controllerAs: 'notification'
})
.when('/privacy', {
  templateUrl: 'views/privacy.html',
  controller: 'PrivacyCtrl',
  controllerAs: 'privacy'
})
.when('/my-network', {
  templateUrl: 'views/my-network.html',
  controller: 'MyNetworkCtrl',
  controllerAs: 'myNetwork'
})
.when('/dashboard', {
  templateUrl: 'views/dashboard.html',
  controller: 'DashboardCtrl',
  controllerAs: 'dashboard'
})
.when('/money-get-details', {
  templateUrl: 'views/money-get-details.html',
  controller: 'MoneyGetDetailsCtrl',
  controllerAs: 'moneyGetDetails'
})
.otherwise({
        redirectTo: '/'
      });

  })
    .run(function($rootScope) {
  $rootScope.headerShow = "login";

});



 /*   .require.config({
  paths: {
    'angular': 'bower_components/angular/angular',
    'angular-ui-select': 'bower_components/angular-ui-select/dist/select'
  },
  shim: {
    'angular-ui-select': ['angular']
  }
})*/
  


