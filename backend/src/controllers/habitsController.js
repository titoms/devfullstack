import * as habitsService from '../services/habitsService.js'

export async function getAllHabits(_request, response) {
    return response.status(200).json({ message: "Je suis la partie habits " })

    /*
    try {
        const habits = await userHabits.listHabits()
        return response.status(200).json({ message: "Habits récupérés : ", users })
    } catch (error) {
        return response.status(500).json({ message: "Erreur serveur", error: error.message })
        
    }*/
}