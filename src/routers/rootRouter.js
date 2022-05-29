import express from "express";
import { home, getLogin, postLogin, getJoin, postJoin, logout, searchPost } from "../controllers/rootController"
import { mwmboard } from "../controllers/boardController";
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
    .get(logout);
rootRouter.route("/search")
    .get(searchPost);
rootRouter.route("/mwm")
    .get(mwmboard);

export default rootRouter;