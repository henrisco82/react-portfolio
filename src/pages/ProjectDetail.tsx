import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
            <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
            <Link to="/projects">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <Link to="/projects" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold mb-2">{project.company}</h1>
            <p className="text-xl text-primary-foreground/90">{project.title}</p>
          </div>
        </section>

        {/* Project Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Project Image */}
            <div className="mb-12">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Project Details */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Technology Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="md:col-span-1">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Project Links</h3>
                  <div className="space-y-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center w-full bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View on GitHub
                        <ExternalLink className="w-4 h-4 ml-auto" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>

                  {/* Categories */}
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
                      Categories
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.category.map((cat) => (
                        <span
                          key={cat}
                          className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
