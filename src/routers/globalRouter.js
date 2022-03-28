import express from "express";
import {home} from "../controllers/boardController";
import {join, login} from "../controllers/usersController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;