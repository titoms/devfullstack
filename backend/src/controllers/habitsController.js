import * as habitsService from '../services/habitsService.js'

const notFound = (response) => response.status(404).json({ message: 'Habit introuvable' })

export async function getAllHabits(request, response) {
    const habits = await habitsService.listHabits({ ownerId: request.query.ownerId })
    return response.status(200).json({ message: 'Habits récupérés', habits })
}

export async function getOneHabit(request, response) {
    const habit = await habitsService.getHabitById(request.params.id)
    if (!habit) return notFound(response)
    return response.status(200).json({ message: 'Habit récupéré', habit })
}

export async function createHabit(request, response) {
    const habit = await habitsService.createHabit(request.body ?? {})
    return response.status(201).json({ message: 'Habit créé', habit })
}

export async function updateHabit(request, response) {
    const habit = await habitsService.updateHabit(request.params.id, request.body ?? {})
    if (!habit) return notFound(response)
    return response.status(200).json({ message: 'Habit modifié', habit })
}

export async function deleteHabit(request, response) {
    const habit = await habitsService.deleteHabit(request.params.id)
    if (!habit) return notFound(response)
    return response.status(204).send()
}