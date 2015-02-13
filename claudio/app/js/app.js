
var app = angular.module('theWall',[
    'ngRoute',
    'theWall.environment',
    'theWall.controllers',
    'theWall.services'
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider

            .when('/home', {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            })

            .when('/socket', {
                templateUrl: 'templates/socket.html',
                controller: 'SocketCtrl'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }]);

var controllers = angular.module('theWall.controllers',[]);
var services = angular.module('theWall.services',[]);