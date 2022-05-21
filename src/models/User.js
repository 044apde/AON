import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: {type: String, required: true, maxlength: 18, unique: true},
    pwd1: {type: String, required: true, maxlength: 50},
    username: {type: String, required: true, unique: true},
    yy: {type: String, required: true, minlength: 4, maxlength: 4},
    mm: {type: String, required: true},
    dd: {type: String, required: true, minlength: 1, maxlength: 2},
    gender: {type: String, required: true},
    createdAt: {type: Date, required: true, default: Date.now, trim: true},
});

const User = mongoose.model("User", userSchema);

export default User;