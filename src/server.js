import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import boardRouter from "./routers/boardRouter";
import apiRouter from "./routers/apiRouter";
import { localsMiddleware, protectorMiddleware } from "./middlewares";

const app = express();
const logger = morgan("dev");

app.use(express.static('src/views'));
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.disable("x-powered-by");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
    })
);
app.use((req, res, next) => {
    req.sessionStore.all((error, sessions) => {
        next();
    });
});

app.use("/static", express.static("assets"));
app.use("/images", express.static("images"));
app.use("/favicon", express.static("favicon.ico"));
app.use("/css", express.static("css"));
app.use("/js", express.static("js"));
app.use(localsMiddleware);
app.use(protectorMiddleware)
app.use("/", rootRouter);
app.use("/user", userRouter);
app.use("/board", boardRouter);
app.use("/api", apiRouter);

export default app;