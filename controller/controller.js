            var app=angular.module('app',['ngRoute']);
            app.config(function($routeProvider){
                  $routeProvider
                      .when('/',{
                            templateUrl: 'views/home-index.html'
                      })
                      .when('/about',{
                            templateUrl: 'views/about-index.html'
                      })
                      .when('/Q&A',{
                          templateUrl: 'views/Q&A-index.html'
                      })
                      .when('/downloads',{
                          templateUrl: 'views/downloads-index.html'
                      })
                      .when('/play',{
                          templateUrl: 'views/play-index.html'
                      })                      
                      ;
            });
            app.controller('controller',function($scope){
            
                /*      
                Here you can handle controller for specific route as well.
                */
            });  