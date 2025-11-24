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
    image: "./src/assets/GitHubFinder.png",
  },
  {
    id: "ClientPanel",
    company: "Client Panel",
    title: "Client Management System",
    category: ["Angular"],
    image: "./src/assets/ClientPanel.png",
  },
  {
    id: "GameHub",
    company: "Game Hub",
    title: "Web Portal for Games",
    category: ["React"],
    image: "./src/assets/GameHub.png",
  },
  {
    id: "ProStore",
    company: "ProStore",
    title: "E Commerce Website",
    category: ["React", "Next.js"],
    image: "./src/assets/ProStore.png",
  },
  {
    id: "Proshop",
    company: "Proshop",
    title: "E Commerce Website",
    category: ["React", "Node.js", "Express", "MongoDB"],
    image: "./src/assets/Proshop.png",
  },
 
  {
    id: "Support Portal",
    company: "Support Portal",
    title: "Customer Support System",
    category: ["Angular", "Java", "Spring"],
    image: "./src/assets/SupportPortal.png",
  }
];
