'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header 
      className="flex justify-between items-center mb-1 py-0.5 relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 
        className="text-2xl font-medium self-center section-title"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        ADAM REZUC
      </motion.h1>
      
      {/* Navegación desktop */}
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
          href="#apartment" 
          className="text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium self-center"
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -2 }}
          transition={{ duration: 0.2 }}
        >
          El Departamento
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
          href="#testimonios" 
          className="text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium self-center"
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -2 }}
          transition={{ duration: 0.2 }}
        >
          Opiniones
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

      {/* Botón hamburguesa para móvil */}
      <motion.button
        className="md:hidden p-2"
        onClick={toggleMenu}
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Menú móvil desplegable */}
      {isMenuOpen && (
        <motion.div
          className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col py-4">
            <a 
              href="#hero" 
              className="px-6 py-3 text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </a>
            <a 
              href="#apartment" 
              className="px-6 py-3 text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              El Departamento
            </a>
            <a 
              href="#sobre-mi" 
              className="px-6 py-3 text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre mí
            </a>
            <a 
              href="#testimonios" 
              className="px-6 py-3 text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Opiniones
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Reservas
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
