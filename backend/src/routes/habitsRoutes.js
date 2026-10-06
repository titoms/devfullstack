import { Router } from 'express';
import * as habitsController from '../controllers/habitsController.js';

export const habitsRouter = Router();

habitsRouter.get('/', habitsController.getAllHabits);