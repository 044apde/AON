import express from "express";
import {home, login, join} from "../controllers/rootController"

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/login", login);
rootRouter.get("/join", join);

export default rootRouter;