import { useEffect, useState } from "react";

export default function useSectionObserver(sectionRefs) {
  const [activeSection, setActiveSection] = useState("Home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.dataset.section);
          }
        });
      },
      { threshold: 0.5 }
    );
    sectionRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [sectionRefs]);

  return activeSection;
}
