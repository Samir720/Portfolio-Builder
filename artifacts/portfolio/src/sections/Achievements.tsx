import { Reveal } from "@/components/Reveal";
import { Star, Trophy, Users, Heart, BookOpen, Brain } from "lucide-react";

const ACHIEVEMENTS = [
  { icon: Trophy, title: "Top Performer", desc: "Consistently delivered high-quality projects at adXcode Agency.", year: "2024" },
  { icon: Star, title: "Open Source", desc: "Active contributor to community repositories and tools.", year: "Ongoing" },
  { icon: Brain, title: "Full Stack Expert", desc: "Mastered end-to-end web architecture and deployment.", year: "2024" },
  { icon: Heart, title: "Client Champion", desc: "Maintained 100% satisfaction rating across freelance clients.", year: "Ongoing" },
  { icon: BookOpen, title: "Growth Advocate", desc: "Committed to continuous learning and skill upgrading.", year: "2023-28" },
  { icon: Users, title: "Problem Solver", desc: "Excel at debugging complex logical and structural issues.", year: "Ongoing" },
];

export function Achievements() {
  return (
    <section className="py-32 border-b border-border">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal direction="left" className="mb-16">
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            <span className="text-gradient">Recognition</span> & Impact
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((item, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="group flex h-full items-start gap-4 rounded-2xl bg-transparent p-4 transition-all hover:bg-surface border border-transparent hover:border-border">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface border border-border text-primary transition-transform group-hover:scale-110 group-hover:bg-primary/10">
                  <item.icon size={20} />
                </div>
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display font-bold text-foreground">{item.title}</h3>
                    <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">{item.year}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
