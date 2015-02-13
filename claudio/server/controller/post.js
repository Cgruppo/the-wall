module.exports = function(dep){

    var Posts = (function(){

        function init(){
            dep.app.get('/posts',get);
            dep.app.post('/posts',add);
        }

        function get(req,res){
            dep.models.post.find({},function(err,doc){
                if(err){
                    return;
                }
                var results = [];
                doc.forEach(function(item){
                    item.date = new Date();
                    results.push(item);
                });

                res.json({success:true,result:results});
            });
        }

        function add(req,res){
            dep.models.post.create(req.body,function(err,doc){
                if(err){
                    console.log(err);
                    return;
                }
                res.json({success:true,result:doc});
            });
        }

        return {
            get:get,
            add:add,
            init:init
        }

    })();

    return Posts;
};