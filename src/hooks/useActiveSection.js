import { useState, useEffect } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Handle scroll with Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
      }
    );

    // Observe all sections
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    // Handle click events on navigation links
    const handleClick = (event) => {
      const href = event.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        setActiveSection(href.substring(1));
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      observer.disconnect();
      document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return activeSection;
}