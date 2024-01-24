'use client'

import { useForm } from "react-hook-form"
import { CardWrapper } from "./card-wrapper"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormItem, FormLabel, FormMessage, Form, FormField,FormControl } from "../ui/form"
import * as z from "zod"
import {  RegisterSchema } from "../../../schemas"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { FormError } from "../form-error"
import { useState, useTransition } from "react"
import { FormSucess } from "../form-sucess"
import { register } from "../../../actions/register"

export const RegisterForm = () =>{
    const [error, setError] = useState<string | undefined>("");
    const [sucess, setSucess] = useState<string | undefined> ("");

    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues:{
            email:"",
            password:"",
            name: "",
        },
    });

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setError("");
        setSucess("");


        startTransition( () => {
            register(values)
            .then((data) => {
                setError(data.error);
                setSucess(data.sucess);
            });
            
        });

    };

    return(
        <CardWrapper 
        headerLabel="Crie uma conta"
        backButtonLabel="Já possui  uma conta?"
        backButtonHref="/auth/login"
        showSocial
        
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field}) =>(
                            <FormItem>
                                <FormLabel>
                                    Nome
                                </FormLabel>
                                <FormControl>
                                    <Input
                                    {...field}
                                    disabled={isPending}
                                    placeholder="Digite seu Nome"
                                    
                                    />
                                </FormControl>
                            </FormItem>
                        ) }
                        />
                    </div>

                    <div className="space-y-4">
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field}) =>(
                            <FormItem>
                                <FormLabel>
                                    Email
                                </FormLabel>
                                <FormControl>
                                    <Input
                                    {...field}
                                    disabled={isPending}
                                    placeholder="heitor.m@exemplo.com"
                                    type="email"
                                    />
                                </FormControl>
                            </FormItem>
                        ) }
                        />
                    </div>
                    
                    <div className="space-y-4">
                        <FormField
                        control={form.control}
                        name="password"
                        render={({ field}) =>(
                            <FormItem>
                                <FormLabel>
                                    Senha
                                </FormLabel>
                                <FormControl>
                                    <Input
                                    {...field}
                                    placeholder="sua senha"
                                    type="password"
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        ) }
                        />
                    </div>
                    <FormError message={error}/>
                    <FormSucess message={sucess}/>

                    <Button type="submit" className="w-full cursor-pointer" disabled={isPending}>
                       Criar conta
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}


