import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { MdAccountCircle } from "react-icons/md";


const font = Poppins ({
    subsets : ["latin"],
    weight: ["600"],
});

interface HeaderRegisterProps {
    label: string;
};

export const HeaderRegister = ({
    label,
}: HeaderRegisterProps) => {
    return(
        <div className="w-full flex flex-col gap-y-4 items center justify-center">
            <h1 className={cn("text-3xl font-smeibold", font.className)}>  <MdAccountCircle/> Cadastre-se </h1>

                <p className="text-muted-foreground text-sm"> {label}</p>
        </div>
    )
}
