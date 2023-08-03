import { Message } from "../components/Contact/Contact";

export interface EmailResponse {
    message: string;
    success: string
}

export const sendEmail = async (message: Message) => {    
   
       const fetching = await fetch("https://formsubmit.co/ajax/2b5d3b9cbc25b752f3743ce1ebf6f5ea", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(message)
        })   
        return await fetching.json()    
}

export const sendEmailB = async (message: Message) : Promise<EmailResponse>=> {    
    // try {
        //const response = await fetch("https://formsubmit.co/ajax/dg.santiago.alvarez@gmail.com", {
        const fetching = await fetch("https://formsubmit.co/ajax/2b5d3b9cbc25b752f3743ce1ebf6f5ea", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(message)
        })          
        return await fetching.json()    
    // }
    // catch (e) {
    //     return (e as Error).message
    // }    
}