var Server = (function(){

    /**
     * Express package
     * @type {exports}
     */
    var express = require('express');

    /**
     * Parser package
     * @type {exports}
     */
    var bodyparser = require('body-parser');

    /**
     * Instance of express
     */
    var app = express();

    /**
     * Create a server for http and add express to it
     */
    var server = require('http').Server(app);

    /**
     * Instance socket.io with server
     */
    var io = require('socket.io')(server);

    /**
     * Configure of express middleware
     */
    app.use(bodyparser.urlencoded({limit: '50mb', extended: true, uploadDir:'./uploads'}));
    app.use(bodyparser.json({limit: '50mb'}));
    app.use('/',express.static('../app'));

    /**
     * Listen for socket and http
     */
    server.listen(8080);

    /**
     * Mongoose package
     * @type {exports}
     */
    var mongoose = require('mongoose');

    /**
     * Models
     * @type {{post}}
     */
    var models = {};
    models.post = require('./models/post_model.js')(mongoose);

    /**
     * Dependencies for each controller
     * @type {{app: *, models: {post}, mongoose: (*|exports)}}
     */
    var dependencies = {
        app:app,
        models:models,
        mongoose:mongoose,
        io:io
    };

    /**
     * A list of controllers
     * @type {{posts: (posts|exports)}}
     */
    var controllers = {
        posts:require('./controller/post.js')(dependencies),
        realTime:require('./controller/realTime.js')(dependencies)
    };

    function init(){
        connect();
    }

    function start(){
        controllers.posts.init();
    }

    function listeners(){
        io.on('connection',function(socket){
            controllers.realTime.on(socket);
        });
    }

    function connect(){
        mongoose.connect('mongodb://localhost:27017/theWall',{},function(err){
            start();
            listeners();
        });
    }

    return {
        init:init
    }

})();

Server.init();