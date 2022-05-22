import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
const logger = morgan("dev");

app.use(express.static('src/views'));
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.disable("x-powered-by");
app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        secret: "session secret value",
        resave: true,
        saveUninitialized: true,
        store: MongoStore.create({mongoUrl: "mongodb://127.0.0.1:27017/MWM"}),
    })
);

app.use((req, res, next) => {
    req.sessionStore.all((error, sessions) => {
        next();
    });
});

app.use(localsMiddleware);
app.use("/", rootRouter);

export default app;