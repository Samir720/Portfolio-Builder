import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // 1.2s minimum display time
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // 0.5s fade out duration
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={cn(
        "fixed inset-0 z-[999] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ease-in-out",
        isFadingOut ? "opacity-0" : "opacity-100"
      )}
    >
      <div className={cn(
        "flex flex-col items-center gap-4 transition-all duration-500 ease-in-out",
        isFadingOut ? "scale-110 opacity-0 blur-sm" : "scale-100 opacity-100"
      )}>
        <h1 className="text-4xl font-display font-bold tracking-tighter text-foreground">
          samir<span className="text-primary">.dev</span>
        </h1>
        <div className="h-1 w-32 overflow-hidden rounded-full bg-surface">
          <div className="h-full w-full bg-gradient-to-r from-primary to-secondary animate-pulse-glow" />
        </div>
      </div>
    </div>
  );
}
