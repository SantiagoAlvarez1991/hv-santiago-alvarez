interface About {
    primary: string;
    secondary: string;
    tertiary: string
}

interface Talent {
    technologies: string[];
    skills: string[];
    
}

interface Experience {
    title: string;
    place: string;
    date: string;
    about: string;
    product: string;
    functions: string[];
    skills: string[]
}

interface Training {
    studies: {
        title: string;
        date: string;
        place: string;
        city? : string
    }[],
    languages: {
        title: string;
        level: string
    }[],
    tools: string[]
}


export const about: About = {
    primary: "Motivado por encontrar soluciones creativas, la experiencia adquirida en el campo tecnológico y gráfico me ha permitido desarrollar competencias para abordar integralmente las necesidades del usuario y fortalecer las experiencias en productos digitales.",
    secondary: "Actualmente estoy en busqueda de mi primera oportunidad laboral en desarrollo Front End para poner en práctica mis conocimientos adquiridos en HTML, CSS, JavaScript, TypeScript, React, Next.Js.",
    tertiary: "Estoy en constante aprendizaje, con actitud proactiva frente a nuevos retos y capacidad de trabajo en equipo."
}



export const talent: Talent = {
    technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.Js', 'Jest', 'Git'],
    skills: ['Consumo de API', 'Testing unitario', 'Base de datos relacional', 'Resposive design', 'UX/UI design', 'Design Thinking', 'Metodologías ágiles (Scrum)', 'Trabajo colaborativo'],
    
}

export const experience: Experience[] = [
    {
        title: 'Desarrollador Front End',
        place: 'Digital House',
        date: 'Mayo 2023 - Julio 2023',
        about: 'Proyecto integrador realizado en el marco de la carrera Front End Specialist',
        product: 'Digital Money: Billetera virtual',
        functions: [
            'Maquetado del sitio y adaptación de las vistas para distintos dispositivos (responsive)',
            'Conexión con el back end mediante API REST para envío, obtención de información y manipulación de códigos de respuesta',
            'Manejo de estados globales dentro de la aplicación',
            'Abstracción de lógica de la aplicación en hooks personalizados',
            'Esquemas de validación para campos de registro, autenticación y edición de información',
            'Control de versiones con Git',
            'Gestión de trabajo colaborativo con Gitlab'
        ],
        skills: ['HTML', 'CSS', 'TypeScript', 'Next.Js', 'Redux', 'React hook form', 'React query', 'Styled components', 'GitLab']
    },
    {
        title: 'Desarrollador Front End',
        place: 'Digital House',
        date: 'Mayo 2022 - Julio 2022',
        about: 'Proyecto integrador realizado en el marco de la carrera Certified Tech Developer ',
        product: 'Digital Booking: Aplicación web para reserva de hospedajes',
        functions: [
            'Maquetado del sitio y adaptación de las vistas para distintos dispositivos (responsive)',
            'Conexión con el back end mediante API REST para envío, obtención de información y manipulación de códigos de respuesta',
            'Validaciones en campos de registro y autenticación',
            'Control de versiones con Git',
            'Gestión de trabajo colaborativo con Gitlab'
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Styled components', 'GitLab']
    }
]

export const training : Training = {
    studies: [
        {
            title: 'Front End Specialist',
            date: '2022 - 2023',
            place: 'Digital House '
        },
        {
            title: 'Certified Tech Developer',
            date: '2021 - 2022',
            place: 'Digital House '
        },
        {
            title: 'Diseñador Gráfico y Multimedial',
            date: '2021 - 2022',
            place: 'Universidad de Nariño ',
            city: 'Pasto - Colombia'
        }
    ],
    languages : [
        {
            title: 'Español',
            level: 'Nativo'
        },
        {
            title: 'Inglés',
            level: 'Nivel intermedio'
        },
    ],
    tools: ['Visual Studio Code', 'Postman', 'GitLab', 'GitHub', 'Figma', 'Adobe Illustrator', 'Adobe Photoshop']
}