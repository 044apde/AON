import express from "express";
import { mwmBoard } from "../controllers/mwmController";

const mwmRouter = express.Router();

mwmRouter.get("/", mwmBoard);

export default mwmRouter;