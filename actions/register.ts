'use server';

import * as z from "zod"
import { RegisterSchema } from "../schemas";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { getUserbyEmail } from "../data/user";



export const register = async (values: z.infer<typeof RegisterSchema>) =>{
    const validatedFields = RegisterSchema.safeParse(values);

   if(!validatedFields.success){
        return {error: "Informações inválidas"}
    }

    const {email, password, name} = validatedFields.data;

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserbyEmail(email);



    if(existingUser){
        return{error: "Email ou Nome já em uso"}
    }

    await db.user.create({
        data: {
            name, 
            email,
            password: hashedPassword,
            
        },
    });

    return {sucess: "Usuário criado"}
};