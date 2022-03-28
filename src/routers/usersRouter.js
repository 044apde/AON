import express from "express";
import {editUser} from "../controllers/usersController";

const usersRouter = express.Router();

usersRouter.get("/:id/edit", editUser);

export default usersRouter;