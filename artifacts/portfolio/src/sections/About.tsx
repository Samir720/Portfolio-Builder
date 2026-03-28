import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

function StatCounter({ end, suffix = "", label }: { end: number, suffix?: string, label: string }) {
  const { ref, isVisible } = useScrollReveal();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    const duration = 1500;
    
    const easeOutOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(end * easeOutOutQuart(percentage)));
      
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };
    
    requestAnimationFrame(step);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="flex flex-col gap-1 border-l-2 border-border pl-6">
      <div className="font-display text-5xl font-extrabold text-foreground md:text-6xl">
        {count}{suffix}
      </div>
      <div className="text-sm font-medium uppercase tracking-wider text-muted">
        {label}
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-32 border-b border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          
          <div className="flex flex-col gap-8">
            <Reveal direction="left">
              <h2 className="font-display text-4xl font-bold md:text-5xl lg:text-6xl">
                About <span className="text-gradient">Me.</span>
              </h2>
            </Reveal>
            
            <Reveal delay={100}>
              <div className="prose prose-invert max-w-none text-lg leading-relaxed text-muted">
                <p>
                  I'm a Full Stack Web Developer located in Godhra, Gujarat, currently pursuing my BCA at ITM SLS Baroda University while working at adXcode Agency.
                </p>
                <p>
                  I bridge the gap between design and engineering — combining my technical knowledge with a keen eye for aesthetics to create beautiful, functional, and highly performant web applications. From complex backend architectures in Node.js to sleek frontend interfaces in React, I build digital experiences from the ground up.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3">
                {["Problem Solver", "UI/UX Enthusiast", "Clean Code Advocate", "Lifelong Learner"].map((trait) => (
                  <span 
                    key={trait} 
                    className="rounded-full bg-surface px-4 py-2 text-sm font-medium text-foreground border border-border border-l-primary/50 hover:border-l-primary transition-colors"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-16 lg:gap-y-20">
            <StatCounter end={3} suffix=".5+" label="Years Exp" />
            <StatCounter end={10} suffix="+" label="Projects" />
            <StatCounter end={100} suffix="%" label="Satisfaction" />
            <StatCounter end={24} suffix="/7" label="Support" />
          </div>

        </div>
      </div>
    </section>
  );
}
