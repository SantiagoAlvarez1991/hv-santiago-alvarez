
import { about } from '../../../data/data'
import { talent } from '../../../data/data'
import { FaAngleDown } from 'react-icons/fa'
import { AboutMe, AboutMePharagraph, Technologies } from './Me.styles'
import { useState } from 'react'

const Me = () => {

    const [isActiveAboutMe, setIsActiveAboutMe] = useState<boolean>(false)

     
  const introduction = about.primary
  const underlinedTextIndex = introduction.indexOf('fortalecer')

  const getNormalicedText = () : string => {    
    return introduction.slice(0, underlinedTextIndex)
  }
  
  const getUnderlinedText = () : string => {    
    return introduction.slice(underlinedTextIndex)
  }


  return (
    <>
    <AboutMe $isActive={isActiveAboutMe}>
        <div>
            <h3>Sobre mí</h3>
            <FaAngleDown onClick={() => setIsActiveAboutMe(prevState => !prevState)} />
            <AboutMePharagraph $isActive={isActiveAboutMe}>
                <p>{getNormalicedText()}<span>{getUnderlinedText()}</span></p>
                <p>{about.secondary}</p>
                <p>{about.tertiary}</p>           
            </AboutMePharagraph>
        </div>
    </AboutMe>
    <Technologies>
        <h3>Tecnologías</h3>
        <ul>
            {talent.technologies.map(technology => (
                <li key={technology}>{technology}</li>
            ))}
        </ul>
    </Technologies>
      
    </>
  )
}

export default Me
