import express from "express";

const boardRouter = express.Router();

boardRouter.get("/freeBoard", freeBoard);

export default boardRouter;