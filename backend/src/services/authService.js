 import bcrypt from "bcryptjs"
 import { User } from "../models/User";
 
 export async function register({email,password}){
    if (await User.exists({email})){
        throw new Error("Email already exists")
    }
    const passwordHash = await bcrypt.hash(password,10)
    const user = await User.create({email,passwordHash});
}

export async function login(email,password){
    
}