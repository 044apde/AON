import express from "express";
import { createComment } from "../controllers/boardController";

const apiRouter = express.Router();

apiRouter.post("/board/:id/comment", createComment);

export default apiRouter;