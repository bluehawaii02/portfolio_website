import express from 'express';
import { CreateMessage } from '../controllers/message.js';

const router = express.Router();

router.post("/", CreateMessage);

export default router;