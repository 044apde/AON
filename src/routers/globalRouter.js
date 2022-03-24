import express from "express";
import {home} from "../controllers/boardController";

const globalRouter = express.Router();

globalRouter.get("/", home);

export default globalRouter;