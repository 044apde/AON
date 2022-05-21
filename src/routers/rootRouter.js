import express from "express";
import {home, login, getJoin, postJoin} from "../controllers/rootController"

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/login", login);
rootRouter.route("/join").get(getJoin).post(postJoin);

export default rootRouter;