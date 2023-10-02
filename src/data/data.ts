interface About {
    primary: string;
    secondary: string;
    tertiary: string
}

interface Talent {
    technologies: string[];
    skills: string[];
    
}

interface Gallery {
    id: number;
    image : string
}

interface Experience {
    title: string;
    place: string;
    date: string;
    about: string;
    product: string;
    functions: string[];
    skills: string[];
    gallery: Gallery[]
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

export interface Project {
    id: number;
    image: string;
    title: string;
    description: string;
    technologies: string[]
    repository: string;
    deploy: string;
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
        skills: ['HTML', 'CSS', 'TypeScript', 'Next.Js', 'Redux', 'React hook form', 'React query', 'Styled components', 'GitLab'],
        gallery: [
            {
                id: 1,
                image: "/DigitalMoney/1.jpg"                
            },
            {
                id: 2,
                image: "/DigitalMoney/2.jpg"                
            },
            {
                id: 3,
                image: "/DigitalMoney/3.jpg"                
            },
            {
                id: 4,
                image: "/DigitalMoney/4.jpg"                
            },
            {
                id: 5,
                image: "/DigitalMoney/5.jpg"                
            },
            {
                id: 6,
                image: "/DigitalMoney/6.jpg"                
            },
            {
                id: 7,
                image: "/DigitalMoney/7.jpg"                
            },
            {
                id: 8,
                image: "/DigitalMoney/8.jpg"                
            },
        ]
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
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Styled components', 'GitLab'],
        gallery: [
            {
                id: 1,
                image: "/DigitalBooking/1.png"
                
            },
            {
                id: 2,
                image: "/DigitalBooking/2.png"
                
            },
            {
                id: 3,
                image: "/DigitalBooking/3.png"
                
            },
            {
                id: 4,
                image: "/DigitalBooking/4.png"
                
            },
            {
                id: 5,
                image: "/DigitalBooking/5.png"
                
            },
            {
                id: 6,
                image: "/DigitalBooking/6.png"
                
            },
            {
                id: 7,
                image: "/DigitalBooking/7.png"
                
            },
            {
                id: 8,
                image: "/DigitalBooking/8.png"
                
            },
            {
                id: 9,
                image: "/DigitalBooking/9.png"
                
            },
        ]
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
            city: 'Pasto, Colombia'
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

export const projects : Project[] = [
    {
        id: 1,
        image: '/Projects/rickAndMorty.png',
        title: 'Rick and Morty',
        description: 'Desafio técnico, aplicación de busqueda de personajes',
        technologies: ['Next.js, GraphQL, Tailwind, TypeScript'],
        repository: 'https://github.com/SantiagoAlvarez1991/rick-and-morty-challenge',
        deploy: 'https://rick-and-morty-challenge-olive.vercel.app/'
    },
    {
        id: 2,
        image: '/Projects/marvel.png',
        title: 'Marvel comics',
        description: 'Ejercicio académico, tienda de comics',
        technologies: ['Next.js, API REST, Material UI, TypeScript, Jest'],
        repository: 'https://github.com/SantiagoAlvarez1991/ctd-esp-fe3-final',
        deploy: 'https://ctd-esp-fe3-final-amber.vercel.app/'
    },
]