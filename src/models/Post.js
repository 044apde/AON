import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    Title : {type: String, required: true},
    content: {type: String, required:true, minlength: 5},
    createdAt: {type: Date, required: true, default: Date.now, trim: true},
    meta: {
        views: {type: Number, default: 0, required: true},
        like: {type: Number, default: 0, required: true}
    },
});

const Post = mongoose.model("Post", postSchema);

export default Post;