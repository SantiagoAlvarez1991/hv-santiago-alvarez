import { Skills } from "."
import { talent } from "../../data/data"

const Talent = () => {
    return (
        <section>
            <article>
                <h3>Tecnologías</h3>
                {talent.technologies.map(technology => (
                    <p key={technology}>{technology}</p>
                ))}
            </article>
            <article>
                <h3>Habilidades</h3>
                <Skills skills={talent.skills} />
            </article>
        </section>
    )
}

export default Talent
