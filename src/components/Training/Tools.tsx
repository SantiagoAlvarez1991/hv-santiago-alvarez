import bullet from '../../assets/bullet.svg'
import { training } from '../../data/data'
import { ToolsWrapper } from './Tools.styles'

const Tools = () => {
  return (
    <ToolsWrapper>
        <h5>Herramientas</h5>
        <ul>
            {training.tools.map(tool => (
                <li key={tool}>
                    <img src={bullet} alt='bullet'/>
                    {tool}
                </li>
            ))}
        </ul>
    </ToolsWrapper>
  )
}

export default Tools
