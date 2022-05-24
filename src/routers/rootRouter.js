import express from "express";
import { home, getLogin, postLogin, getJoin, postJoin, logout } from "../controllers/rootController"
import { protectorMiddleware, publicOnlyMiddleware } from "../middlewares";
import app from "../server";

const rootRouter = express.Router();

rootRouter.route("/")
    .get(protectorMiddleware, home);
rootRouter.route("/login")
    .get(protectorMiddleware, getLogin)
    .post(protectorMiddleware, postLogin);
rootRouter.route("/join")
    .get(protectorMiddleware, getJoin)
    .post(protectorMiddleware, postJoin);
rootRouter.route("/logout")
    .get(protectorMiddleware, logout)

export default rootRouter;