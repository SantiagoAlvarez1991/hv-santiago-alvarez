import GalleryFour from '../../Elements/Gallery/GalleryFour'
import { projects } from '../../../data/data'
import { ProjectsWrapper } from './Projects.styles'

const Projects = () => {
  return (
    <ProjectsWrapper>
      <h3>Proyectos</h3>
      <GalleryFour gallery={projects}/>
    </ProjectsWrapper>
  )
}

export default Projects
