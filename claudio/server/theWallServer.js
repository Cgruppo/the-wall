//var express = require('express');
//var app = express();
//app.use('/',express.static('../app'));
//app.listen(80);
//
//app.get('/posts',function(req,res){
//    var posts = [{name:"Primer Post"},{name:"Segundo Post"}];
//    res.json(posts);
//});

var Server = (function(){

    var mongoose = require('mongoose');
    var models = {};
    models.post = require('./models/post_model.js')(mongoose);

    function init(){
        connect();
    }

    function start(){
        var postCtrl = require('./controller/post.js')(models.post);
        postCtrl.get(function(res){
            console.log(res);
        });
    }

    function connect(){
        mongoose.connect('mongodb://localhost:27017/theWall',{},function(err){
            start();
        });
    }

    return {
        init:init
    }

})();

Server.init();