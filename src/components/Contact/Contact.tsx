import { H4Variation } from "../../globalStyles"
import { Social } from "../Social"
import { ContactWrapper, Button } from "./Contact.styles"


const Contact = () => {
  return (
    <ContactWrapper>
        <form>
            <H4Variation>Contáctame</H4Variation>
            <label htmlFor="name">Tu nombre</label>
            <input type='text' placeholder='Escribe tu nombre' id="name"/>
            <label htmlFor="email">Email</label>
            <input type='text' placeholder='Escribe tu email' id="email"/>
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" placeholder="Escribe tu mensaje"/>
            <Button type="submit">Enviar</Button>
        </form>
        <section>
          <Social />
        </section>
    </ContactWrapper>
  )
}

export default Contact
