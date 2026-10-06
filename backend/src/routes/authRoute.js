import { Router } from 'express';
import * as taskController from '../controllers/authController.js';

export const authRouter = Router();

authRouter.get('/register', authController.register);
authRouter.get('/login', authController.login);