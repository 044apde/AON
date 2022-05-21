import express from "express";
import {home, getLogin, postLogin, getJoin, postJoin} from "../controllers/rootController"

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.route("/join").get(getJoin).post(postJoin);

export default rootRouter;