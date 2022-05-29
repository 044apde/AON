import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    text: { type: String, required: true, minlength: 5 },
    createdAt: { type: Date, required: true, default: Date.now, trim: true },
    boardName: { type: String, required: true },
    meta: {
        views: { type: Number, default: 0, required: true },
        like: { type: Number, default: 0, required: true }
    },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    ownerId: { type: String, required: true },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

const Post = mongoose.model("Post", postSchema);

export default Post;