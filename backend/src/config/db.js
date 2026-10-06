import mongoose from 'mongoose'

export async function connectDb(uri) {
    if (typeof uri !== 'string' || uri.trim() === '') {
        throw new Error('MONGODB_URI is missing. Create backend/.env from backend/.env.example and set a MongoDB connection string.')
    }

    await mongoose.connect(uri)
}

export async function disconnectDb() {
    await mongoose.disconnect();
}