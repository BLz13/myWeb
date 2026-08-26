export const SECTIONS = {
  en :  [ "start", "contact", "experience", "education", "skills", "projects" ],
  es :  [ "inicio", "contacto", "experiencia", "educacion", "habilidades", "proyectos" ],
};

export const LINKS = {
  github: { id: "github", link: "https://github.com/BLz13" },
  cv: { 
    en: { id: "cvEN", text:"download my resume from google drive", link: "https://drive.google.com/" },
    es: { id: "cvES", text:"descarga mi curriculum de google drive", link: "https://drive.google.com/" }
  }
};

export const TEXT = {
  start : {
    en : {
      name: {
        id: "name",
        value: 'bruno lazo'
      },
      title: {
        id: "title",
        value: 'fullstack developer'
      },
      paragraph: {
        id: "introduction",
        value: 'Full-Stack Developer with 3 years of experience in website and e-commerce development, specializing in HTML, CSS, JavaScript, React, and WordPress. I have a solid understanding of programming logic and development best practices, besides being fully fluent in English and Spanish.'
      },
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
      paragraph: {
        id: "introducción",
        value: 'Desarrollador full-stack con 3 años de experiencia en el desarrollo de sitios web y e-commerce, especializado en HTML, CSS, JavaScript, React y WordPress. Cuento con un sólido conocimiento en lógica de programación y las mejores prácticas de desarrollo, además de dominio completo del inglés y español.'
      },      
    },
  },
  contact : {
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
        number: 542234982114,
      },
      email : {
        id: 'email',
        value: 'bruno.lazo@outlook.com'
      }
    },
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
  },
  experience : {
    en : [
      [ "experience", "company", "location", "duration", "tasks" ],
      {
        company : 'lader agency',
        place : 'buenos aires, argentina (remote)',
        title : 'jr frontend developer',
        time : 'september 2023 – march 2024',
        tasks : [
          "Developed and redesigned websites and e-commerce stores using WordPress, WooCommerce, CSS, and JavaScript, improving usability and visual performance across all delivered projects.",
          "Integrated custom components via Elementor and basic PHP, tailoring CMS functionality to meet each client's specific requirements.",
          "Delivered projects on time while maintaining code quality standards, contributing to a client satisfaction rate above 90%."
        ]
      },
      {
        company : 'publissoft',
        place : 'quebec, canada (remote)',
        title : 'fullstack developer',
        time : 'august 2024 - august 2026 ',
        tasks : [
          "Developed and redesigned websites and e-commerce stores using WordPress, CSS, and JavaScript, achieving an average 30% reduction in page load time through asset optimization and code structure improvements.",
          "Built automated workflows with N8N that eliminated repetitive manual tasks for the team, reducing time spent on operational processes by approximately 40%.",
          "Implemented multilingual solutions using WPML for international clients, expanding site market coverage to 3+ simultaneous languages.",
          "Leveraged AI tools (ChatGPT, Claude, Gemini) for content optimization and code generation, accelerating delivery cycles by 25%.",
          "Collaborated with international teams in English (verbal and written), participating in code reviews, sprint meetings, and technical documentation delivery."
        ]
      }
    ],
    es : [
      [ "experiencia", "compañia", "ubicacion", "duracion", "tareas" ],
      {
        company : 'agencia lader',
        place : 'buenos aires, argentina (remoto)',
        title : 'desarrollador frontend jr',
        time : 'septiembre 2023 – marzo 2024',
        tasks : [
          "Desarrollé y rediseñé sitios web y tiendas e-commerce con WordPress, WooCommerce, CSS y JavaScript, mejorando la usabilidad y el visual de los proyectos entregados.",
          "Integré componentes personalizados mediante Elementor y PHP básico, adaptando las funcionalidades del CMS a los requerimientos específicos de cada cliente.",
          "Entregué proyectos dentro de los plazos acordados manteniendo estándares de calidad de código, contribuyendo a una tasa de satisfacción del cliente superior al 90%."
        ]
      },
      {
        company : 'publissoft',
        place : 'quebec, canadá (remoto)',
        title : 'desarrollador fullstack',
        time : 'agosto 2024 - agosto 2026',
        tasks : [
          "Desarrollé y rediseñé sitios web y e-commerce con WordPress, CSS y JavaScript, logrando una reducción promedio del 30% en el tiempo de carga de páginas mediante optimización de assets y estructura de código.",
          "Implementé automatizaciones con N8N que eliminaron tareas manuales repetitivas del equipo, reduciendo el tiempo dedicado a procesos operativos en aproximadamente un 40%.",
          "Integré soluciones multilenguaje con WPML para clientes internacionales, ampliando la cobertura de mercado de los sitios a más de 3 idiomas de forma simultánea.",
          "Incorporé herramientas de inteligencia artificial (ChatGPT, Claude, Gemini) para optimización de contenido y generación de código, acelerando los ciclos de entrega en un 25%.",
          "Colaboré con equipos internacionales en inglés (oral y escrito), participando en revisiones de código, reuniones de sprint y entrega de documentación técnica."
        ]
      }
    ]
  },
  education : {
    en : [
      [ "education", "institution", "place", "title", "duration", "status" ],
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
        site : 'rocky mount, north carolina, USA',
        title : 'bachelor in computer science',
        time : 'september 2018 - december 2018',
        status : 'unfinished'
      }
    ],
    es : [
      [ "educación", "institución", "ubicación", "título", "duración", "estado" ],
      {
        place : 'universidad nacional de mar del plata',
        site : 'mar del plata, argentina',
        title : 'ingeniería en informática',
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
        site : 'rocky mount, north carolina, EE. UU',
        title : 'bachelor en computer science',
        time : 'septiembre 2018 - diciembre 2018',
        status : 'incompleto'
      }
    ]
  },
  skills : {
    en : [
      ["skills", "programming languages", "frameworks", "databases", "tools", "languages"],
      ['HTML', 'CSS', 'SASS', 'JavaScript (ES6+)', 'TypeScript', 'PHP (intermediate)', 'C (intermediate)'],
      ['React.js', 'React Native', 'Nest.js', 'Node.js'],
      ['MySQL', 'PostgreSQL', 'MongoDB (Mongoose, TypeORM)'],
      ['WordPress', 'Elementor', 'WooCommerce', 'Git/GitHub', 'Docker', 'N8N', 'Figma'],
      ["Spanish (native speaker)", "C2 English – Certifications: SAT, TOEFL, Cambridge's First Certificate in English (FCE)"]
    ],
    es : [
      ["skills", "lenguajes de programación", "frameworks", "bases de datos", "herramientas", "idiomas"],
      ['HTML', 'CSS', 'SASS', 'JavaScript (ES6+)', 'TypeScript', 'PHP (intermedio)', 'C (intermedio)'],
      ['React.js', 'React Native', 'Nest.js', 'Node.js'],
      ['MySQL', 'PostgreSQL', 'MongoDB (Mongoose, TypeORM)'],
      ['WordPress', 'Elementor', 'WooCommerce', 'Git/GitHub', 'Docker', 'N8N', 'Figma'],
      ['Español (nativo)', 'Inglés avanzado (oral y escrito) – Certificaciones: SAT, TOEFL, First Certificate in English (FCE) de Cambridge']
    ]
  },
  projects : {
    en : [
      {
        link : "https://coffeecap.vercel.app/",
        github: "https://github.com/BLz13/GorraCafe-Lazo",
        title : "Coffee Cap",
        description : [
          "My first project as a developer, was built while learning the fundamentals of web development. It's a snapshot of where I started — HTML, CSS, and a few Bootstrap components, no frameworks, no build tools.",
          "I'm keeping it in the portfolio deliberately, alongside more recent work, to show the progression: how the code, structure, and design decisions have evolved since day one.",
          "It was built mobile-first and tested primarily on mobile and desktop, without a full cross-viewport review. As an early learning project, the HTML uses a wide mix of tags and the CSS takes several different approaches page to page — more exploration than a single consistent system.",
        ],
        imgs : {
          link : "/images/projects/coffee-cap/coffee-cap-",
          alts : [
            "Main page screen in mobile mode",
            "Main page screen in desktop mode",
            "Menu on the main page in mobile mode",
            "Menu on the main page in desktop mode",
            "Section two of the main page in mobile mode",
            "Section three of the main page in mobile mode",
            "Section two of the main page in desktop mode",
            "Section three of the main page in desktop mode",
            "Section four of the main page in mobile mode",
            "Footer on the main page",
            'First section of the "About Us" page in desktop mode',
            'First section of the "About Us" page in mobile mode',
            'Second section of the "About Us" page in mobile mode',
            'Second section of the "About Us" page in desktop mode',
            'Third section of the "About Us" page in desktop mode',
            'Fourth section of the "About Us" page in desktop mode',
            'Fifth section of the "About Us" page in desktop mode',
            'Sixth section of the "About Us" page in desktop mode',
            'First part of the coffee section of the "Our Menu" page in desktop mode',
            'Second part of the coffee section of the "Our Menu" page in desktop mode',
            'Food section of the "Our Menu" page in mobile mode',
            'Other drinks section of the "Our Menu" page in mobile mode',
            "Contact page in desktop format",
            "Contact page in mobile format",
            "Subscription page in mobile format",
            "Subscription page in desktop format"
          ]
        }
      },
      {
        link : "https://rock-pawper-claw.vercel.app/",
        github: "https://github.com/BLz13/Rock-Pawper-Claw",
        title : "Rock, Pawper, Claw",
        description : [
          "My second project, and the one that marks the beginning of my deeper work with JavaScript. This is where I started moving beyond static pages and learning how to make a website react to user interaction and manipulate the DOM.",
          "It's designed for desktop only, with no responsive layout for smaller screens. The project makes extensive use of JavaScript and DOM manipulation, from scroll-based effects to dynamically creating and appending elements, along with a few hidden Easter eggs powered by an API.",
          "Looking back, this project is an important step in my progression because it was the first time I started thinking about the page as something dynamic rather than just a collection of styled elements.",
        ],
        imgs : {
          link : "/images/projects/rock-pawper-claw/rock-pawper-claw-",
          alts : [
            "Home screen of personal web project, showcasing a game of rock, paper and scissors ",
            "Fields available to complete with personal name on the game",
            'Initial screen of the game showing three images one of a cat claw one of a cat paw and one of a "fist"',
            "Demonstration of how the game looks",
            "An advanced game"
          ]
        }
      },
      {
        link : "https://miniature-forest.vercel.app/",
        github: "https://github.com/BLz13/MiniatureForest",
        title : "Miniature Forest",
        description : [
          "My third project represents the next step in that progression: moving from vanilla JavaScript to React. This is where I started working with components and a more structured approach to building interfaces, while making the interactions feel smoother and more fluid.",
          "The project is unfinished, but I'm keeping it in the portfolio because it marks my first experience with React. It shows the point where I started changing the way I approached frontend development and moving toward the tools and patterns I use in more recent projects.",
          "It's another snapshot of the learning process rather than a finished product, and that's exactly why I want it here — to make the progression visible.",
        ],
        imgs : {
          link : "/images/projects/miniature-forest/miniature-forest-",
          alts : [
            "Hero of homepage",
            "Menu of the site",
            "Second section of home page showcasing some of the site's products",
            "Second section of homepage expanded",
            "Header cart expanded showing the product has been added to the cart",
            "About Us page",
            "Categories page",
            "Categories page product view expanded"
          ]
        }
      },
      {
        link : "",
        github: "https://github.com/BLz13/NotesApp",
        title : "Note'it",
        description : [
          "To wrap up my frontend development course, I decided to learn the fundamentals of React Native, and that's what this project represents. It was an opportunity to take what I had learned on the web and start applying the same ideas to a mobile application.",
          "The concept was intentionally simple: an upgraded notepad with no cloud accounts, usernames, or passwords. Just a text field, a simple SQL table to store the data, and the possibility of pairing an image with a note.",
          "The idea behind the project was to keep the experience as stripped-down as possible. I felt that note-taking apps were becoming increasingly overloaded with features, when sometimes all you need is a simple place to write a few thoughts and organize them into a small number of categories.",
        ],
        imgs : {
          link : "/images/projects/note-it/note-it-",
          alts : [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""          

          ]
        }
      },
      {
        link : "",
        github: "https://github.com/BLz13/backend-nest",
        title : "Backend Final Project",
        description : [
          "This was my final project from my backend development course, built with NestJS and TypeScript. This was the point where I moved from learning individual backend concepts to putting them together into a more complete, modular application.",
          "The project is structured around several core areas, including authentication, buyers, products, orders, categories, manufacturers, and operators. It uses DTOs, entities, services, controllers, database modules, validation, and JWT-based authentication to organize the application and its business logic.",
          "It also gave me experience working with both MongoDB/Mongoose and PostgreSQL/TypeORM, database migrations, environment configuration, API documentation with Swagger, and testing. I'm keeping it in the portfolio because it represents an important step in my progression from frontend-focused projects toward fullstack development and backend architecture."
        ],
        imgs : {
          link : "/images/projects/coffee-cap/coffee-cap-",
          alts : [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""          

          ]
        }
      },
      {
        link : "https://tech.lader.com.ar/",
        github: "",
        title : "Tech BA E-Commerce",
        description : [
          "My first major project as a developer, built as the final project of my internship at Lader Agency. Unlike my earlier personal projects, this was a real e-commerce website built for an active business, which meant working within an existing ecosystem while also finding ways to personalize and extend it.",
          "The site is primarily powered by WordPress and WooCommerce, but a large part of the work went beyond the default platform. I made extensive JavaScript and PHP customizations to adapt the interface, improve the user experience, and implement functionality specific to the project. The site includes product categories, individual product pages, shopping and cart functionality, responsive layouts, and the different content and commercial sections required by a real online store.",
          "This project represents an important point in my progression because it was my first opportunity to take what I had learned from smaller experimental projects and apply it to a larger production website with real requirements, an existing CMS and e-commerce platform, and a much greater need for customization, structure, and maintainability."
        ],
        imgs : {
          link : "/images/projects/tech-ba/tech-ba-",
          alts : [
            "Hero section of the Tech BA e-commerce homepage",
            "Tech BA e-commerce homepage",
            "Tech BA footer in mobile mode",
            "Hero section of the Tech BA e-commerce homepage in mobile mode",
            "Products page on Tech BA",
            "Tech BA e-commerce homepage in mobile mode",
            "Tech BA menu in mobile mode",
            "Products page on Tech BA in mobile mode",
            "First section of the product page in mobile mode",
            "Second section of the product page in mobile mode"
          ]
        }
      },
      {
        link : "",
        github: "https://github.com/BLz13/gpsGlutenFree",
        title : "Gluten Free GPS",
        description : [
          "After finishing my courses, most of my work shifted toward projects for different companies, either as a full-time employee or as a part-time intern. As a result, I haven't worked on personal projects as much as I would have liked. This is one of the exceptions — a project I started working on gradually and continue to develop whenever I have the time.",
          "The idea came from a personal experience after a trip. Given that I have Celiac Disease traveling to a different city often means figuring out where it is safe to eat, what places to visit, and whether food needs to be brought from home. It can turn what should be a simple part of traveling into a surprisingly exhausting research process.",
          "The concept was straightforward: a simple web app that helps people find places with suitable food options in the city they're visiting. The challenge, however, is much more technical than the idea suggests. Working with maps can be complex or expensive, and identifying establishments with appropriate options requires a considerable amount of research. It's still a work in progress, but little by little, the idea is becoming a real application.",
        ],
        imgs : {
          link : "/images/projects/coffee-cap/coffee-cap-",
          alts : [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""          

          ]
        }
      }
    ],
    es : [
      {
        link : "https://coffeecap.vercel.app/",
        github: "https://github.com/BLz13/GorraCafe-Lazo",
        title : "Coffee Cap",
        description : [
          "Mi primer proyecto como desarrollador, realizado mientras aprendía los fundamentos del desarrollo web. Es una muestra de dónde empecé: HTML, CSS y algunos componentes de Bootstrap, sin frameworks ni herramientas o IA.",
          "Decidí mantenerlo en el portfolio intencionalmente, junto con trabajos más recientes, para mostrar la evolución: cómo fueron cambiando el código, la estructura y las decisiones de diseño desde el primer día.",
          "Fue desarrollado con un enfoque mobile-first y probado principalmente en dispositivos móviles y desktop, sin realizar una revisión completa en todos los tamaños de pantalla. Al ser uno de mis primeros proyectos, el HTML utiliza una gran variedad de etiquetas y el CSS adopta diferentes enfoques según la página, más como una etapa de exploración que como un sistema completamente consistente.",
        ],
        imgs : {
          link : "/images/projects/coffee-cap/coffee-cap-",
          alts : [
            "Pantalla principal de la pagina en modo mobile",
            "Pantalla principal de la pagina en modo desktop",
            "Menu en pantalla principal de la pagina en modo mobile",
            "Menu en pantalla principal de la pagina en modo desktop",
            "Sección dos de la pagina principal en modo mobile",
            "Sección tres de la pagina principal en modo mobile",
            "Sección dos de la pagina principal en modo desktop",
            "Sección tres de la pagina principal en modo desktop",
            "Sección cuatro de la pagina principal en modo mobile",
            "Footer en la pagina principal",
            'Pagina "Sobre Nosotros" primera sección en desktop',
            'Pagina "Sobre Nosotros" primera sección en mobile',
            'Pagina "Sobre Nosotros" segunda sección en mobile',
            'Pagina "Sobre Nosotros" segunda sección en desktop',
            'Pagina "Sobre Nosotros" tercera sección en desktop',
            'Pagina "Sobre Nosotros" cuarta sección en desktop',
            'Pagina "Sobre Nosotros" quinta sección en desktop',
            'Pagina "Sobre Nosotros" sexta sección en desktop',
            'Pagina "Nuestra carta" sección de cafes parte uno en desktop',
            'Pagina "Nuestra carta" sección de cafes parte dos en desktop',
            'Pagina "Nuestra carta" sección de salados en mobile',
            'Pagina "Nuestra carta" sección de otras bebidas en mobile',
            "Pagina de contacto en formato desktop",
            "Pagina de contacto en formato mobile",
            "Pagina de suscripción en formato mobile",
            "Pagina de suscripción en formato desktop"
          ]
        }
      },
      {
        link : "https://rock-pawper-claw.vercel.app/",
        github: "https://github.com/BLz13/Rock-Pawper-Claw",
        title : "Rock, Pawper, Claw",
        description : [
          "Mi segundo proyecto y el que marca el comienzo de mi trabajo más profundo con JavaScript. Fue aquí donde empecé a ir más allá de las páginas estáticas y a aprender cómo hacer que un sitio responda a las interacciones del usuario y manipule el DOM.",
          "Está diseñado únicamente para desktop y no cuenta con un diseño responsive para pantallas más pequeñas. El proyecto utiliza JavaScript y manipulación del DOM de forma extensa, desde efectos basados en el scroll hasta la creación y agregado dinámico de elementos, además de algunos Easter eggs ocultos impulsados por una API.",
          "Visto en perspectiva, este proyecto representa un paso importante en mi evolución porque fue la primera vez que empecé a pensar en una página como algo dinámico y no simplemente como un conjunto de elementos estilizados.",
        ],
        imgs : {
          link : "/images/projects/rock-pawper-claw/rock-pawper-claw-",
          alts : [
            "Pantalla principal del juego de piedra papel y tijera pero utilizando gatos",
            "Campos disponibles para ingresar tu nombre y guardar la partida",
            'Imagen principal del juego en la que se muestran una unas patas de gato ilustrando el clásico piedra papel y tijera',
            "Demostración de una partida en curso",
            "Una partida de juego avanzada"
          ]
        }
      },
      {
        link : "https://miniature-forest.vercel.app/",
        github: "https://github.com/BLz13/MiniatureForest",
        title : "Miniature Forest",
        description : [
          "Mi tercer proyecto representa el siguiente paso de esa evolución: el cambio de JavaScript vanilla a React. Aquí empecé a trabajar con componentes y con una forma más estructurada de construir interfaces, haciendo que las interacciones se sintieran más fluidas y naturales.",
          "El proyecto está incompleto, pero decidí mantenerlo en el portfolio porque representa mi primera experiencia con React. Muestra el momento en el que empecé a cambiar mi forma de abordar el desarrollo frontend y a acercarme a las herramientas y patrones que utilizo en proyectos más recientes.",
          "Es otra muestra del proceso de aprendizaje y no un producto terminado, y justamente por eso quiero conservarlo: hace visible la evolución de mi trabajo.",
        ],
        imgs : {
          link : "/images/projects/coffee-cap/coffee-cap-",
          alts : [
            "Hero de la página principal",
            "Menú del sitio",
            "Segunda sección de la página principal mostrando algunos de los productos del sitio",
            "Segunda sección de la página principal expandida",
            "Carrito del header expandido mostrando que el producto fue agregado al carrito",
            "Página de Sobre Nosotros",
            "Página de categorías",
            "Vista de productos de la página de categorías expandida"
          ]
        }
      },
      {
        link : "",
        github: "https://github.com/BLz13/NotesApp",
        title : "Note'it",
        description : [
          "Para finalizar mi curso de desarrollo frontend, decidí aprender los fundamentos de React Native, y eso es lo que representa este proyecto. Fue una oportunidad para llevar los conocimientos que había adquirido en la web y empezar a aplicarlos en una aplicación móvil.",
          "La idea era intencionalmente simple: un bloc de notas mejorado, sin cuentas en la nube, usuarios ni contraseñas. Solo un campo de texto, una tabla SQL sencilla para almacenar los datos y la posibilidad de acompañar una nota con una imagen.",
          "La intención del proyecto era mantener la experiencia lo más simple posible. Sentía que las aplicaciones de notas estaban incorporando cada vez más funciones, cuando muchas veces solo necesitas un lugar sencillo para escribir algunas ideas y organizarlas en unas pocas categorías.",
        ],
        imgs : {
          link : "/images/projects/note-it/note-it-",
          alts : [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""          

          ]
        }
      },
      {
        link : "",
        github: "https://github.com/BLz13/backend-nest",
        title : "Backend Final Project",
        description : [
          "Este fue mi proyecto final del curso de desarrollo backend, desarrollado con NestJS y TypeScript. Este proyecto representa el momento en el que pasé de aprender conceptos individuales de backend a integrarlos dentro de una aplicación más completa y modular.",
          "El proyecto está organizado en diferentes áreas principales, incluyendo autenticación, compradores, productos, órdenes, categorías, fabricantes y operadores. Utiliza DTOs, entidades, servicios, controladores, módulos de base de datos, validación y autenticación basada en JWT para organizar la aplicación y su lógica de negocio.",
          "También me permitió adquirir experiencia trabajando tanto con MongoDB/Mongoose como con PostgreSQL/TypeORM, migraciones de base de datos, configuración mediante variables de entorno, documentación de la API con Swagger y testing. Decidí mantenerlo en el portfolio porque representa un paso importante en mi evolución desde proyectos principalmente frontend hacia el desarrollo fullstack y la arquitectura backend."
        ],
        imgs : {
          link : "/images/projects/coffee-cap/coffee-cap-",
          alts : [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""          

          ]
        }
      },
      {
        link : "https://tech.lader.com.ar/",
        github: "",
        title : "Tech BA E-Commerce",
        description : [
          "Mi primer proyecto de gran escala como desarrollador, realizado como proyecto final de mi pasantía en Agencia Lader. A diferencia de mis primeros proyectos personales, este fue un sitio de e-commerce real desarrollado para un negocio activo, lo que implicó trabajar dentro de un ecosistema existente y, al mismo tiempo, buscar formas de personalizarlo y ampliarlo.",
          "El sitio está desarrollado principalmente con WordPress y WooCommerce, pero gran parte del trabajo fue más allá de las funcionalidades que ofrece la plataforma por defecto. Realicé numerosas modificaciones con CSS, JavaScript y PHP para adaptar la interfaz, mejorar la experiencia de usuario e implementar funcionalidades específicas del proyecto. El sitio incluye categorías de productos, páginas individuales de productos, funcionalidades de compra y carrito, diseños responsive y las diferentes secciones de contenido y comerciales necesarias para una tienda online real.",
          "Este proyecto representa un punto importante en mi evolución porque fue mi primera oportunidad de llevar lo aprendido en proyectos experimentales más pequeños a un sitio de producción de mayor escala, con requerimientos reales, un CMS y una plataforma de e-commerce existentes, y una necesidad mucho mayor de personalización, estructura y mantenibilidad."
        ],
        imgs : {
          link : "/images/projects/tech-ba/tech-ba-",
          alts : [
            "Hero de la pagina principal del e-commerce de Tech BA",
            "Pagina principal del e-commerce de Tech BA",
            "Footer en modo mobile de Tech BA",
            "Hero de la pagina principal del e-commerce de Tech BA en mobile",
            "Pagina de productos en Tech BA",
            "Pagina principal del e-commerce de Tech BA en modo mobile",
            "Menu en modo mobile de Tech BA",
            "Pagina de productos en Tech BA en mobile",
            "Primera sección de la pagina de producto en mobile",
            "Segunda sección de la pagina de producto en mobile"
          ]
        }
      },
      {
        link : "",
        github: "https://github.com/BLz13/gpsGlutenFree",
        title : "Gluten Free GPS",
        description : [
          "Después de terminar mis cursos, la mayor parte de mi trabajo pasó a centrarse en proyectos para diferentes empresas, ya fuera como empleado de tiempo completo o como pasante de medio tiempo. Como resultado, no trabajé tanto en proyectos personales como me hubiera gustado. Este es una de las excepciones: un proyecto que comencé a desarrollar de forma gradual y que sigo trabajando cuando tengo tiempo.",
          "La idea surgió a partir de una experiencia personal después de un viaje. Siendo celiaco viajar a una ciudad diferente muchas veces implica investigar dónde es seguro comer, qué lugares visitar y si es necesario llevar comida desde casa. Algo que debería ser una parte sencilla del viaje puede convertirse en un proceso de investigación bastante agotador.",
          "El concepto era sencillo: una aplicación web que permita encontrar lugares con opciones adecuadas para comer en la ciudad que estás visitando. Sin embargo, el desafío es mucho más técnico de lo que parece. Trabajar con mapas puede ser complejo o costoso, y encontrar establecimientos con opciones adecuadas requiere bastante investigación. Todavía está en desarrollo, pero poco a poco la idea se está convirtiendo en una aplicación real.",
        ],
        imgs : {
          link : "/images/projects/coffee-cap/coffee-cap-",
          alts : [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""          

          ]
        }
      }
    ]
  },
  magicButton : {
    es : 'aplicar estilos',
    en : 'apply styles'
  }
};