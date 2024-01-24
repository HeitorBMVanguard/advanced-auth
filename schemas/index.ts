import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({
       message: "Email é obrigatórorio",
    }),
    password: z.string().min(1, {
        message:"Senha é obrigatória",
    }), // minimo de 1 caracter na senha

    
});

export const RegisterSchema = z.object({
    email: z.string().email({
       message: "Email é obrigatórorio",
    }),
    password: z.string().min(6, {
        message:"Senha é obrigatória, minimo 6 caracteres",
    }), // minimo de 1 caracter na senha

    name: z.string().min(1, {
        message:"Nome é obrigatório",
    }),
});