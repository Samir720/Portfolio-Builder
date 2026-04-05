import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const FILTERS = ["All", "Full Stack", "Frontend", "Backend"];

const PROJECTS = [
  {
    title: "E-Commerce Platform",
    desc: "A fully functional digital storefront with cart management, user authentication, and Stripe payment integration.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Full Stack",
    gradient: "from-purple-900/40 to-black"
  },
  {
    title: "Task Management App",
    desc: "Real-time collaborative kanban board with drag-and-drop functionality and team roles.",
    tags: ["React", "Firebase", "Tailwind CSS"],
    category: "Full Stack",
    gradient: "from-emerald-900/40 to-black"
  },
  {
    title: "Social Media Dashboard",
    desc: "Analytics dashboard parsing millions of data points into interactive visualizations.",
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    category: "Full Stack",
    gradient: "from-blue-900/40 to-black" // Internal visual variance
  },
  {
    title: "Weather Dashboard",
    desc: "Location-aware weather forecasting app using third-party APIs with beautiful dynamic backgrounds.",
    tags: ["React", "OpenWeather API", "Chart.js"],
    category: "Frontend",
    gradient: "from-sky-900/40 to-black"
  },
  {
    title: "REST API Server",
    desc: "Robust backend architecture featuring JWT auth, role-based access control, and complex database relations.",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT"],
    category: "Backend",
    gradient: "from-gray-800/40 to-black"
  },
  {
    title: "Portfolio Website",
    desc: "High-performance personal portfolio built with modern frontend paradigms and custom CSS animations.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"], // Kept original tags per instructions
    category: "Frontend",
    gradient: "from-primary/20 to-surface"
  }
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = PROJECTS.filter(p => activeFilter === "All" || p.category === activeFilter);

  return (
    <section id="projects" className="py-32 border-b border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal direction="left">
            <h2 className="font-display text-4xl font-bold md:text-5xl">
              Selected <span className="text-gradient">Work</span>
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-wrap gap-2 rounded-full border border-border bg-surface p-1">
              {FILTERS.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "rounded-full px-6 py-2 text-sm font-medium transition-all duration-300",
                    activeFilter === filter 
                      ? "bg-border text-foreground shadow-sm" 
                      : "text-muted hover:text-foreground"
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_10px_30px_-10px_rgba(109,129,150,0.15)]">
                
                {/* CSS Placeholder Image */}
                <div className={cn("h-48 w-full bg-gradient-to-br transition-transform duration-700 group-hover:scale-105", project.gradient)}>
                  <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnPgo8cmVjdCB3aWR0aD0nOCcgaGVpZ2h0PSc4JyBmaWxsPSd0cmFuc3BhcmVudCcvPgo8cGF0aCBkPSdNMCAwaDh2OEgwWicgZmlsbD0nIzExMScgZmlsbC1vcGFjaXR5PScwLjEnLz4KPC9zdmc+')] opacity-50 mix-blend-overlay" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                    <div className="flex gap-2 text-muted">
                      <a href="#" className="hover:text-foreground transition-colors" aria-label="Github"><Github size={18} /></a>
                      <a href="#" className="hover:text-primary transition-colors" aria-label="Live Demo"><ExternalLink size={18} /></a>
                    </div>
                  </div>
                  
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">{project.desc}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="rounded bg-background px-2.5 py-1 text-[11px] font-medium text-muted-foreground border border-border/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
