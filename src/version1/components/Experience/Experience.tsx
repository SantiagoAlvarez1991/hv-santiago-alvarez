import { experience } from "../../../data/data"
import { SkillsList } from "../Talent"
import { ExperienceWrapper, ExperienceCard, AboutWrapper, InnerSubtitle, SkillsWrapper, TitleWrapper } from "./Experience.styles"

const Experience = () => {
    return (
        <ExperienceWrapper>
            <h4>Experiencia</h4>
            {experience.map(oneExperience => (
                <ExperienceCard key={`${oneExperience.title}-${oneExperience.date}`}>
                    <TitleWrapper>
                        <p>{oneExperience.title}</p>
                        <p>{oneExperience.place}</p>
                        <p>{oneExperience.date}</p>
                    </TitleWrapper>
                    <AboutWrapper>
                        <div>
                            <p>{oneExperience.about}</p>
                        </div>
                        <div>
                            <InnerSubtitle>Producto</InnerSubtitle>
                            <p>{oneExperience.product}</p>
                            <InnerSubtitle>Funciones</InnerSubtitle>
                            <ul>{oneExperience.functions.map(oneFunction => (
                                <li key={oneFunction}>{oneFunction}</li>
                            ))}
                            </ul>
                            <InnerSubtitle>Tecnologías</InnerSubtitle>
                            <SkillsWrapper>
                                <SkillsList skills={oneExperience.skills}/>
                            </SkillsWrapper>
                        </div>
                    </AboutWrapper>
                </ExperienceCard>
            ))}

        </ExperienceWrapper>
    )
}

export default Experience
