import * as nextAuth from 'next-auth';


import authConfig from "./auth.config";
import { DEFAULT_LOGIN_REDIRECT, apiAuthPrefix,authRoutes , publicRoutes } from "./routes";
import { NextURL } from 'next/dist/server/web/next-url';



const { auth} = nextAuth.NextAuth(authConfig)

export default auth((req: { auth: any; }) =>{
  const {nexturl } = req;

  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nexturl.pathname.startsWith(apiAuthPrefix)

  const isPublicRoute = publicRoutes.includes(nexturl.pathname)
  const isAuthRoute = authRoutes.includes(nexturl.pathname)

  if(isApiAuthRoute){
    return null;
  }

  if (isAuthRoute){
    if(isLoggedIn){
        return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nexturl))
    }
  }

  if (!isLoggedIn && !isPublicRoute){
    return Response.redirect(new URL("/auth/login", nexturl))
  }
  return null;
});
 
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  }