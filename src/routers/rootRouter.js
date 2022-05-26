import express from "express";
import { home, getLogin, postLogin, getJoin, postJoin, logout } from "../controllers/rootController"
import { boardNameMiddleware } from "../middlewares";

const rootRouter = express.Router();

rootRouter.route("/")
    .get(home);
rootRouter.route("/login")
    .get(getLogin)
    .post(postLogin);
rootRouter.route("/join")
    .get(getJoin)
    .post(postJoin);
rootRouter.route("/logout")
    .get(logout)

export default rootRouter;