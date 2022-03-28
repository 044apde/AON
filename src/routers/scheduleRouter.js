import express from "express";
import {schedule} from "../controllers/scheduleController";

const scheduleRouter = express.Router();

scheduleRouter.get("/", schedule);

export default scheduleRouter;