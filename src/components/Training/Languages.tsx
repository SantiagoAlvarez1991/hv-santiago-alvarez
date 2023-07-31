import { training } from "../../data/data"
import { LanguagesWrapper, LanguageCard } from "./Laguages.styles"


const Languages = () => {
  return (
    <LanguagesWrapper>
        <h5>Idiomas</h5>
        <div>
          {training.languages.map(language => (
              <LanguageCard key={language.title}>
                  <p>{language.title}</p>
                  <p>{language.level}</p>
              </LanguageCard>
          ))}
        </div>
    </LanguagesWrapper>
  )
}

export default Languages
