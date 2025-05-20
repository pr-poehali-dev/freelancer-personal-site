
import { useState, useEffect } from "react";

interface VisibilityState {
  hero: boolean;
  about: boolean;
  projects: boolean;
  contact: boolean;
}

export const useVisibility = () => {
  const [isVisible, setIsVisible] = useState<VisibilityState>({
    hero: false,
    about: false,
    projects: false,
    contact: false,
  });

  useEffect(() => {
    const animateElements = () => {
      setTimeout(() => setIsVisible(prev => ({ ...prev, hero: true })), 300);
      setTimeout(() => setIsVisible(prev => ({ ...prev, about: true })), 600);
      setTimeout(() => setIsVisible(prev => ({ ...prev, projects: true })), 900);
      setTimeout(() => setIsVisible(prev => ({ ...prev, contact: true })), 1200);
    };

    animateElements();
  }, []);

  return isVisible;
};
