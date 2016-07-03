'use strict';

var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', { url: '/', templateUrl: '/html/home.html' })

    $urlRouterProvider.otherwise('/');
});




  // let menuView = {
  //   templateUrl: '/html/menu.html',
  //   controller: 'menuCtrl'
  // };

  // $stateProvider
  //   .state('home', {
  //     url: '/',
  //     views: {
  //       left: {
  //         templateUrl: '/html/home.html',
  //         controller: 'homeCtrl'
  //       },
  //       right: menuView
  //     }
  //   })
    // .state('contact', {
    //   url: '/contact',
    //   views: {
    //     left: {
    //       templateUrl: '/html/contact.html',
    //       controller: 'contactCtrl'
    //     },
    //     right: menuView
    //   }
    // })
    // .state('contact.list', {
    //   url: '/list',
    //   templateUrl: '/html/list.html'
    // })
    // .state('contact.list.friends', {
    //   url: '/friends',
    //   templateUrl: '/html/friends.html'
    // })

//   $urlRouterProvider.otherwise('/');
// });