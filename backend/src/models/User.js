import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true, trim: true, lowercase: true },
        username: { type: String, required: true, trim: true, maxlength: 50 },
        passwordHash: { type: String, required: true, select: false },
    },
    { timestamps: true }
)

export const User = mongoose.model('User', userSchema)