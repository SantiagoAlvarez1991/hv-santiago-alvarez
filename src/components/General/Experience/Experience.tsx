import { experience } from "../../../data/data";
import { Acordeon } from "../../Elements/Acordeon";
import GalleryThree from "../../Elements/Gallery/GalleryThree";
//import GalleryTwo from "../../Elements/Gallery/GalleryTwo";
import { ExperienceWrapper, Title, ExperienceDescription, ExperienceAbout, ExperienceSubtitle, ExperienceTechnologies  } from "./Experience.styles";


const Experience = () => {

  
 
  
  return (
    <ExperienceWrapper>
      <h3>Experiencia</h3>
      {experience.map((experience) => (
        <Acordeon
          titleBox={
          <ExperienceDescription>
            <Title>{experience.title}</Title>
            <p>{experience.place}</p>
            <p>{experience.date}</p>
          </ExperienceDescription>}
          maxHeightMobile="1700px"
          maxHeightDesktop="1200px"
          key={`${experience.title}_${experience.date}`}
        >
          <ExperienceAbout>{experience.about}</ExperienceAbout>
          <ExperienceSubtitle>Producto</ExperienceSubtitle>
          <p>{experience.product}</p>
          <ExperienceSubtitle>Funciones</ExperienceSubtitle>
          <ul>{experience.functions.map(oneFunction => (
            <li key={oneFunction}>{oneFunction}</li>
          ))}
          </ul>
          <ExperienceSubtitle>Tecnologías</ExperienceSubtitle>
          <ExperienceTechnologies>{experience.skills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
          </ExperienceTechnologies>

          {/* <GalleryTwo
            gallery={experience.gallery}
          /> */}

          <GalleryThree
           gallery={experience.gallery}          
          />

        </Acordeon>

      ))}

    </ExperienceWrapper>
  )
}

export default Experience
