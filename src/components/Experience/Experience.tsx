import { experience } from "../../data/data"
import { Skills } from "../Talent"

const Experience = () => {
    return (
        <section>
            <h3>Experiencia</h3>
            {experience.map(oneExperience => (
                <article key={`${oneExperience.title}-${oneExperience.date}`}>
                    <div>
                        <p>{oneExperience.title}</p>
                        <p>{oneExperience.place}</p>
                        <p>{oneExperience.date}</p>
                    </div>
                    <div>
                        <div>
                            <p>{oneExperience.about}</p>
                        </div>
                        <div>
                            <p>Producto</p>
                            <p>{oneExperience.product}</p>
                            <p>Funciones</p>
                            <ul>{oneExperience.functions.map(oneFunction => (
                                <li key={oneFunction}>{oneFunction}</li>
                            ))}
                            </ul>
                            <p>Tecnologías</p>
                            <Skills skills={oneExperience.skills}/>
                        </div>
                    </div>
                </article>
            ))}

        </section>
    )
}

export default Experience
