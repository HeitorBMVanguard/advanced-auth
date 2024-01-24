import { TfiCheck } from "react-icons/tfi";

interface FormSucessProps{
    message?: string;
};

export const FormSucess = ({
    message,
}: FormSucessProps) =>{
    if(!message) return null;

    return(
        <div className="bg-green-300/10 p-3 rounded-md flex items-center gap-x-2 text-sm text-blue-400">
            <TfiCheck className="h-4 w-4"/>
            <p>{message}</p>
        </div>
    )
}