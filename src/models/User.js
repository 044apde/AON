import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    id: { required: true, type: String, maxlength: 18, unique: true },
    pwd: { required: true, type: String },
    username: { required: true, type: String },
    yy: { required: true, type: String, maxlength: 4, minlength: 2 },
    mm: { required: true, type: String, maxlength: 2, minlength: 1 },
    dd: { required: true, type: String, maxlength: 2, minlength: 1 },
    gender: { required: true, type: String, maxlength: 5 },
    createdAt: { type: Date, required: true, default: Date.now, trim: true },
});

userSchema.pre("save", async function () {
    this.pwd = await bcrypt.hash(this.pwd, 5);
});

const User = mongoose.model("User", userSchema);

export default User;
