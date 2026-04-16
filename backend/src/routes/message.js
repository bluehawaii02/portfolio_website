import express from 'express';
import { CreateMessage } from '../controllers/message.js';
import { dislikeProject, likeProject } from '../controllers/projects.js';
import { getProjects } from '../controllers/projects.js';

const router = express.Router();

router.post("/", CreateMessage);
router.put("/:id/like", likeProject);
router.put("/:id/dislike", dislikeProject);
router.get("/", getProjects);

export default router;