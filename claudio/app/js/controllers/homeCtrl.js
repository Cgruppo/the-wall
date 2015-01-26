controllers.controller('HomeCtrl',[

    '$scope',
    'PostSvc',

    function($scope, PostSvc){
        var posts = [];
        $scope.menu = 'Get Posts';

        function getPosts(){

            if(posts.length > 0){
                $scope.posts = posts;
                return;
            }

            PostSvc.getPost(function(response){
                posts = response;
                console.log(response);
                $scope.posts = response;
            });
        }

        function clearPosts(){
            posts = [];
        }

        $scope.getPosts = getPosts;
    }]);