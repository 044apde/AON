import express from "express";
import { getProfile, editPwd } from "../controllers/userController";
import { protectorMiddleware, publicOnlyMiddleware } from "../middlewares";

const userRouter = express.Router();

userRouter.route("/proflie")
    .get(protectorMiddleware, getProfile);

export default userRouter;