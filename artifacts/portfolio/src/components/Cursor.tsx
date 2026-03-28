import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let requestRef: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Instantly update the dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
      
      // Check hover state on interactive elements
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest('a, button, input, textarea, [role="button"]'));
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    // Lerp function for the ring to trail slightly
    const render = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      
      requestRef = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    requestRef = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(requestRef);
    };
  }, []);

  return (
    <div className="custom-cursor pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      {/* Center dot */}
      <div 
        ref={dotRef}
        className={cn(
          "absolute left-0 top-0 h-2.5 w-2.5 rounded-full bg-primary transition-transform duration-200 ease-out will-change-transform",
          isHovering && "scale-50 opacity-50",
          isClicking && "scale-75"
        )}
      />
      {/* Outer ring */}
      <div 
        ref={ringRef}
        className={cn(
          "absolute left-0 top-0 h-9 w-9 rounded-full border border-primary transition-all duration-300 ease-out will-change-transform",
          isHovering && "h-16 w-16 border-secondary bg-secondary/10",
          isClicking && "h-8 w-8 bg-secondary/20"
        )}
      />
    </div>
  );
}
