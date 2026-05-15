import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";
import { Home, ArrowLeft } from "lucide-react";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { Cursor } from "@/components/Cursor";

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground overflow-hidden">
      <NoiseOverlay />
      <Cursor />
      
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px] animate-drift" />

      <div className="relative z-10 text-center px-6">
        <Reveal>
          <h1 className="font-display text-[150px] md:text-[200px] font-extrabold leading-none tracking-tighter text-outline opacity-30 select-none">
            404
          </h1>
        </Reveal>
        
        <div className="relative">
          <Reveal delay={200}>
            <h2 className="font-display text-4xl md:text-6xl font-bold mt-[-40px] md:mt-[-60px]">
              Lost in <span className="text-gradient">Space?</span>
            </h2>
          </Reveal>
          
          <Reveal delay={400}>
            <p className="mt-6 text-muted-foreground max-w-md mx-auto text-lg leading-relaxed">
              The page you're looking for has drifted into another dimension. 
              Don't worry, we can help you find your way back.
            </p>
          </Reveal>
          
          <Reveal delay={600}>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/">
                <button className="group relative flex items-center gap-3 px-10 py-4 bg-primary text-background font-bold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(167,139,250,0.4)] cursor-pointer">
                  <Home size={20} />
                  Back to Earth
                  <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </Link>
              
              <button 
                onClick={() => window.history.back()}
                className="flex items-center gap-3 px-10 py-4 border border-border hover:bg-surface transition-all duration-300 rounded-full text-muted-foreground hover:text-foreground group cursor-pointer"
              >
                <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                Previous Page
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Subtle Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </div>
  );
}
