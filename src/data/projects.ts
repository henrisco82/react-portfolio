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
}

export const projects: Project[] = [
  {
    id: "GitHubFinder",
    company: "GitHub Finder",
    title: "Find GitHub Profiles",
    category: ["React"],
    image: GitHubFinderImg,
  },
  {
    id: "ClientPanel",
    company: "Client Panel",
    title: "Client Management System",
    category: ["Angular"],
    image: ClientPanelImg,
  },
  {
    id: "GameHub",
    company: "Game Hub",
    title: "Web Portal for Games",
    category: ["React"],
    image: GameHubImg,
  },
  {
    id: "ProStore",
    company: "ProStore",
    title: "E Commerce Website",
    category: ["React", "Next.js"],
    image: ProStoreImg,
  },
  {
    id: "Proshop",
    company: "Proshop",
    title: "E Commerce Website",
    category: ["React", "Node.js", "Express", "MongoDB"],
    image: ProshopImg,
  },
  {
    id: "Support Portal",
    company: "Support Portal",
    title: "Customer Support System",
    category: ["Angular", "Java", "Spring"],
    image: SupportPortalImg,
  }
];
