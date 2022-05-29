import express from "express";
import { mwmboard, getcreateMwm, postcreateMwm, watchMwm } from "../controllers/boardController";

const mwmRouter = express.Router();

mwmRouter.route("/")
    .get(mwmboard);
mwmRouter.route("/create")
    .get(getcreateMwm)
    .post(postcreateMwm);
mwmRouter.route("/watch/:id")
    .get(watchMwm);

export default mwmRouter;