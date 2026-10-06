
import mongoose from 'mongoose'

export const FREQUENCIES = ['daily', 'weekly']

const habitSchema = new mongoose.Schema(
    {

        title: { type: String, required: true, unique: true, trim: true, minlenght:1, maxlength:120 },
        frequency: { type: String, required: true, enum: FREQUENCIES},
        active: { type: Boolean, required: true }, 
        ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    },
    { timestamps: true }
)

export const Habits = mongoose.model('Habit', habitSchema)