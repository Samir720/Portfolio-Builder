import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";

export function Footer() {
  const [text, setText] = useState("");
  const fullText = "samir.dev";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          
          <Reveal>
            <div className="text-center md:text-left">
              <a href="#home" className="font-display text-3xl font-bold text-foreground">
                {text}
                <span className="animate-pulse text-primary">|</span>
              </a>
              <p className="mt-2 text-sm text-muted">Building digital experiences that actually work.</p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex gap-6 text-sm font-medium text-muted">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="https://github.com/Samir720/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a>
              <a href="https://linkedin.com/in/samirxdev/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            </div>
          </Reveal>

        </div>
        
        <Reveal delay={400}>
          <div className="mt-12 border-t border-border/50 pt-8 text-center text-xs text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Samir Mansuri. All rights reserved.</p>
            <p>Made and Maintain by Samir Mansuri.</p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
