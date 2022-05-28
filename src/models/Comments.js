import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    text: { type: String, required: true },
    owner: { type: mongoose.Schema.Types.String, required: true, ref: "User" },
    post: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Post" },
    createdAt: { type: Date, required: true, default: Date.now, trim: true },
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment