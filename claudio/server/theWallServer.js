var express = require('express');
var app = express();
app.use('/',express.static('../app'));
app.listen(80);

app.get('/posts',function(req,res){
    var posts = [{name:"Primer Post"},{name:"Segundo Post"}];
    res.json(posts);
});
