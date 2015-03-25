angular.module('AngularRails',['ngRoute','templates'])
.config(function($routeProvider,$locationProvider){
  $routeProvider
    .when('/',{
    templateUrl: 'home/index.html',
    controller: 'HomeCtrl'
    });
    
}); 