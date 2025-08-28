'use client';

import { motion } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.section 
      className="mb-16" 
      id="sobre-mi"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2 
        className="text-4xl md:text-5xl font-normal leading-tight mb-8"
        variants={itemVariants}
      >
        Sobre mí
      </motion.h2>
      
      {/* Contenido principal */}
      <div className="flex flex-col lg:flex-row items-stretch">
        {/* Foto de Adam - 1/3 del ancho */}
        <motion.div 
          className="lg:w-1/3"
          variants={imageVariants}
        >
          <img 
            alt="Adam - Tu anfitrión" 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          />
        </motion.div>
        
        {/* Información de Adam - 2/3 del ancho con fondo negro */}
        <motion.div 
          className="lg:w-2/3 bg-black text-white p-16"
          variants={containerVariants}
        >
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <motion.p 
              className="text-xl text-gray-300 leading-relaxed tracking-wide"
              variants={itemVariants}
            >
              Soy Adam Rezuc, anfitrión y propietario del departamento. Me ocupo personalmente de cada detalle: 
              desde la reserva hasta la entrega de llaves y el mantenimiento del espacio. Mi objetivo es que te 
              sientas como en casa, con confianza y transparencia, sin intermediarios ni complicaciones.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
