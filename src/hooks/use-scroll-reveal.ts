import { useEffect, useRef, useState } from "react";

interface ScrollRevealOptions extends IntersectionObserverInit {
  retrigger?: boolean;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const { threshold = 0.1, rootMargin = "0px", retrigger = false } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!retrigger) observer.unobserve(element);
        } else if (retrigger) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, retrigger]);

  return { ref, isVisible };
}
