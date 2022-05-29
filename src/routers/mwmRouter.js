import express from "express";
import { mwmboard, getcreateMwm, postcreateMwm } from "../controllers/boardController";

const mwmRouter = express.Router();

mwmRouter.route("/")
    .get(mwmboard);
mwmRouter.route("/create")
    .get(getcreateMwm)
    .post(postcreateMwm);

export default mwmRouter;