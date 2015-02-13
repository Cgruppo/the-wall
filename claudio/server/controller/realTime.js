module.exports = function(dep){

    var RealTime = (function(){

        function on(socket){
            socket.on('user:message',function(data,fn){
                dep.io.emit('user:message',data);
            });
            socket.on('user:ack',function(data,fn){
                fn(data);
            });
        }

        return {
            on:on
        }

    })();

    return RealTime;
};