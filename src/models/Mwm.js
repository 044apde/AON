import mongoose from "mongoose";

const MwmSchema = new mongoose.Schema({
    postCode: {type: Number, required: true},
    title: {type: String, required: true, maxlength: 30},
    createdAt: {type: Date, required: true, default: Date.now, trim: true},
    writer: {type: Number, required: true, trim: true},
    reserved: {type: Boolean, required: true, default: false},
    like: {type: Number, required: true, default: 0}
});

const Mwm = mongoose.model("User", MwmSchema);

export default Mwm; 