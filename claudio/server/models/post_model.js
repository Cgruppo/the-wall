
module.exports = function(mongoose){

    var postsSchema = new mongoose.Schema({
        title:{ type: String, required: true, index: true },
        content:{ type: String},
        comments:[{
            author:{ type: String},
            email:{ type: String},
            comment:{type: String}
        }],
        date:{type: Date}
    });

    return mongoose.model('posts',postsSchema, 'posts');
};