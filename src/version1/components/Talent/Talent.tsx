import { SkillsList } from "."
import { talent } from "../../../data/data"
import { H4Variation } from "../../../globalStyles"
import { TalentWrapper, Technologies, Skills } from "./Talent.styles"

const Talent = () => {
    return (
        <TalentWrapper>
            <Technologies>
                <H4Variation>Tecnologías</H4Variation>              
                <SkillsList skills={talent.technologies} />
            </Technologies>
            <Skills>
                <h4>Habilidades</h4>
                <SkillsList skills={talent.skills} />
            </Skills>
        </TalentWrapper>
    )
}

export default Talent
