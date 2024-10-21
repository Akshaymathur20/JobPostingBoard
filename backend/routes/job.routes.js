import express from 'express';
import { createJob } from '../controllers/jobController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create', authMiddleware, createJob);

export default router;
