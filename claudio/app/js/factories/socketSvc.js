services.factory('$socket', [
    '$rootScope',
    'ENV',
    function($rootScope, ENV) {

        var socket = (io)?io.connect(ENV.socket):'';

        function on(eventName, callback){
            socket.on(eventName, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    callback.apply(socket, args);
                });
            });
        }

        function emit(eventName, data, callback){
            //socket.emit(eventName, data);
            socket.emit(eventName, data, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    callback.apply(socket, args);
                });
            });
        }

        return {
            on: on,
            emit: emit,
            socket:socket
        };

    }]);