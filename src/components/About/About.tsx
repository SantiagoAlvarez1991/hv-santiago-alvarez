import foto from '../../assets/foto.png'

import { about } from '../../data/data'
import { Social } from '../Social'

const About = () => {
  return (
    <section>
        <div>
            <img src={foto} alt='Foto Santiago Alvarez Eraso' width='200px'/>
            <div>
                <Social />
            </div>
        </div>
        <div>
            <h3>Sobre mí</h3>
            <p>{about.primary}</p>
            <p>{about.secondary}</p>
            <p>{about.tertiary}</p>
            <a href='/'>Contáctame</a>
        </div>
      
    </section>
  )
}

export default About
