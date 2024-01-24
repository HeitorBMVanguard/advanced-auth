import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { db } from "@/lib/db"
import { PrismaClient, Prisma } from "@prisma/client"
import { DefaultArgs } from "@prisma/client/runtime/library"



export const {
    handlers: {GET, POST},
    auth,
} = NextAuth({
    adapter: PrismaAdapter(db),
    session: {strategy: "jwt"},
    ...authConfig,
})


function PrismaAdapter(db: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>): import("next-auth/adapters").Adapter | undefined {
    throw new Error("Function not implemented.")
}

