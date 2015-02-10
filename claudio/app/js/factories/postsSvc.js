services.factory('PostSvc',[

    "$http",

    function($http){

        function getPost(callback){
            $http.get('http://localhost:8080/posts').success(function(response){
                callback(response.result);
            }).error(function(err){
                console.log(err);
            });
        }

        function addNew(post,callback){
            $http.post('http://localhost:8080/posts',post).success(function(response){
                callback(response.result);
            });
        }

        return {
            getPost:getPost,
            addNew:addNew
        }
    }]);