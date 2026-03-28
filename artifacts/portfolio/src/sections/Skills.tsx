import { Reveal } from "@/components/Reveal";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const SKILLS = [
  { name: "MySQL", percent: 98 },
  { name: "HTML", percent: 95 },
  { name: "CSS", percent: 90 },
  { name: "PHP", percent: 90 },
  { name: "JavaScript", percent: 85 },
  { name: "Node.js", percent: 75 },
  { name: "MongoDB", percent: 75 },
  { name: "Express.js", percent: 70 },
  { name: "React", percent: 70 },
  { name: "Next.js", percent: 70 },
];

const TOOLS = ["VS Code", "Postman", "Git", "GitHub", "Figma", "Supabase", "MySQL Workbench", "Chrome DevTools"];

function ProgressBar({ name, percent, index }: { name: string, percent: number, index: number }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="flex justify-between text-sm font-medium">
        <span className="text-foreground">{name}</span>
        <span className="text-muted">{percent}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-surface border border-border">
        <div 
          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
          style={{ 
            width: isVisible ? `${percent}%` : '0%',
            transition: `width 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) ${index * 100}ms`
          }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-32 border-b border-border bg-surface/20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal direction="left" className="mb-16">
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Stack & <span className="text-gradient">Tools</span>
          </h2>
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Progress Bars */}
          <div className="flex flex-col gap-6">
            {SKILLS.map((skill, i) => (
              <ProgressBar key={skill.name} name={skill.name} percent={skill.percent} index={i} />
            ))}
          </div>

          {/* Tools Grid */}
          <div>
            <h3 className="mb-8 font-display text-2xl font-semibold text-foreground">Everyday Arsenal</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {TOOLS.map((tool, i) => (
                <Reveal 
                  key={tool} 
                  delay={i * 60} 
                  className="flex h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-primary/50 hover:bg-surface-hover"
                >
                  <span className="font-medium text-muted hover:text-foreground transition-colors">{tool}</span>
                </Reveal>
              ))}
            </div>
            
            <Reveal delay={600} className="mt-12 rounded-2xl border border-border/50 bg-gradient-to-br from-surface to-background p-6">
              <h4 className="font-display font-semibold text-primary mb-2">Constantly Evolving</h4>
              <p className="text-sm text-muted leading-relaxed">
                Technology moves fast. I spend my free time exploring new frameworks, refining my architecture skills, and optimizing for web performance.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
