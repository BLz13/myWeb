export const PAGES = [
  { id: "home", link: "/" },
  { id: "sobre nosotros", link: "/nosotros" },
  { id: "delivery", link: "/delivery" },
  { id: "contacto", link: "/contacto" }
];

export const TEXT = {
  contact : {    
      address : 'Mar del Plata, Argentina',
      linkedin : 'https://www.linkedin.com/in/b-lazo/',
      phone : '+54 223 498 2114',
      email : 'bruno.lazo@outlook.com'
  },
  personal: {
    en : {},
    es: {    
      name: 'bruno lazo',
      title: 'desarrollador fullstack',
      intro: 'Desarrollador Fullstack Jr con 2 años de experiencia en el desarrollo de sitios web y e-commerce, especializado en HTML, CSS, JavaScript, React y WordPress. Con conocimientos sólidos de lógica de programación, buenas prácticas de desarrollo y nivel de inglés avanzado (oral y escrito).',
      experience : [
        {
          company : 'Agencia Lader',
          place : 'Buenos Aires, Argentina (Remoto)',
          title : 'Desarrollador FrontEnd JR',
          time : 'Septiembre 2023 – Marzo 2024',
          tasks : [
            'Desarrollo y rediseño de sitios web y e-commerce con WordPress, CSS y JavaScript.',
            'Integración de tecnologías como PHP, WooCommerce, Elementor.'
          ]
        },
        {
          company : 'Publissoft',
          place : 'Quebec, Canadá (Remoto)',
          title : 'Desarrollador FrontEnd',
          time : 'Agosto 2024 - Presente',
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
      education : [
        {
          place : 'Universidad Nacional de Mar del Plata',
          site : 'Mar del Plata, Argentina',
          title : 'Ingeniería de Informática',
          time : 'Marzo 2019 - Presente',
          status : 'Actualmente cursando tercer año'
        },
        {
          place : 'Coder House',
          site : 'Mar del Plata, Argentina',
          title : 'Desarrollo Frontend y Mobile',
          time : 'Julio 2022 - Marzo 2023',
          status : 'Finalizado'
        },
        {
          place : 'North Carolina Wesleyan College',
          site : 'Rocky Mount, North Carolina, Estados Unidos',
          title : 'Licenciatura en Ciencias de la Computación',
          time : 'Septiembre 2018 - Diciembre 2018',
          status : 'Incompleto'
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
      skills : {
        programming : ['HTML', 'CSS', 'SASS', 'JavaScript', 'TypeScript', 'PHP (básico)', 'C (básico)'],
        frameworks : ['React.js', 'React Native', 'Nest.js', 'Node.js'],
        database : ['PostgreSQL', 'MongoDB (Mongoose, TypeORM)'],
        tools : ['WordPress', 'Elementor', 'WooCommerce', 'Git/GitHub', 'Docker', 'N8N', 'Figma'],
        languages : ['Español (nativo)', 'Inglés avanzado (oral y escrito) – Certificaciones: SAT, TOEFL, First Certificate in English (FCE) de Cambridge']
      }      
    },
  },
  magicButton : {
    es : 'Hace Click',
    en : 'Press Me'
  }
};