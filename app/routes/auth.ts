import express from 'express';
import { IndexController } from '../http/controllers/IndexController';

const router = express.Router();

import AuthMiddleware from '../http/middleware/AuthMiddleware';
// Everywhere below here will require authentication.
router.use(AuthMiddleware);
router.get('/', IndexController.index);

export default router;
