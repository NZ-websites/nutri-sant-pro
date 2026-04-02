import { useEffect, useRef, useState, RefObject } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {}
): [RefObject<T>, boolean] {
  const { threshold = 0.15, rootMargin = "0px 0px -40px 0px", once = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isVisible];
}

/** CSS classes for common reveal patterns */
export const reveal = {
  base: "transition-all duration-700 ease-out",
  hidden: "opacity-0 translate-y-8",
  visible: "opacity-100 translate-y-0",
  hiddenLeft: "opacity-0 -translate-x-8",
  visibleLeft: "opacity-100 translate-x-0",
  hiddenRight: "opacity-0 translate-x-8",
  visibleRight: "opacity-100 translate-x-0",
  hiddenScale: "opacity-0 scale-95",
  visibleScale: "opacity-100 scale-100",
} as const;

export function revealClass(isVisible: boolean, variant: "up" | "left" | "right" | "scale" = "up", delay?: string) {
  const delayClass = delay ? `delay-${delay}` : "";
  const hidden = variant === "left" ? reveal.hiddenLeft
    : variant === "right" ? reveal.hiddenRight
    : variant === "scale" ? reveal.hiddenScale
    : reveal.hidden;
  const visible = variant === "left" ? reveal.visibleLeft
    : variant === "right" ? reveal.visibleRight
    : variant === "scale" ? reveal.visibleScale
    : reveal.visible;
  return `${reveal.base} ${delayClass} ${isVisible ? visible : hidden}`;
}
