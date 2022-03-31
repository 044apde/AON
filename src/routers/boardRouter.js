import express from "express";
import {watcthBoard, watchContent, upload} from "../controllers/boardController";

const boardRouter = express.Router();

// 각 게시판 페이지 
boardRouter.get("/:board", watcthBoard);
// 직접 게시판 글을 보는 페이지 
boardRouter.get("/:board/:no", watchContent);
// 글을 작성하는 페이지 
// ++ POST 컨트롤러도 만들어야 함. 
boardRouter.get("/:board/upload", upload);


export default boardRouter;