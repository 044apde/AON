import express from "express";
import { moveToSpecificBoard, getPost, postPost, getWatch, deletePost } from "../controllers/boardController";
import { boardMiddleware, localsMiddleware } from "../middlewares";

const boardRouter = express.Router();

boardRouter.use(boardMiddleware);
boardRouter.use(localsMiddleware);

boardRouter.route("/:boardName")
    .get(moveToSpecificBoard);
boardRouter.route("/:boardName/post")
    .get(getPost)
    .post(postPost);
boardRouter.route("/:boardName/:_id")
    .get(getWatch);
boardRouter.route("/:boardName/:_id/delete")
    .get(deletePost);

export default boardRouter;

// 갯 워치 컨트롤러 만들기