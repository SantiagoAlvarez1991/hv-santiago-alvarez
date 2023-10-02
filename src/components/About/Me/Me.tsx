
import { about } from '../../../data/data'
import { talent } from '../../../data/data'
import { AboutMe, Technologies } from './Me.styles'
import { Acordeon } from '../../Elements/Acordeon'

const Me = () => {

  //const [isActiveAboutMe, setIsActiveAboutMe] = useState<boolean>(false)

  const introduction = about.primary
  const underlinedTextIndex = introduction.indexOf('fortalecer')

  const getNormalicedText = (): string => {
    return introduction.slice(0, underlinedTextIndex)
  }

  const getUnderlinedText = (): string => {
    return introduction.slice(underlinedTextIndex)
  }


  return (
    <>
      <AboutMe >
        {/* <Acordeon $isActive={isActiveAboutMe}>
            <h3>Sobre mí</h3>
            <FaAngleDown onClick={() => setIsActiveAboutMe(prevState => !prevState)} />
            <AboutMePharagraph $isActive={isActiveAboutMe}>
                <p>{getNormalicedText()}<span>{getUnderlinedText()}</span></p>
                <p>{about.secondary}</p>
                <p>{about.tertiary}</p>           
            </AboutMePharagraph>
        </Acordeon> */}
        <Acordeon 
          maxHeightMobile='300px' 
          maxHeightDesktop='400px'
          titleBox={
            <h3>Sobre mí</h3>
          }>
          <p>{getNormalicedText()}<span>{getUnderlinedText()}</span></p>
          <p>{about.secondary}</p>
          <p>{about.tertiary}</p>
        </Acordeon>
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
