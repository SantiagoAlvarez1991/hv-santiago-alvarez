import { useEffect, useState } from "react"
import { Message } from "../components/Contact/Contact"
import { EmailResponse, sendEmail } from "../service/email"

export const useFetch = (message : Message, isActive: boolean = false) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)
    const [response, setResponse] = useState<EmailResponse | string>()

    useEffect(()=>{
        const fetching = async() => {

            try{
                setIsLoading(true)
                setResponse(await sendEmail(message))
                setIsLoading(false)
            }
            catch(e) {
                setIsError(true)
                setIsLoading(false)
            }
        }
        fetching()
    
    },[isActive, message])
    
    return {isError,isLoading,response}
}