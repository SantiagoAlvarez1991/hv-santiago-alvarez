

const Contact = () => {
  return (
    <section>
        <form>
            <h2>Contáctame</h2>
            <label htmlFor="name">Tu nombre</label>
            <input type='text' placeholder='Escribe tu nombre' id="name"/>
            <label htmlFor="email">Email</label>
            <input type='text' placeholder='Escribe tu email' id="email"/>
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" placeholder="Escribe tu mensaje"/>
        </form>
    </section>
  )
}

export default Contact
