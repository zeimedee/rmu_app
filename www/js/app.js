// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','starter.controllers','starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/sidemenu.html",
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: "/home",
    views: {
      'menuContent': {
        templateUrl: "templates/sidemenu/home.html"
      }
    }
  })


  .state('app.news', {
    url: "/news",
    views: {
      'menuContent': {
        templateUrl: "templates/sidemenu/news.html",
        controller: 'newsCtrl'
      }
    }
  })

    .state('app.newsdetails', {
    url: "/news/:newsdetailId",
    views: {
      'menuContent': {
        templateUrl: "templates/sidemenu/newsdetails.html",
        controller: 'detailCtrl'
      }
    }
  })

  .state('app.about', {
    url: "/about",
    views: {
      'menuContent': {
        templateUrl: "templates/sidemenu/about.html"
      }
    }
  })

  .state('app.maritime',{
    url:"/maritime",
    views:{
      'menuContent':{
        templateUrl: "templates/sidemenu/maritime.html",
        controller: 'maritimeCtrl'
      }
    }
  })

  .state('app.study',{
    url:"/study",
    views:{
      'menuContent':{
        templateUrl: "templates/sidemenu/study.html"
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
