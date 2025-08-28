import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useScrollAnimation = (threshold = 0.3) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, 
    amount: threshold,
    margin: "-50px 0px -50px 0px"
  });

  return { ref, isInView };
};

// Variantes optimizadas para scroll perfecto
export const sectionVariants = {
  hidden: { 
    opacity: 0,
    y: 60
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut" as const,
      staggerChildren: 0.15
    }
  }
};

export const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const
    }
  }
};

export const titleVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut" as const
    }
  }
};

export const imageVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
    y: 30
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut" as const
    }
  }
};

export const textVariants = {
  hidden: { 
    opacity: 0, 
    x: -40 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut" as const
    }
  }
};

export const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    x: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const
    }
  }
};

export const fadeInVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const
    }
  }
};

export const slideInVariants = {
  hidden: { 
    opacity: 0, 
    x: -50 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut" as const
    }
  }
};

export const slideInRightVariants = {
  hidden: { 
    opacity: 0, 
    x: 50 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut" as const
    }
  }
};
