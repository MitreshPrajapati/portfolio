import tyreplex from "../assets/tyre-plex.png";
import rbac_assignment from "../assets/rbac-assignment.png";
import sephora_clone from "../assets/sephora-clone.png";
import sugar_cosmetics from "../assets/sugar-cosmetics-clone.png";
import indeed_clone from "../assets/indeed-clone.png";
import blog_webapp from "../assets/blog-webapp.png";
import hotel from "../assets/hotel-management.png";
import khaleeji from "../assets/khaleeji.png";
import one_coid from "../assets/1Coid.png";
import angela from "../assets/angela.png";
import type { PortfolioData, Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    image: tyreplex,
    title: "TyrePlex",
    github: "https://github.com/MitreshPrajapati/TyrePlex",
    live: "https://tyre-plex.vercel.app/",
    show_git_url: true,
    show_live_url: true,
    tech: ["HTML", "CSS", "Javascript"],
    description:
      "A responsive static web page built with HTML & CSS, showcasing clean design, structured layout, and cross-device compatibility.",
  },
  {
    id: 2,
    image: rbac_assignment,
    title: "Role Based Access Control",
    github: "https://github.com/MitreshPrajapati/rahane-ai-tech-assignment",
    live: "https://github.com/MitreshPrajapati/rahane-ai-tech-assignment",
    show_git_url: true,
    show_live_url: false,
    tech: [
      "Next.js",
      "Tailwind css",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "ContextApi",
    ],
    description:
      "A full-stack role-based dashboard where Admins manage users, Editors manage content, and Viewers have read-only access, with a commenting feature for all users.",
  },
  {
    id: 3,
    image: blog_webapp,
    title: "Blog-Webapp",
    github: "https://github.com/MitreshPrajapati/blogApp",
    live: "https://blog-web-app-phi.vercel.app/",
    show_git_url: true,
    show_live_url: true,
    tech: [
      "React.js",
      "Chakra-Ui",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "Multer",
    ],
    description:
      "A full-stack web application that allows users to create and share their own blog posts while exploring posts from others. Each user can perform full CRUD operations (Create, Read, Update, Delete) on their own posts, while being able to view posts from all users in a centralized feed.",
  },
  // {
  //     id: 4,
  //     image: 'img',
  //     title: "title",
  //     github: 'http://github.com',
  //     live: 'http://github.com',
  //     show_git_url: false,
  //     show_live_url: false,

  // },
  {
    id: 5,
    image: sephora_clone,
    title: "Sephora clone",
    github: "https://github.com/skismile/team-Sephora_project",
    live: "https://cloneshephora.netlify.app/",
    show_git_url: true,
    show_live_url: true,
    tech: ["HTML", "CSS", "javascript"],
    description:
      "An e-commerce web app built with HTML, CSS & JS, featuring login/signup, cart, checkout, and dummy payment flow with data persistence using localStorage.",
  },
  {
    id: 6,
    image: sugar_cosmetics,
    title: "Sugar Cosmetics clone",
    github: "https://github.com/RohitMBelure/Project_Sugar_Cosmetics",
    live: "https://beautiful-nasturtium-8b89b4.netlify.app/",
    show_git_url: true,
    show_live_url: true,
    tech: ["HTML", "CSS", "javascript"],
    description:
      "A front-end e-commerce app built with HTML, CSS & JS, featuring login/signup, cart, checkout, and dummy payment flow with data persistence using localStorage.",
  },
  {
    id: 7,
    image: indeed_clone,
    title: "Indeed clone",
    github: "https://github.com/Chhattoo25/curved-knee-365",
    live: "https://indeed-clone-ten.vercel.app/",
    show_git_url: true,
    show_live_url: true,
    tech: ["React.js", "Styled-Components", "Redux", "CSS"],
    description:
      "A single-page job-search application built with React and Redux, using mocked JSON data as the backend. Features include searchable & filterable job listings, pagination, job detail pages, and a mock “Apply” flow. State is managed via Redux to demonstrate scalable front-end architecture and predictable data flows.",
  },
  {
    id: 8,
    image: khaleeji,
    title: "Website + CMS Admin panel",
    github: "https://github.com/MitreshPrajapati/blogApp",
    live: "https://blog-web-app-phi.vercel.app/",
    show_git_url: false,
    show_live_url: false,
    tech: ["React.js", "CSS"],
    description:
      "A content management system with an admin panel to manage content and a public website that dynamically reflects updates.",
  },
  {
    id: 9,
    image: hotel,
    title: "Hotel Booking & Managemet",
    github: "https://github.com/MitreshPrajapati/blogApp",
    live: "https://blog-web-app-phi.vercel.app/",
    show_git_url: false,
    show_live_url: false,
    tech: ["React.js", "CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
    description:
      "Built an admin panel and backend for hotel staff to manage rooms, bookings, check-ins/check-outs, staff roles, housekeeping tasks, and reports. Developed secure REST APIs.",
  },
  {
    id: 10,
    image: angela,
    title: "Swim School Managemet",
    github: "https://github.com/MitreshPrajapati/blogApp",
    live: "https://www.angelasswimlessons.com/",
    show_git_url: false,
    show_live_url: true,
    tech: ["React.js", "Sass", "Redux"],
    description:
      "This project is an advanced role-based management system for a swim school. The application provides an admin panel with granular role-based access control, ensuring that different users (such as admins, instructors, staff, and parents) have access only to the functionalities relevant to their roles.",
  },
  {
    id: 11,
    image: one_coid,
    title: "1Coid: Lost & Found",
    github: "https://github.com/MitreshPrajapati/blogApp",
    live: "https://play.google.com/store/apps/details?id=com.one_coid&hl=en-IN&pli=1",
    show_git_url: false,
    show_live_url: true,
    tech: ["React Native", "FMC", "CSS", "ContextApi"],
    description:
      "A React Native mobile app where users can report lost/found items, search listings, and connect with others to return belongings.",
  },
];

export const frontend_skills = [
  {
    name: "HTML",
    level: "Experienced",
  },
  {
    name: "CSS",
    level: "Experienced",
  },
  {
    name: "Javascript",
    level: "Experienced",
  },
  {
    name: "React.js",
    level: "Experienced",
  },
  {
    name: "React Native",
    level: "Intermediate",
  },
  {
    name: "Redux.js",
    level: "Experienced",
  },
  {
    name: "Next.js",
    level: "Experienced",
  },
  {
    name: "TypeScript",
    level: "Intermediate",
  },
  {
    name: "Tailwind",
    level: "Experienced",
  },
  {
    name: "API Integration",
    level: "Experienced",
  },
];

export const backend_skills = [
  {
    name: "Node.js",
    level: "Experienced",
  },
  {
    name: "Express.js",
    level: "Experienced",
  },
  {
    name: "MongoDB",
    level: "Experienced",
  },
  {
    name: "PostgreSQL",
    level: "Basic",
  },
  {
    name: "Nest.js",
    level: "Basic",
  },
  {
    name: "REST API",
    level: "Experienced",
  },
  {
    name: "JWT / OAuth",
    level: "Experienced",
  },
];

export const devops_tools = [
  {
    name: "Git",
    level: "Experienced",
  },
  {
    name: "Postman",
    level: "Experienced",
  },
  {
    name: "NPM",
    level: "Experienced",
  },
  {
    name: "Docker",
    level: "Intermediate",
  },
  {
    name: "VS Code",
    level: "Experienced",
  },
  {
    name: "Vercel",
    level: "Intermediate",
  },
  {
    name: "Digital Ocean",
    level: "Intermediate",
  },
  {
    name: "AWS",
    level: "Basic",
  },
];

export const portfolio = {
  navigation: [
    "About",
    "Skills",
    "Experience",
    "Education",
    "Projects",
    "Contact",
  ],
  // navigation: ["About", "Skills", "Impact", "Experience", "Education", "Projects", "Contact"],
  developerAccounts: {
    github: ["MitreshPrajapati", "sd-mitresh"],
    gitlab: "MitreshPrajapati",
  },
  featuredSkills: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "Redux",
    "Docker",
    "AWS",
    "Git",
  ],
  stats: [
    { value: "2+", label: "Years of experience" },
    { value: "20+", label: "Projects completed" },
    { value: "10+", label: "Technologies used" },
  ],
  skillGroups: [
    { id: "frontend", title: "Frontend", skills: frontend_skills },
    { id: "backend", title: "Backend", skills: backend_skills },
    { id: "tools", title: "Tools & Cloud", skills: devops_tools },
  ],
  experience: [
    {
      id: "indo-sakura-nodejs-developer",
      period: "March 2026 - October 2026",
      startDate: "2026-03",
      endDate: "2026-10",
      role: "Software Developer",
      company: "Indo Sakura Software",
      description:
        "Developed and maintained reliable backend services and APIs using Node.js, with a focus on clean architecture, performance, and production-ready code.",
      highlights: [
        "Node.js backend development",
        "REST API development",
        "Production application maintenance",
      ],
    },
    {
      id: "ijona-software-developer",
      period: "April 2023 - June 2025",
      startDate: "2023-04",
      endDate: "2025-06",
      role: "Software Developer",
      company: "IJONA Technologies",
      description:
        "Developed and maintained production web applications, responsive user interfaces, backend services, and API integrations across the JavaScript stack.",
      highlights: [
        "Full-stack application development",
        "Frontend and backend integration",
        "Production software maintenance",
      ],
    },
    // {
    //     id: "frontend-developer",
    //     period: "2022 - 2023",
    //     role: "Frontend Developer",
    //     company: "Web application projects",
    //     description: "Developed responsive commerce and product experiences with reusable UI patterns, predictable state management, and API integrations.",
    //     highlights: ["Responsive UI development", "Redux state management", "Performance-focused implementation"],
    // },
  ],
  education: [
    {
      id: "ba-english-ignou",
      period: "2026",
      degree: "Bachelor of Arts (Honours) - English",
      institution: "Indira Gandhi National Open University (IGNOU)",
      description:
        "Undergraduate degree focusing on English literature, advanced communication, critical analysis, and writing.",
    },
    {
      id: "masai-mern-stack",
      period: "2023",
      degree: "MERN Full Stack Certification Course",
      institution: "Masai School",
      description:
        "Intensive training program in Full Stack Web Development covering MongoDB, Express.js, React.js, Node.js, Data Structures & Algorithms, and modern web application development.",
    },
    {
      id: "senior-secondary-12th",
      period: "2020",
      degree: "Higher Secondary Certificate (12th Grade) - Science",
      institution: "PCMB (Physics, Chemistry, Mathematics,Biology)",
      description:
        "Completed 12th board examinations in the Science stream (PCMB) with 67% aggregate.",
    },
  ],
} satisfies PortfolioData;
