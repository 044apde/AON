import express from "express";
import {generalBoard} from "../controllers/boardController";

const boardRouter = express.Router();

boardRouter.get("/", generalBoard);

export default boardRouter;