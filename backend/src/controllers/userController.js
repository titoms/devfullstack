import * as userService from '../services/userService.js'

const notFound = (response) => response.status(404).json({ message: 'User introuvable' })

export async function getAllUsers(_request, response) {
    const users = await userService.listUsers()
    return response.status(200).json({ message: 'Users récupérés', users })
}

export async function getOneUser(request, response) {
    const user = await userService.getUserById(request.params.id)
    if (!user) return notFound(response)
    return response.status(200).json({ message: 'User récupéré', user })
}

export async function createUser(request, response) {
    const user = await userService.createUser(request.body ?? {})
    return response.status(201).json({ message: 'User créé', user })
}

export async function updateUser(request, response) {
    const user = await userService.updateUser(request.params.id, request.body ?? {})
    if (!user) return notFound(response)
    return response.status(200).json({ message: 'User modifié', user })
}

export async function deleteUser(request, response) {
    const user = await userService.deleteUser(request.params.id)
    if (!user) return notFound(response)
    return response.status(204).send()
}