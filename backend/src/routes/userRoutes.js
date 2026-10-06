import { Router } from 'express';
import * as userController from '../controllers/userController.js';

export const userRouter = Router();

userRouter.get('/', userController.getAllUsers);