// src/data/projects.ts

import GitHubFinderImg from "../assets/GitHubFinder.png";
import ClientPanelImg from "../assets/ClientPanel.png";
import GameHubImg from "../assets/GameHub.png";
import ProStoreImg from "../assets/ProStore.png";
import ProshopImg from "../assets/ProShop.png";
import SupportPortalImg from "../assets/SupportPortal.png";

export interface Project {
  id: string;
  company: string;
  title: string;
  category: string[];
  image: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "GitHubFinder",
    company: "GitHub Finder",
    title: "Find GitHub Profiles",
    category: ["React"],
    image: GitHubFinderImg,
    description: "A responsive web application that allows users to search for GitHub profiles and view detailed information about developers. Features include user profile display, repository listings, follower/following counts, and direct links to GitHub profiles. Built with modern React practices including hooks and context API.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "GitHub API", "Axios"],
    githubUrl: "https://github.com/yourusername/github-finder",
    demoUrl: "https://yourusername.github.io/github-finder",
  },
  {
    id: "ClientPanel",
    company: "Client Panel",
    title: "Client Management System",
    category: ["Angular"],
    image: ClientPanelImg,
    description: "A comprehensive client management dashboard built with Angular. Features include client registration, profile management, appointment scheduling, and reporting capabilities. Designed for businesses to efficiently manage their client relationships and track interactions.",
    techStack: ["Angular", "TypeScript", "RxJS", "Angular Material", "Firebase"],
    githubUrl: "https://github.com/yourusername/client-panel",
    demoUrl: "https://yourusername.github.io/client-panel",
  },
  {
    id: "GameHub",
    company: "Game Hub",
    title: "Web Portal for Games",
    category: ["React"],
    image: GameHubImg,
    description: "An interactive gaming portal featuring multiple browser-based games with user authentication, score tracking, and social features. Includes classic games like Tetris, Snake, and memory games with responsive design and smooth animations.",
    techStack: ["React", "JavaScript", "CSS3", "HTML5 Canvas", "Local Storage"],
    githubUrl: "https://github.com/yourusername/game-hub",
    demoUrl: "https://yourusername.github.io/game-hub",
  },
  {
    id: "ProStore",
    company: "ProStore",
    title: "E Commerce Website",
    category: ["React", "Next.js"],
    image: ProStoreImg,
    description: "A full-featured e-commerce platform built with Next.js featuring product catalogs, shopping cart functionality, user authentication, and payment processing. Includes admin dashboard for inventory management and order tracking.",
    techStack: ["Next.js", "React", "TypeScript", "Stripe API", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/prostore",
    demoUrl: "https://yourusername.github.io/prostore",
  },
  {
    id: "Proshop",
    company: "Proshop",
    title: "E Commerce Website",
    category: ["React", "Node.js", "Express", "MongoDB"],
    image: ProshopImg,
    description: "A complete e-commerce solution with full-stack implementation. Features include user authentication, product management, order processing, payment integration, and admin controls. Built with the MERN stack for scalability and performance.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "PayPal API", "Bootstrap"],
    githubUrl: "https://github.com/yourusername/proshop",
    demoUrl: "https://yourusername.github.io/proshop",
  },
  {
    id: "Support Portal",
    company: "Support Portal",
    title: "Customer Support System",
    category: ["Angular", "Java", "Spring"],
    image: SupportPortalImg,
    description: "A comprehensive customer support ticketing system with both frontend and backend components. Features include ticket creation, assignment, status tracking, knowledge base, and customer portal. Designed for efficient customer service operations.",
    techStack: ["Angular", "Java", "Spring Boot", "MySQL", "JPA", "WebSocket", "JWT"],
    githubUrl: "https://github.com/yourusername/support-portal",
    demoUrl: "https://yourusername.github.io/support-portal",
  }
];
