'use client'

import { useForm } from "react-hook-form"
import { CardWrapper } from "./card-wrapper"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormItem, FormLabel, FormMessage, Form, FormField,FormControl } from "../ui/form"
import * as z from "zod"
import { LoginSchema } from "../../../schemas"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { FormError } from "../form-error"

export const LoginForm = () =>{

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues:{
            email:"",
            password:"",
        },
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) =>{
        console.log(values);
    }

    return(
        <CardWrapper 
        headerLabel="Bem vindo de volta"
        backButtonLabel="Não tem conta?"
        backButtonHref="/auth/register"
        showSocial
        
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                    <FormError message="Algo de errado aconteceu"/>

                    <Button type="submit" className="w-full cursor-pointer">
                       Login
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}