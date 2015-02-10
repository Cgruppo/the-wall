var Server = (function(){

    var express = require('express');
    var bodyparser = require('body-parser');
    var app = express();
    app.use(bodyparser.urlencoded({limit: '50mb', extended: true, uploadDir:'./uploads'}));
    app.use(bodyparser.json({limit: '50mb'}));
    app.use('/',express.static('../app'));
    app.listen(8080);

    var mongoose = require('mongoose');
    var models = {};
    models.post = require('./models/post_model.js')(mongoose);

    function init(){
        connect();
    }

    function start(){
        var postCtrl = require('./controller/post.js')(app,models.post);
        postCtrl.init();
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