import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import boardRouter from "./routers/boardRouter";
import usersRouter from "./routers/usersRouter";

const app = express(); 
const logger = morgan("dev");

app.use(express.static('src/views'));

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.disable("x-powered-by");

app.use(logger);
app.use(express.urlencoded({extended: true}));

app.use("/", globalRouter);
app.use("/boards", boardRouter);
app.use("/users", usersRouter);


export default app;   