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
    company: "Hubby Project",
    title: "GitHub Finder",
    category: ["React"],
    image: "./src/assets/GitHubFinder.png",
  },
  {
    id: "ClientPanel",
    company: "Hubby Project",
    title: "Webapp Development",
    category: ["Angular"],
    image: "./src/assets/ClientPanel.png",
  },
  {
    id: "GameHub",
    company: "Hobby Project",
    title: "Game Hub",
    category: ["React"],
    image: "./src/assets/GameHub.png",
  },
  {
    id: "ProStore",
    company: "Hubby Project",
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
    title: "Support Portal",
    category: ["Angular", "Java", "Spring"],
    image: "./src/assets/SupportPortal.png",
  },
   {
    id: "AuthApp",
    company: "AuthApp",
    title: "Single Sign-On App with Okta",
    category: ["Angular", "Okta", "HTML/CSS"],
    image: "./src/assets/evernote.jpg",
  },
  {
    id: "zendesk",
    company: "Zendesk",
    title: "Customer Support Portal",
    category: ["Vue", "Node.js", "Express"],
    image: "/images/zendesk.jpg",
  },
  {
    id: "coinbase",
    company: "Coinbase",
    title: "Crypto Wallet",
    category: ["Next.js", "TypeScript", "Tailwind"],
    image: "/images/coinbase.jpg",
  },
];
