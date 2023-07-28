import { training } from "../../data/data"


const Languages = () => {
  return (
    <section>
        <h4>Idiomas</h4>
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
