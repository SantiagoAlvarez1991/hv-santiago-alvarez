import { training } from "../../data/data"

const Education = () => {
  return (
    <section>
        <h3>Educación</h3>
        {training.studies.map(degree => (
            <article key={degree.title}>
                <p>{degree.title}</p>
                <p>{degree.date}</p>
                <p>{degree.place}</p>
                {!!degree.city && <p>{degree.city}</p> }
            </article>
        ))}
    </section>
  )
}

export default Education
