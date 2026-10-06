import { Habits } from '../models/Habits.js'

export function listHabits({ ownerId } = {}) {
    const filter = {}
    if (ownerId) filter.ownerId = ownerId
    return Habits.find(filter)
}

export function getHabitById(id) {
    return Habits.findById(id)
}

export function createHabit({ title, frequency, active, ownerId }) {
    return Habits.create({ title, frequency, active, ownerId })
}

export function updateHabit(id, { title, frequency, active }) {
    // On ne modifie que les champs autorisés (pas ownerId)
    const updates = {}
    if (title !== undefined) updates.title = title
    if (frequency !== undefined) updates.frequency = frequency
    if (active !== undefined) updates.active = active

    return Habits.findByIdAndUpdate(id, updates, { new: true, runValidators: true })
}

export function deleteHabit(id) {
    return Habits.findByIdAndDelete(id)
}