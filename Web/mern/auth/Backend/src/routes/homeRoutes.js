import express from 'express'
import { authMiddleware } from '../middleware/authMiddleware.js';
import { home } from '../controller/homeController.js';

const router = express.Router();


router.post('/',authMiddleware,home)

export default router