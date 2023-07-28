import bullet from '../../assets/bullet.svg'
import { training } from '../../data/data'

const Tools = () => {
  return (
    <section>
        <h4>Herramientas</h4>
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
