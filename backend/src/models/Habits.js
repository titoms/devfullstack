import mongoose from 'mongoose'

export const FREQUENCIES = ['daily', 'weekly']

const habitSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, trim: true, minlength: 1, maxlength: 120 },
        frequency: { type: String, required: true, enum: FREQUENCIES },
        active: { type: Boolean, default: true },
        ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    },
    { timestamps: true }
)

// Un titre unique par utilisateur (et non unique pour toute la base)
habitSchema.index({ ownerId: 1, title: 1 }, { unique: true })

export const Habits = mongoose.model('Habit', habitSchema)