import { Variants } from 'framer-motion';

export interface CustomVariants extends Variants {
  hidden: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
    transition: {
      duration: number;
      ease: string;
      staggerChildren?: number;
    };
  };
}
