import { Router } from 'express'
import * as habitsController from '../controllers/habitsController.js'

export const habitsRouter = Router()

habitsRouter.get('/', habitsController.getAllHabits)
habitsRouter.get('/:id', habitsController.getOneHabit)
habitsRouter.post('/', habitsController.createHabit)
habitsRouter.put('/:id', habitsController.updateHabit)
habitsRouter.delete('/:id', habitsController.deleteHabit)