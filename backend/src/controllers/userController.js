import * as userService from '../services/userService.js'

export async function getAllUsers(_request, response) {

    return response.status(200).json({ message: "Je suis la partie User "})
    /*
    try {
        const users = await userService.listUsers()
        return response.status(200).json({ message: "Users récupérés : ", users })
    } catch (error) {
        return response.status(500).json({ message: "Erreur serveur", error: error.message })
    } */
}