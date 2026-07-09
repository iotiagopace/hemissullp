import { useEffect, useContext } from 'react';
import ProjectContext from '@/components/context/ProjectContext';

export function useOnePageMenuScroll(
    sections: string[] = [
        "home",
        "about",
        "services",
        "news",
        "testimonial",
        "contact",
    ],
) {
    const context = useContext(ProjectContext);
    const setActiveSection = context?.setActiveSection;

    useEffect(() => {
        if (!setActiveSection) return;
        setActiveSection(sections[0] ?? "home");

    function handleScroll() {
      if (!setActiveSection) return;
      const windscroll = window.scrollY;
      const offset = 100;

      if (windscroll >= 117) {
        const scrollPosition = windscroll + offset;
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section) {
            const sectionTop = section.getBoundingClientRect().top + window.scrollY;
            if (sectionTop <= scrollPosition) {
              setActiveSection(sections[i]);
              return;
            }
          }
        }
      } else {
        setActiveSection(sections[0] ?? 'home');
      }
    }

    let ticking = false;
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [setActiveSection, sections]);
}