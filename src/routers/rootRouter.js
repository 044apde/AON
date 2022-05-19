import express from "express";
import {home} from "../controllers/rootController"
import { login } from "../controllers/rootController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/login", login);

export default rootRouter;