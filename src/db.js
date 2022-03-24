import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/Test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ 2. Connect to DB 💪");
const handleError = () => console.log("❌ DB error", error);

db.on("error", handleError);
db.once("open", handleOpen);

