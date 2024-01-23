import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({
       message: "Email é obrigatórorio",
    }),
    password: z.string().min(1, {
        message:"Senha é obrigatória",
    }), // minimo de 1 caracter na senha
});