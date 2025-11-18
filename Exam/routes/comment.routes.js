import express from "express";
import { addComment } from "../controllers/comment.controllers.js";

const router = express.Router();

router.post("/:id", addComment);

export default router;
