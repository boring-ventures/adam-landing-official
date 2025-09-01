'use client';

import { useEffect, useState } from 'react';

export function useMobileOptimization() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Duración de animaciones optimizada para móvil
  const getDuration = (desktopDuration: number) => {
    return isMobile ? desktopDuration * 0.5 : desktopDuration;
  };

  // Stagger optimizado para móvil
  const getStagger = (desktopStagger: number) => {
    return isMobile ? desktopStagger * 0.5 : desktopStagger;
  };

  return {
    isMobile,
    getDuration,
    getStagger
  };
}
