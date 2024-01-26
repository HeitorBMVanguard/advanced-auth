'use client';

import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})


export default function Home() {
  console.log('Hehehe')
  return (
    <main className="bg-gradient-to-br from-gray-700 via-gray-900 to-black flexx h-full flex-col items-center flex justify-center">
      <div className="space-y-6 text-center">

      <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md",
      font.className,)}>

      🔑 Autenticação
      </h1>

      <p className="text-white text-lg">
        Serviço de autenticação
      </p>

      <div>
        <LoginButton>
        <Button size="lg" variant="outline">
          Entrar
        </Button>

        </LoginButton>
        
      </div>
      </div>
    </main>
  );
}
