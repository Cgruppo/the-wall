module.exports = function(app,model){

    var Posts = (function(){

        function init(){
            app.get('/posts',get);
            app.post('/posts',add);
        }

        function get(req,res){
            model.find({},function(err,doc){
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
            console.log(req.body);
            model.create(req.body,function(err,doc){
                if(err){
                    console.log(err);
                    return;
                }
                res.render('./tpl/view.html',doc);
                //res.json({success:true,result:doc});
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