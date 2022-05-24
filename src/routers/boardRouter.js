import express from "express";
import { moveToSpecificBoard, getPost, postPost } from "../controllers/boardController";

const boardRouter = express.Router();

boardRouter.get("/:boardName", moveToSpecificBoard);
boardRouter.route("/:board/post").get(getPost).post(postPost);

export default boardRouter;