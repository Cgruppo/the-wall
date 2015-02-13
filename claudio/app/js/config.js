var environment = angular.module('theWall.environment', []);

//Http Environment
environment.constant('ENV',{
    'socket':'http://localhost:8080',
    'http':'http://localhost:8080'
});

//Google Maps API Key
environment.constant('GMAPS_API_KEY', 'AIzaSyCPfkHYJtXYXb7i7A5zc9-_IjtoJ9477ww');