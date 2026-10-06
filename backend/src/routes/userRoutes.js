import { Router } from 'express';
import * as userController from "../controllers/userController.js"

export const userRouter = Router();
// Lire mon profil
userRouter.get('/me', userController.getMe);
// Editer mon profil

// Supprimer mon profil