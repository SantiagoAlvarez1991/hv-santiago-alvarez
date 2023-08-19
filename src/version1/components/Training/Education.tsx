import { training } from "../../../data/data"
import { EducationWrapper, EducationCard } from "./Education.styles"

const Education = () => {
  return (
    <EducationWrapper>
        <h4>Educación</h4>
        {training.studies.map(degree => (
            <EducationCard key={degree.title}>
                <p>{degree.title}</p>
                <p>{degree.date}</p>
                <p>{degree.place}</p>
                {!!degree.city && <p>{degree.city}</p> }
            </EducationCard>
        ))}
    </EducationWrapper>
  )
}

export default Education
