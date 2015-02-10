controllers.controller('HomeCtrl',[

    '$scope',
    'PostSvc',

    function($scope, PostSvc){

        $scope.post = {};
        $scope.post.menu = 'Get Posts';
        $scope.post.posts = [];
        $scope.post.add = {};
        $scope.post.add.date = new Date();

        PostSvc.getPost(function(response){
            console.log(response);
            $scope.post.posts = response;
        });

        $scope.addNew = function(){
            $scope.post.posts.push($scope.post.add);
            PostSvc.addNew($scope.post.add,function(response){

            });
        };

    }]);