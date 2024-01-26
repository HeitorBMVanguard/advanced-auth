import { Card, CardFooter, CardHeader } from "../ui/card"
import { BackButton } from "@/components/auth/back-button"
import { Header } from "@/components/auth/header"


export const ErrorCard = () =>{
    return(
    <Card className="w-[400px] shadow-md">
        <CardHeader>
          <Header label="Algo de inesperado ocorreu!"/>
        </CardHeader>

        <CardFooter>
            <BackButton
                label="Voltar ao Login"
                href="/auth/login"
            />
        </CardFooter>
    </Card>
    )
}