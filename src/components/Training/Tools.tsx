import bullet from '../../assets/bullet.svg'
import { training } from '../../data/data'

const Tools = () => {
  return (
    <section>
        <h5>Herramientas</h5>
        <ul>
            {training.tools.map(tool => (
                <li key={tool}>
                    <img src={bullet} alt='bullet'/>
                    {tool}
                </li>
            ))}
        </ul>
    </section>
  )
}

export default Tools
