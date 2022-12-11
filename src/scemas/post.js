const mongooose = require('mongoose');
const ObjectId = mongooose.Schema.ObjectId;
const postSchema = new mongooose.Schema({
    // Your code goes here
   title: {type : String,required:true},
    body:{type : String,required:true},
    image: {type : String,required:true},
    user: {type : ObjectId, ref: "User"}
,
})

const Post = mongooose.model('posts', postSchema);
module.exports = Post;