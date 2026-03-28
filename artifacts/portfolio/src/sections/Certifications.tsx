import { Reveal } from "@/components/Reveal";
import { Award } from "lucide-react";

const CERTS = [
  { title: "Web Design & Development", issuer: "Skill India Digital", year: "2024", tags: ["HTML", "CSS", "UI/UX"] },
  { title: "PHP Development", issuer: "Great Learning", year: "2024", tags: ["PHP", "Backend"] },
  { title: "Skill Development Program", issuer: "HDRC", year: "2025", tags: ["Soft Skills", "Tech"] },
  { title: "Deloitte Job Simulation", issuer: "Deloitte", year: "2025", tags: ["Consulting", "Analysis"] },
];

export function Certifications() {
  return (
    <section className="py-32 border-b border-border bg-surface/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal direction="left" className="mb-16">
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            <span className="text-gradient">Certifications</span>
          </h2>
        </Reveal>

        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 md:grid md:grid-cols-2 md:overflow-visible md:pb-0" style={{ perspective: '800px' }}>
          {CERTS.map((cert, i) => (
            <Reveal key={i} delay={i * 150} className="min-w-[85vw] snap-center sm:min-w-[400px] md:min-w-0">
              <div 
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-transform duration-500 ease-out hover:border-primary/30 hover:-translate-y-2 hover:rotate-y-[-4deg] shadow-lg"
              >
                {/* Year Badge */}
                <div className="absolute -right-6 -top-6 flex h-24 w-24 items-end justify-start rounded-full bg-primary/10 p-5 transition-transform duration-500 group-hover:scale-110">
                  <span className="font-display font-bold text-primary">{cert.year}</span>
                </div>

                <div>
                  <Award className="mb-6 h-10 w-10 text-secondary opacity-80" />
                  <h3 className="mb-2 pr-8 font-display text-2xl font-bold text-foreground leading-tight">{cert.title}</h3>
                  <p className="text-muted">{cert.issuer}</p>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-2">
                  {cert.tags.map(tag => (
                    <span key={tag} className="rounded-md bg-background px-3 py-1 text-xs font-medium text-muted-foreground border border-border/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
