export const SECTIONS = {
  es :  [
    "inicio",
    "experiencia",
    "educacion",
    "habilidades",
    "proyectos",
    "contacto"
  ],
  en :  [
    "start",
    "experience",
    "education",
    "skills",
    "projects",
    "contact"
  ],
};

export const LINKS = {
  github: { id: "github", link: "https://github.com/BLz13" },
  cv: { 
    en: { id: "cvEN", text:"download my resume from google drive", link: "https://drive.google.com/" },
    es: { id: "cvES", text:"descarga mi curriculum de google drive", link: "https://drive.google.com/" }
  }
};


export const TEXT = {
  contact : {
    es : {
      address : {
        id: 'dirección',
        city : 'Mar del Plata',
        country: 'Argentina'
      },
      linkedin : {
        id: 'linkedin',
        value: 'https://www.linkedin.com/in/b-lazo/'
      },
      phone : {
        id: 'teléfono',
        value: '(+54) 223 498 2114',
        number: 542234982114,
      },
      email : {
        id: 'mail',
        value: 'bruno.lazo@outlook.com'
      }
    },
    en : {
      address : {
        id: 'address',
        city : 'Mar del Plata',
        country: 'Argentina'
      },
      linkedin : {
        id: 'linkedin',
        value: 'https://www.linkedin.com/in/b-lazo/?locale=en-US/'
      },
      phone : {
        id: 'phone',
        value: '(+54) 223 498 2114',
      },
      email : {
        id: 'email',
        value: 'bruno.lazo@outlook.com'
      }
    }
  },
  personal: {
    en : {
      name: {
        id: "name",
        value: 'bruno lazo'
      },
      title: {
        id: "title",
        value: 'fullstack developer'
      },
      intro: {
        id: "introduction",
        value: 'Full-Stack Developer with 3 years of experience in website and e-commerce development, specializing in HTML, CSS, JavaScript, React, and WordPress. I have a solid understanding of programming logic and development best practices, besides being fully fluent in English and Spanish.'
      },
      experience : {
        ids: [
          "experience",
          "company",
          "location",
          "duration",
          "tasks"
        ],
        value: [
          {
            company : 'agencia lader',
            place : 'buenos aires, argentina (remoto)',
            title : 'jr frontend developer',
            time : 'septiembre 2023 – marzo 2024',
            tasks : [
              'Development and redesign of websites and e-commerce sites using WordPress, CSS, and JavaScript.',
              'Integration of technologies such as PHP, WooCommerce, and Elementor.'
            ]
          },
          {
            company : 'publissoft',
            place : 'Quebec, Canadá (Remoto)',
            title : 'frontend developer',
            time : 'august 2024 - august 2026 ',
            tasks : [
              'Development and redesign of websites and e-commerce sites using WordPress, CSS, and JavaScript.',
              'Integration of technologies such as PHP, WooCommerce, Elementor, and WPML.',
              'International collaboration in English',
              'Use of artificial intelligence tools (ChatGPT, Claude, Gemini) to accelerate content development and optimization processes.',
              "Implementation of automations using N8N that reduced the team's manual workload."
            ]
          }
          /*
          {
            company : '',
            place : '',
            title : '',
            time : '',
            tasks : [
              '',
              ''
            ]
          }
          */
        ],
      },
      education : {
        ids: [
          "education",
          "institution",
          "place",
          "title",
          "duration",
          "status"
        ],
        value: [
          {
            place : 'UNMDP (Mar del Plata National University)',
            site : 'mar del plata, argentina',
            title : 'software engineering',
            time : 'march 2019 - present',
            status : 'currently attending third year'
          },
          {
            place : 'coder house',
            site : 'mar del plata, argentina',
            title : 'frontend and mobile development',
            time : 'july 2022 - march 2023',
            status : 'completed'
          },
          {
            place : 'north carolina wesleyan college',
            site : 'rocky mount, north carolina, united states',
            title : 'master in computer science',
            time : 'september 2018 - december 2018',
            status : 'unfinished'
          }
          /*
          {
            place : '',
            site : '',
            title : '',
            time : '',
            status : ''
          }
          */
        ],
      },
      skills : {
        id: "skills",
        value: {
          programming : {
            id: "programming languages",
            value: ['HTML', 'CSS', 'SASS', 'JavaScript', 'TypeScript', 'PHP (intermediate)', 'C (intermediate)'],
          },
          frameworks : {
            id: "frameworks",
            value: ['React.js', 'React Native', 'Nest.js', 'Node.js'],
          },
          database : {
            id: "databases",
            value: ['MySQL', 'PostgreSQL', 'MongoDB (Mongoose, TypeORM)'],
          },
          tools : {
            id: "tools",
            value: ['WordPress', 'Elementor', 'WooCommerce', 'Git/GitHub', 'Docker', 'N8N', 'Figma'],
          },
          languages : {
            id: "languages",
            value: ["Spanish (native speaker)", "C2 English – Certifications: SAT, TOEFL, Cambridge's First Certificate in English (FCE)"]
          },
        }
      }
    },
    es : {
      name: {
        id: "nombre",
        value: 'bruno lazo'
      },
      title: {
        id: "título",
        value: 'desarrollador fullstack'
      },
      intro: {
        id: "introducción",
        value: 'Desarrollador full-stack con 3 años de experiencia en el desarrollo de sitios web y e-comercio, especializado en HTML, CSS, JavaScript, React y WordPress. Cuento con un sólido conocimiento en lógica de programación y las mejores prácticas de desarrollo, además de dominar perfectamente el inglés y el español.'
      },
      experience : {
        ids: [
          "experiencia",
          "compañía",
          "locación",
          "duración",
          "tareas"
        ],
        value: [
          {
            company : 'agencia lader',
            place : 'buenos aires, argentina (remoto)',
            title : 'desarrollador frontend jr',
            time : 'septiembre 2023 – marzo 2024',
            tasks : [
              'Desarrollo y rediseño de sitios web y e-commerce con WordPress, CSS y JavaScript.',
              'Integración de tecnologías como PHP, WooCommerce, Elementor.'
            ]
          },
          {
            company : 'publissoft',
            place : 'Quebec, Canadá (Remoto)',
            title : 'desarrollador frontend',
            time : 'agosto 2024 - agosto 2026',
            tasks : [
              'Desarrollo y rediseño de sitios web y e-commerce con WordPress, CSS y JavaScript.',
              'Integración de tecnologías como PHP, WooCommerce, Elementor y WPML.',
              'Colaboración internacional en inglés (oral y escrito).',
              'Uso de herramientas de inteligencia artificial (ChatGPT, Claude, Gemini) para acelerar procesos de desarrollo y optimización de contenido.',
              'Implementación de automatizaciones con N8N que redujeron el trabajo manual del equipo.'
            ]
          }
          /*
          {
            company : '',
            place : '',
            title : '',
            time : '',
            tasks : [
              '',
              ''
            ]
          }
          */
        ],
      },
      education : {
        ids: [
          "educación",
          "institución",
          "lugar",
          "título",
          "duración",
          "estado"
        ],
        value: [
          {
            place : 'universidad nacional de mar del plata',
            site : 'mar del plata, argentina',
            title : 'ingeniería de informática',
            time : 'marzo 2019 - presente',
            status : 'actualmente cursando tercer año'
          },
          {
            place : 'coder house',
            site : 'mar del plata, argentina',
            title : 'desarrollo frontend y mobile',
            time : 'julio 2022 - marzo 2023',
            status : 'completado'
          },
          {
            place : 'north carolina wesleyan college',
            site : 'rocky mount, north carolina, estados unidos',
            title : 'licenciatura en ciencias de la computación',
            time : 'septiembre 2018 - diciembre 2018',
            status : 'incompleto'
          }
          /*
          {
            place : '',
            site : '',
            title : '',
            time : '',
            status : ''
          }
          */
        ],
      },
      skills : {
        id: "habilidades",
        value: {
          programming : {
            id: "lenguajes de programación",
            value: ['HTML', 'CSS', 'SASS', 'JavaScript', 'TypeScript', 'PHP (intermedio)', 'C (intermedio)'],
          },
          frameworks : {
            id: "frameworks",
            value: ['React.js', 'React Native', 'Nest.js', 'Node.js'],
          },
          database : {
            id: "bases de datos",
            value: ['MySQL', 'PostgreSQL', 'MongoDB (Mongoose, TypeORM)'],
          },
          tools : {
            id: "herramientas",
            value: ['WordPress', 'Elementor', 'WooCommerce', 'Git/GitHub', 'Docker', 'N8N', 'Figma'],
          },
          languages : {
            id: "idiomas",
            value: ['Español (nativo)', 'Inglés avanzado (oral y escrito) – Certificaciones: SAT, TOEFL, First Certificate in English (FCE) de Cambridge']
          },
        }
      }
    }
  },
  magicButton : {
    es : 'hace click',
    en : 'press me'
  }
};