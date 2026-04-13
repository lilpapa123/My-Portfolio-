import {
  mobile,
   web,
  javascript,
  typescript,
  html,
  dart,
  flutter,
  python,
  css,
  reactjs,
  NTGClarity,
  tailwind,
  git,
  figma,
  GoGrabit,
  threejs,
  Musteng,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Figma Designer",
    icon: figma,
  },
];

const technologies = [
   {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Dart",   
    icon: dart,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  }
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "NTG Clarity",
    icon: NTGClarity,
    iconBg: "#383E56",
    date: "April 2026 - Present",
    points: [
      "Contributed to the development of production-level full-stack applications using JavaScript and PostgreSQL.",
      "Enhanced application performance by optimizing SQL queries and database operations.",
      "Designed scalable database schemas and ensured consistency and data integrity.",
      "Participated in backend system design and collaborated with team members on architecture decisions.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  
  {
    name: "GoGrabit",
    description:
      "A Flutter-based shopping app with product browsing, cart functionality, and backend powered by Node.js and Express.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: GoGrabit,
    source_code_link: "https://github.com/lilpapa123/GoGrabit",
  },


  {
    name: "Mustang Shop",
    description:
      "Developed a responsive Ford Mustang-themed website featuring a product shop, interactive gallery, and dynamic UI using HTML, CSS, and JavaScript",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: Musteng,
    source_code_link: "https://github.com/lilpapa123/Mustang-website-project",
  },
];

export { services, technologies, experiences, testimonials, projects };
