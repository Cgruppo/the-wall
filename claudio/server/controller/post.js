module.exports = function(model){

    var Posts = (function(){

        function get(callback){
            model.findByIdAndUpdate("54cbe1c19c9959c004e8fbae",{title:"Hola 2 y medio"},function(err,doc){
                if(err){
                    console.log(err);
                    return;
                }
                callback(doc);
            });
        }

        function add(callback){

            model.create({title:"hola 2",content:"MI post 2"},function(err,doc){
                if(err){
                    console.log(err);
                    return;
                }
                callback(doc);
            });
        }

        return {
            get:get,
            add:add
        }

    })();

    return Posts;
};