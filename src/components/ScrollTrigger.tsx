
import { useEffect, useRef, ReactNode } from "react";

interface ScrollTriggerProps {
  children: ReactNode;
  threshold?: number;
}

export const ScrollTrigger: React.FC<ScrollTriggerProps> = ({
  children,
  threshold = 0.2,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: threshold,
      }
    );

    const current = ref.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [threshold]);

  return (
    <div ref={ref} className="appear-on-scroll">
      {children}
    </div>
  );
};
