import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', {
  // eslint-disable-next-line no-unused-labels
  state: () => ({
    experience: [
      {
        id: 1,
        duration: 'Jan 2026 – Jun 2026',
        title: 'Développeur Full-Stack — Mission (6 mois)',
        company: 'Reeboot · Lyon Part-Dieu · Sur site',
        stack: ['React', 'TypeScript', 'Tailwind CSS', 'Strapi', 'Leaflet', 'PWA', 'Capacitor'],
        description:
          'Conception de Lost Pet App, plateforme web mobile-first pour signaler, suivre et retrouver les animaux perdus. Développement full-stack avec React, TypeScript et Tailwind CSS — cartes interactives (Leaflet), fonctionnalités temps réel, support PWA hors ligne et déploiement mobile via Capacitor. Backend propulsé par Strapi headless CMS avec SQLite / PostgreSQL.'
      },
      {
        id: 2,
        duration: 'Nov 2024 – Feb 2025',
        title: 'Développeur Full-Stack — Mission (4 mois)',
        company: 'HDM Network ASBL · Belgique · Remote',
        stack: ['React', 'TypeScript', 'NestJS', 'Docker', 'MySQL', 'GraphQL'],
        description:
          'Contribution à deux applications en production pour une organisation luttant contre la fracture numérique. Livraison de TimesheetIO (suivi du temps, facturation et analytics) et My Web Companion (hub de productivité pour liens, connaissances et tâches quotidiennes). Stack : TypeScript, React, NestJS, Docker et MySQL — avec un focus sur l’architecture, la performance et la qualité du code.'
      },
      {
        id: 3,
        duration: '2025 – présent',
        title: 'Développeur Web Full-Stack Freelance',
        company: 'ShawilTech · Lyon · Remote',
        stack: ['React', 'Angular', 'TypeScript', 'NestJS', 'Spring Boot', 'Docker', 'PostgreSQL', 'GraphQL'],
        description:
          'Création de sites vitrine, e-commerce et applications web pour TPE, artisans, indépendants et associations. Auto-entrepreneur — consultation gratuite, devis transparent, livraison orientée résultats.'
      }
    ],

    education: [
      {
        id: 1,
        duration: 'Jun 2025 – Jun 2026',
        title: 'Bachelor Concepteur Développeur d’Applications (Bac +3)',
        company: 'M2i Formation',
        stack: ['Java', 'Spring Boot', 'Angular', 'React', 'MySQL', 'MongoDB', 'Docker'],
        description:
          'Formation full-stack orientée projets : Java, Spring Boot, Angular et React. Conception de bases de données avec MySQL et MongoDB, front-end avec HTML5, CSS, JavaScript et TypeScript, et conteneurisation avec Docker. Fort accent sur l’architecture logicielle, les pratiques agiles et les workflows de développement professionnel.'
      },
      {
        id: 2,
        duration: 'Avr 2024 – Fév 2025',
        title: 'Développeur Web et Web Mobile',
        company: 'AFPA',
        stack: ['React', 'Node.js', 'TypeScript', 'NestJS', 'MongoDB', 'MySQL', 'GraphQL', 'Docker'],
        description:
          'Formation intensive Bac+2 : React, Node.js, Express, MongoDB, MySQL, TypeScript, NestJS, GraphQL, Prisma et Docker.'
      },
      {
        id: 3,
        duration: 'Nov 2023 – Déc 2023',
        title: 'Programme de fondation Apple — Développement mobile iOS',
        company: 'Simplon, Lyon',
        stack: ['Swift', 'iOS', 'UX Design'],
        description:
          'UX design, bases du langage Swift, conception d’interfaces mobiles et création d’une application iOS.'
      },
      {
        id: 4,
        duration: 'Mai 2023 – Juil 2023',
        title: 'Objectif Numérique (WordPress)',
        company: 'Simplon, Lyon',
        stack: ['HTML', 'CSS', 'WordPress'],
        description:
          'Logique de programmation, HTML, CSS, CMS WordPress, conception d’interfaces web et mobile, création de site web.'
      },
      {
        id: 5,
        duration: '2017 – 2020',
        title: 'Licence en Informatique (enseignement en anglais)',
        company: 'Comboni, Khartoum, Soudan',
        stack: ['JavaScript', 'Java', 'C++', 'SQL'],
        description:
          'Acquisition des bases en JavaScript, Java, C++ et SQL.'
      }
    ],

    AboutDescriptionData:
      "Je suis développeur web full-stack freelance basé à Lyon (Vénissieux), fondateur de ShawilTech. J'accompagne les TPE, artisans, indépendants et associations à créer des sites vitrine, boutiques en ligne et applications web qui transforment leurs visiteurs en clients — vous travaillez directement avec moi, sans agence intermédiaire. Diplômé d'une formation intensive à l'AFPA (Bac+2) et en Bachelor Concepteur Développeur d'Applications (M2i), je suis spécialisé dans React, Angular, TypeScript, NestJS, Spring Boot, Docker, PostgreSQL et GraphQL. J'ai livré des projets concrets comme Lost Pet App (Reeboot), TimesheetIO et My Web Companion (HDM Network), ainsi que NetProxi et des applications e-commerce. Autonome et orienté résultats, je propose une consultation gratuite, une réponse sous 24h et des livraisons performantes (design responsive, SEO, PWA)."
  })
})
