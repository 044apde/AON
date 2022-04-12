import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    postCode: {type: Number, required: true},
    title: {type: String, required: true, maxlength: 30},
    createdAt: {type: Date, required: true, default: Date.now, trim: true},
    writer: {type: Number, required: true, trim: true}
});

const Post = mongoose.model("User", postSchema);

export default Post; 