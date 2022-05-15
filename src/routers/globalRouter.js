import express from "express";
import {home} from "../controllers/boardController";
import {getJoin, postJoin, login} from "../controllers/usersController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.route("/join").get(getJoin).post(postJoin)
globalRouter.get("/login", login);

export default globalRouter;