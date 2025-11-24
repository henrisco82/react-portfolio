// src/pages/ProjectsPage.tsx
import { useState } from "react";
import ProjectFilter from "../components/ProjectFilter";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Projects() {
    const [filter, setFilter] = useState("All");

    const filters = ["All", "Angular", "React", "Python/FastAPI", "Node.js", "Java/Spring"];

    const filteredProjects =
        filter === "All"
            ? projects
            : projects.filter((p) => p.category.includes(filter));

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            {/* Project Header */}
            <section className="bg-primary text-primary-foreground py-16">
                <div className="container mx-auto px-4 ">
                    <h3 className="text-2xl md:text-5xl font-bold mb-2">Projects</h3>
                    <p className="text-xl max-w-2xl">
                        In-depth Case Studies to show you what I can offer and how I work
                    </p>
                </div>
            </section>
            <main>
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <ProjectFilter filters={filters} selected={filter} onChange={setFilter} />

                    <div className="grid md:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} {...project} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
