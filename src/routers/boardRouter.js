import express from "express";
import { moveToSpecificBoard, getPost, postPost, getWatch } from "../controllers/boardController";
import { boardNameMiddleware } from "../middlewares";

const boardRouter = express.Router();

boardRouter.use(boardNameMiddleware);

boardRouter.route("/:boardName")
    .get(moveToSpecificBoard);
boardRouter.route("/:boardName/post")
    .get(getPost)
    .post(postPost);
boardRouter.route("/:boardName/:_id").get(getWatch);

export default boardRouter;

// 갯 워치 컨트롤러 만들기