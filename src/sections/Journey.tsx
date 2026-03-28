import { Reveal } from "@/components/Reveal";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const TIMELINE = [
  { year: "2026", title: "Exploring AI/ML", desc: "Exploring AI/ML — built a chatbot with API integration, started working on a personal startup, and adapting to the new AI era." },
  { year: "2025", title: "BCA Started", desc: "Enrolled in ITM SLS Baroda University. Also learned FastAPI and participated in a Hackathon at university." },
  { year: "2024", title: "Frontend Mastery", desc: "Learned React.js and modern ES6+ JavaScript." },
  { year: "2023", title: "Backend Deep Dive", desc: "Learned Node.js, Express, MongoDB, and MySQL." },
  { year: "2022", title: "First Backend", desc: "Mastered PHP and databases like MySQL. Also learned jQuery." },
  { year: "2021", title: "Hello World", desc: "Wrote my first lines of HTML/CSS/JS." },
];

export function Journey() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="journey" className="py-32 border-b border-border">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal direction="left" className="mb-16">
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            The <span className="text-gradient">Journey</span>
          </h2>
        </Reveal>

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-ml-px">
            <div 
              ref={ref}
              className="w-full bg-gradient-to-b from-primary to-secondary"
              style={{
                height: isVisible ? '100%' : '0%',
                transition: 'height 2s cubic-bezier(0.2, 0.8, 0.2, 1)'
              }}
            />
          </div>

          {/* Timeline Nodes */}
          <div className="flex flex-col gap-12">
            {TIMELINE.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <Reveal key={i} delay={i * 200} className={`relative flex items-center justify-between md:justify-normal ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Center Dot */}
                  <div className="absolute left-4 h-4 w-4 -translate-x-[7px] rounded-full border-2 border-background bg-primary shadow-[0_0_10px_rgba(167,139,250,0.5)] md:left-1/2 md:-translate-x-1/2 z-10" />

                  {/* Content Box */}
                  <div className={`ml-12 w-full md:ml-0 md:w-[calc(50%-3rem)] ${isEven ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                    <div className="group rounded-2xl border border-border bg-surface p-6 transition-all hover:border-primary/50 hover:bg-surface-hover">
                      <span className="mb-2 block font-display text-xl font-bold text-primary">{item.year}</span>
                      <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Education Cards */}
        <div className="mt-24 grid gap-6 md:grid-cols-2">
          <Reveal delay={200}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-secondary/50">
              <div>
                <span className="mb-4 inline-block rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">In Progress</span>
                <h3 className="mb-2 font-display text-2xl font-bold text-foreground">Bachelor of Computer Applications</h3>
                <p className="text-muted">ITM SLS Baroda University</p>
              </div>
              <p className="mt-6 font-mono text-sm text-muted-foreground">2025 — 2028</p>
            </div>
          </Reveal>
          
          <Reveal delay={400}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-primary/50">
              <div>
                <span className="mb-4 inline-block rounded-full bg-surface-hover px-3 py-1 text-xs font-medium text-muted-foreground">Completed</span>
                <h3 className="mb-2 font-display text-2xl font-bold text-foreground">12th Commerce</h3>
                <p className="text-muted">The Iqbal Union High School</p>
              </div>
              <p className="mt-6 font-mono text-sm text-muted-foreground">2023 — 2025</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
