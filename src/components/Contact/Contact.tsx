import { ChangeEvent, FormEvent, useState } from "react"
import { H4Variation } from "../../globalStyles"
import { Social } from "../Social"
import { ContactWrapper, Button } from "./Contact.styles"
//import { EmailResponse, sendEmail } from "../../service/email"
import { useFetch } from "../../hooks/useFetch"

export interface Message {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {

  const [message, setMessage] = useState<Message>({
    name: '',
    email: '',
    message: ''
  })

  const [isActive, setIsActive] = useState(false)

  const {isError,isLoading,response} = useFetch(message, isActive)
  //const [response, setResponse] = useState<EmailResponse | string>()

  const handleSubmit = async(e : FormEvent<HTMLFormElement>) => {
    e.preventDefault() 
    setIsActive(true)
    //setResponse(await sendEmail(message))      
  }

  const handleChange = (e : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMessage({
      ...message, 
      [e.target.name] : e.target.value})
  }

  //console.log(isError);
  console.log(isLoading);
  //console.log(response);
  
  
  

  return (
    <ContactWrapper>
      <form onSubmit={(e) => handleSubmit(e)}>
        <H4Variation>Contáctame</H4Variation>
        <div>
          <label htmlFor="name">Tu nombre</label>
          <input type='text' placeholder='Escribe tu nombre' id="name" name="name" onChange={(e) => handleChange(e)}/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type='text' placeholder='Escribe tu email' id="email" name="email" onChange={(e) => handleChange(e)}/>
        </div>
        <div>
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" placeholder="Escribe tu mensaje" name="message" onChange={(e) => handleChange(e)}/>
        </div>
        <Button type="submit">Enviar</Button>
      </form>
      <section>
        <Social />
      </section>
    </ContactWrapper>
  )
}

export default Contact
