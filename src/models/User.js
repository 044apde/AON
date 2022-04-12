import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userCode: {type:Number, required: true, trim:true, maxlength:20},
    name: {type: String, required: true, trim: true, maxlength: 20},
    ID: {type: String, required: true, trim:true, maxlength: 20},
    password: {type: String, required: true, trim: true, maxlength: 30},
    phoneNumber: {type: Number, required: true, trim: true, maxlength: 15},
    email: {type: String, required: true, trim:true, maxlength: 40},
    department: {type: String, trim:true, maxlength: 50},
    studentID: {type: Number, trim:true, maxlength: 20},
    type: {type: String, required: true , trim: true}
});

const User = mongoose.model("User", userSchema);

export default User; 