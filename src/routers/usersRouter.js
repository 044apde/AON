import express from "express";
import {user, editUser} from "../controllers/usersController";

const usersRouter = express.Router();

// 유저 프로필 페이지 
usersRouter.get("/:id", user);
// 유저 프로필 수정 페이지 
usersRouter.get("/:id/editUser", editUser);

export default usersRouter;