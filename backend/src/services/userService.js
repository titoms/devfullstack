import { User } from '../models/User.js'
import { Habits } from '../models/Habits.js'
import { hashPassword } from '../utils/password.js'

export function listUsers() {
    return User.find()
}

export function getUserById(id) {
    return User.findById(id)
}

export async function createUser({ email, username, password }) {
    if (!password) {
        const error = new Error('Le mot de passe est requis')
        error.status = 400
        throw error
    }
    const passwordHash = await hashPassword(password)
    const user = await User.create({ email, username, passwordHash })
    return User.findById(user._id)
}

export async function updateUser(id, { email, username, password }) {
    const updates = {}
    if (email !== undefined) updates.email = email
    if (username !== undefined) updates.username = username
    if (password) updates.passwordHash = await hashPassword(password)

    return User.findByIdAndUpdate(id, updates, { new: true, runValidators: true })
}

export async function deleteUser(id) {
    const user = await User.findByIdAndDelete(id)
    // Supprime aussi les habits du user supprimé
    if (user) await Habits.deleteMany({ ownerId: id })
    return user
}