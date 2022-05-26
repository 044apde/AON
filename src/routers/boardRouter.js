import express from "express";
import { moveToSpecificBoard, getPost, postPost } from "../controllers/boardController";
import { boardNameMiddleware } from "../middlewares";

const boardRouter = express.Router();

boardRouter.use(boardNameMiddleware);

boardRouter.route("/:boardName")
    .get(moveToSpecificBoard);
boardRouter.route("/:boardName/post")
    .get(getPost)
    .post(postPost);

export default boardRouter;