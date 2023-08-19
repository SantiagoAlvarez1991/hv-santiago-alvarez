import foto from '../../assets/foto.png'

import { about } from '../../../data/data'
import { Social } from '../../../components/Social'
import { AboutWrapper } from './About.styles'

const About = () => {

  
  
  const introduction = about.primary
  const underlinedTextIndex = introduction.indexOf('fortalecer')

  const getNormalicedText = () : string => {    
    return introduction.slice(0, underlinedTextIndex)
  }
  
  const getUnderlinedText = () : string => {    
    return introduction.slice(underlinedTextIndex)
  }

  

  return (
    <AboutWrapper id='about'>
        <div>
            <img src={foto} alt='Foto Santiago Alvarez Eraso'/>
            <div>
                <Social />
            </div>
        </div>
        <div>
            <h3>Sobre <span>mí</span></h3>
            <p>{getNormalicedText()}<span>{getUnderlinedText()}</span></p>
            <p>{about.secondary}</p>
            <p>{about.tertiary}</p>
            <a href='/'>Contáctame</a>
        </div>      
    </AboutWrapper>
  )
}

export default About
