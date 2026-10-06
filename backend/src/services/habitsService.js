import * as habitsService from '../services/habitsService.js'

export async function getAllHabits(_request, response) {
    try {
        const habits = await habitsService.listHabits()
        return response.status(200).json({ message: "Habits récupérés : ", habits })
    } catch (error) {
        return response.status(500).json({ message: "Erreur serveur", error: error.message })
    }
}