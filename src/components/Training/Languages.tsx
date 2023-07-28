import { training } from "../../data/data"


const Languages = () => {
  return (
    <section>
        <h5>Idiomas</h5>
        {training.languages.map(language => (
            <article key={language.title}>
                <p>{language.title}</p>
                <p>{language.level}</p>
            </article>
        ))}
    </section>
  )
}

export default Languages
