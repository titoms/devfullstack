import { User } from '../models/User.js'

export function listUsers() {
    return User.find()
}