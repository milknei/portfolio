import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  threejs,
  itstep,
  udemy,
  training,
  promptai,
  yuriy,
  dmytro,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Web Developer',
    icon: web,
  },
  {
    title: 'React Developer',
    icon: backend,
  },
  {
    title: 'NextJS Developer',
    icon: mobile,
  },
  {
    title: 'Angular Developer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Front End Web Developerr',
    company_name: 'IT Step',
    icon: itstep,
    iconBg: '#085494',
    date: 'July 2022 - July 2023',
    points: [
      'Fast and high quality formatting of complex web documents.',
      'Advanced knowledge and usage of HTML, CSS, JavaScript (ES6 and older versions).',
      'Ability to create web applications based on Figma designs.',
      'Checking and debugging the code of web documents.',
      'Ability to handle errors.',
      'Creating functions-handlers of various events in subtleties.',
      'Understanding the implementation of client scenarios for different browsers.',
      'Principles of creating forms and analyzing user data using regular expressions.',
      'Principles of creating asynchronous requests using Ajax.',
      'Version control systems.',
      'Understand the principles of teamwork.',
      'Using unit testing.',
      'Basics of interacting with NodeJS.',
      'Understand the details of using Webpack.',
      'Ability to do data binding in an Angular application.',
      'Applying Dependency Injection.',
      'Understanding the intricacies of implementing React application.',
      'Ability to use Flux and Redux..',
    ],
  },
  {
    title: 'JavaScript - The Complete Guide',
    company_name: 'Udemy',
    icon: udemy,
    iconBg: '#FFFFFF',
    date: 'Dec 2022 - Jan 2023',
    points: [
      'Learn JavaScript from scratch and in great detail - from beginner to advanced',
      'All core features and concepts you need to know in modern JavaScript development',
      'Everything you need to become a JavaScript expert and apply for JavaScript jobs',
      'Project-driven learning with plenty of examples',
      'All about variables, functions, objects and arrays',
      'Object-oriented programming',
      'Deep dives into prototypes, JavaScript engines & how it works behind the scenes',
      'Manipulating web pages (= the DOM) with JavaScript',
      'Event handling, asynchronous coding and Http requests',
      'Meta-programming, performance optimization, memory leak busting',
      'Testing, security and deployment',
      'And so much more!',
    ],
  },
];

const testimonials = [
  {
    testimonial: `I'm happy to graduate a diligent, decent student with strong desire to improve.`,
    name: 'Yuriy Ivaniv',
    designation: 'Teacher',
    company: 'IT STEP Academy',
    image: yuriy,
  },
  {
    testimonial: "Danylo always cares about user experience and quality of entrusted projects.",
    name: 'Dmytro Kovalenko',
    designation: 'IT/Cyber Security Specialist',
    company: '',
    image: dmytro,
  },
];

const projects = [
  {
    name: 'Prompt AI',
    description:
      'A Full-Stack Web Application for creating and sharing AI prompts with other users with implemented Google autorisation.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'nextauth',
        color: 'blue-text-gradient',
      },
    ],
    image: promptai,
    source_code_link: 'https://github.com/milknei/gym-rats-React-MUI',
    deploy_link: 'https://prompt-ai-next-js-tailwind.vercel.app',
  },
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/milknei/CarRent-NextJS-TS-Tailwind',
    deploy_link: 'https://car-rent-mu.vercel.app/',
  },
  {
    name: 'Training App',
    description:
      'Web application that enables users to search for exercises, how to do them and view related YouTube videos',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: training,
    source_code_link: 'https://github.com/milknei/gym-rats-React-MUI',
    deploy_link: 'https://gym-ratss.netlify.app/',
  },
];

export { services, technologies, experiences, testimonials, projects };
