

const Skills = ({ skills }: { skills: string[] }) => {
    return (
        <>
            {skills.map(skill => (
                <p key={skill}>{skill}</p>
            ))}
        </>
    )
}

export default Skills
