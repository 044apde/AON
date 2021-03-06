import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    userid: { required: true, type: String, maxlength: 18, unique: true },
    pwd: { required: true, type: String },
    username: { required: true, type: String },
    yy: { required: true, type: String, maxlength: 4, minlength: 2 },
    mm: { required: true, type: String, maxlength: 2, minlength: 1 },
    dd: { required: true, type: String, maxlength: 2, minlength: 1 },
    gender: { required: true, type: String, maxlength: 5 },
    grade: { required: true, type: String, default: "μΌλ°νμ" },
    createdAt: { type: Date, required: true, default: Date.now, trim: true },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});

userSchema.pre("save", async function() {
    this.pwd = await bcrypt.hash(this.pwd, 5);
});

const User = mongoose.model("User", userSchema);

export default User;