'use client';

import { motion } from 'framer-motion';

export default function Header() {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.header 
      className="flex justify-between items-center mb-1 py-0.5"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 
        className="text-2xl font-medium self-center"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        ADAM
      </motion.h1>
      
      {/* Navegación alineada a la derecha */}
      <motion.nav 
        className="hidden md:flex space-x-8 self-center"
        variants={containerVariants}
      >
        <motion.a 
          href="#hero" 
          className="text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium self-center"
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -2 }}
          transition={{ duration: 0.2 }}
        >
          Inicio
        </motion.a>
        <motion.a 
          href="#sobre-mi" 
          className="text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium self-center"
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -2 }}
          transition={{ duration: 0.2 }}
        >
          Sobre mí
        </motion.a>
        <motion.a 
          href="#apartment" 
          className="text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium self-center"
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -2 }}
          transition={{ duration: 0.2 }}
        >
          El Departamento
        </motion.a>
        <motion.a 
          href="#contact" 
          className="text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium self-center"
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -2 }}
          transition={{ duration: 0.2 }}
        >
          Reservas
        </motion.a>
      </motion.nav>
    </motion.header>
  );
}
