import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const title1 = "Hi, I'm Samir.".split(" ");
  const title2 = "I Build the Web.".split(" ");

  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background radial glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-drift rounded-full bg-primary/15 blur-[120px] filter" />

      <div className="relative z-10 w-full max-w-7xl px-6 text-center">
        
        {/* Availability Badge */}
        <div 
          className={`mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-border/50 bg-surface/50 px-4 py-1.5 backdrop-blur-sm transition-all duration-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
        >
          <span className="relative flex h-2.5 w-2.5 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary"></span>
          </span>
          <span className="text-xs font-medium uppercase tracking-wider text-secondary">Available for work</span>
          <span className="text-secondary/50">✦</span>
        </div>

        {/* Giant Headings */}
        <h1 className="flex flex-col items-center justify-center gap-2 font-display text-5xl font-extrabold tracking-tighter sm:text-7xl lg:text-8xl xl:text-[7rem]">
          <div className="flex flex-wrap justify-center gap-3">
            {title1.map((word, i) => (
              <span 
                key={i} 
                className={mounted ? "word-anim" : "opacity-0"} 
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {word}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {title2.map((word, i) => {
              const isWeb = word.includes("Web");
              return (
                <span 
                  key={i} 
                  className={`inline-block ${mounted ? "word-anim" : "opacity-0"} ${isWeb ? "text-outline font-bold italic" : ""}`}
                  style={{ animationDelay: `${(title1.length + i) * 120}ms` }}
                >
                  {word}
                </span>
              );
            })}
          </div>
        </h1>

        {/* Subtext */}
        <p 
          className={`mx-auto mt-8 max-w-2xl text-lg text-muted md:text-xl transition-all duration-700 delay-600 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          Full Stack Developer · MERN Stack · PHP · Based in India
          <br className="hidden sm:block" /> Building digital experiences that actually work.
        </p>

        {/* CTAs */}
        <div 
          className={`mt-10 flex flex-wrap items-center justify-center gap-4 transition-all duration-700 delay-[900ms] ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <a 
            href="#projects" 
            className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary/90 px-8 py-4 font-semibold text-background shadow-[0_4px_20px_rgba(167,139,250,0.25)] transition-all hover:scale-105 hover:shadow-[0_4px_25px_rgba(167,139,250,0.4)]"
          >
            View Projects
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a 
            href="#contact" 
            className="rounded-xl border border-border bg-surface/50 px-8 py-4 font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-surface hover:text-primary"
          >
            Let's Connect
          </a>
        </div>
      </div>

      {/* Infinite Marquee Ticker */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-y border-border bg-surface/30 py-4 backdrop-blur-sm">
        <div className="flex animate-marquee items-center gap-12 whitespace-nowrap">
          {/* Duplicate list for seamless loop */}
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex gap-12">
              {['React.js', 'Node.js', 'MongoDB', 'Express', 'PHP', 'Tailwind CSS', 'Next.js', 'MySQL', 'TypeScript', 'Figma'].map((tech, i) => (
                <span key={i} className="flex items-center gap-4 font-display text-xl font-bold uppercase tracking-wider text-muted/50 hover:text-primary/80 transition-colors cursor-default">
                  {tech}
                  <span className="text-primary/30">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
