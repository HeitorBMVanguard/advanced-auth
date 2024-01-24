import GitHub from "next-auth/providers/github"
import authConfig from "./auth.config"
 import NextAuth from "next-auth"


import type { NextAuthConfig } from "next-auth"

export default {
  providers: [GitHub],
} satisfies NextAuthConfig