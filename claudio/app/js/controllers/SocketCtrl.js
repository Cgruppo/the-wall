controllers.controller('SocketCtrl',[
    '$scope',
    '$socket',
    function($scope, $socket){

        $scope.socket = {};
        $scope.socket.message = '';
        $scope.socket.messages = [];

        $scope.socket.sendMessage = function(){
            $socket.emit('user:message',{message:$scope.socket.message});
            $scope.socket.message = '';
        };

        $scope.socket.ack = function(){
            $socket.emit('user:ack',{message:$scope.socket.message},function(data){
                $scope.socket.messages.push(data);
                $scope.socket.message = '';
            })
        };

        $socket.on('user:message',function(data){
            $scope.socket.messages.push(data);
        });
    }]);