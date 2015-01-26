services.factory('PostSvc',[

    "$http",

    function($http){

        function getPost(callback){
            $http.get('http://localhost/posts').success(function(response){
                callback(response);
            }).error(function(err){
                console.log(err);
            });
        }

        return {
            getPost:getPost
        }
    }]);