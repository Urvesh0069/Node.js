import express from "express";
import {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
} from "../controllers/teacher.controllers.js";

const router = express.Router();

// Create
router.post("/", createTeacher);

// Read all
router.get("/", getAllTeachers);

// Read by ID
router.get("/:id", getTeacherById);

// Update
router.put("/:id", updateTeacher);

// Delete
router.delete("/:id", deleteTeacher);

export default router;
