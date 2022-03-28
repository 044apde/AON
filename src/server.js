import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import boardRouter from "./routers/boardRouter";
import usersRouter from "./routers/usersRouter";
import scheduleRouter from "./routers/scheduleRouter";

const app = express(); 
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.disable("x-powered-by");

app.use(logger);
app.use(express.urlencoded({extended: true}));

app.use("/", globalRouter);
app.use("/boards", boardRouter);
app.use("/users", usersRouter); 
app.use("/schedule", scheduleRouter);

export default app;

