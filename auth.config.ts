import { bcrypt } from 'bcrypt';
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import authConfig from "./auth.config"
 import NextAuth from "next-auth"

 import { LoginSchema } from "./schemas"

import type { NextAuthConfig } from "next-auth"
import { getUserbyEmail } from "./data/user"
import Credentials from "next-auth/providers/credentials"

export default {
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSectret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSectret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      async authorie(credentials){
        const validatedFields = LpginSchema.safeParse(credentials);

        if (validatedFields.sucess){
          const {email, password} = validatedFields.data;

          const user = await getUserbyEmail(email);
          
          if(!user || !user.password) return null;

          const passwordsMatch = await bcrypt.compare(
            password,
            user.password,
          );

          if (passwordsMatch ) return user;

        }
      }
    })
  ]
} satisfies NextAuthConfig