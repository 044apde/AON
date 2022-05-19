import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";

const app = express(); 
const logger = morgan("dev");

app.use(express.static('src/views'));

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.disable("x-powered-by");

app.use(logger);
app.use(express.urlencoded({extended: true}));

app.use("/", rootRouter);


export default app;