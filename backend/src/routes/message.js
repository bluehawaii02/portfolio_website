import express from 'express';
import { CreateMessage } from '../controllers/message.js';
import { likeProject } from '../controllers/projects.js';

const router = express.Router();

router.post("/", CreateMessage);
router.put("/:id/like", likeProject)

export default router;