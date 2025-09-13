import express from "express";
import * as TaskController from "../controllers/taskController.js";
import { validateTask } from "../validators/taskValidator.js";

const router = express.Router();

router.post("/", validateTask, TaskController.createTask);
router.get("/", TaskController.getTasks);
router.get("/:id", TaskController.getTask);
router.put("/:id", TaskController.updateTask);
router.delete("/:id", TaskController.deleteTask);

export default router;
