import "./db";
import app from "./server";

const PORT = 4000; 

const handleListening = () => console.log(`✅ 1. Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);