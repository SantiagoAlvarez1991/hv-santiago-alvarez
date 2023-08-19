import Education from "./Education"
import Languages from "./Languages"
import Tools from "./Tools"
import { TrainingWrapper } from "./Training.styles"


const Training = () => {
  return (
    <TrainingWrapper>
        <Education />
        <Languages />
        <Tools />
    </TrainingWrapper>
  )
}

export default Training
