'use client';

import { motion } from 'framer-motion';
import { sectionVariants, titleVariants, imageVariants, cardVariants, textVariants, fadeInVariants } from '../hooks/useScrollAnimation';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Apartment() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  return (
    <motion.section 
      id="apartment" 
      className="mb-8 md:mb-16"
      initial="hidden"
      {...(isMobile ? { whileInView: "visible", viewport: { once: false, amount: 0.05 } } : { whileInView: "visible", viewport: { once: false, amount: 0.1 } })}
      variants={sectionVariants}
    >
                              <motion.h2 
          className="text-4xl md:text-5xl font-normal leading-tight mb-12 section-title"
          variants={titleVariants}
        >
        Departamento
      </motion.h2>
      
      {/* Galería de imágenes */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 md:mb-16"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration: 0.6,
              staggerChildren: 0.1
            }
          }
        }}
      >
        <div className="space-y-8">
          <motion.div variants={imageVariants}>
            <Image 
              alt="Apartamento 1 - Vista general del departamento" 
              className="w-full h-80 object-cover" 
              src="/apartment1.jpg"
              width={400}
              height={320}
            />
          </motion.div>
          <motion.div variants={imageVariants}>
            <Image 
              alt="Apartamento 2 - Detalle del espacio" 
              className="w-full h-64 object-cover" 
              src="/apartment2.jpg"
              width={400}
              height={256}
            />
          </motion.div>
        </div>
        <div className="space-y-8">
          <motion.div variants={imageVariants}>
            <Image 
              alt="Apartamento 3 - Vista adicional del departamento" 
              className="w-full h-64 object-cover" 
              src="/apartment3.jpg"
              width={400}
              height={256}
            />
          </motion.div>
          <motion.div variants={imageVariants}>
            <Image 
              alt="Apartamento 4 - Detalle final del espacio" 
              className="w-full h-80 object-cover" 
              src="/apartment4.jpg"
              width={400}
              height={320}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Información del espacio */}
      <motion.div 
        className="w-full"
        initial="hidden"
        {...(isMobile ? { whileInView: "visible", viewport: { once: false, amount: 0.05 } } : { whileInView: "visible", viewport: { once: false, amount: 0.1 } })}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration: 0.6,
              staggerChildren: 0.1
            }
          }
        }}
      >
        {/* Descripción principal */}
        <motion.div 
          className="mb-8 max-w-2xl"
          variants={textVariants}
        >
          <p className="text-lg text-gray-600 leading-relaxed body-text">
            Un departamento de 1 habitación en el corazón de San Martín de los Andes, 
            diseñado para ofrecerte una estadía cómoda y memorable en la Patagonia argentina.
          </p>
        </motion.div>

        {/* Características principales */}
        <motion.div 
          className="border-t border-gray-200 pt-8 mb-8"
          variants={fadeInVariants}
        >
          <div className="flex justify-end">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 text-right"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 0.6,
                    staggerChildren: 0.08
                  }
                }
              }}
            >
              <motion.div 
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -3 }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">Ubicación</h3>
                <p className="text-gray-600">Av. San Martín #1359, Dpto. 26, Centro, San Martín de los Andes</p>
              </motion.div>
              
              <motion.div 
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -3 }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">Habitación</h3>
                <p className="text-gray-600">Cama king size con ropa de cama premium</p>
              </motion.div>
              
              <motion.div 
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -3 }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">Cocina</h3>
                <p className="text-gray-600">Completa con electrodomésticos modernos</p>
              </motion.div>
              
              <motion.div 
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -3 }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">Entretenimiento</h3>
                <p className="text-gray-600">Smart TV 55&quot; y WiFi de alta velocidad</p>
              </motion.div>
              
              <motion.div 
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -3 }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">Vistas</h3>
                <p className="text-gray-600">Panorámicas a las montañas y balcón</p>
              </motion.div>
              
              <motion.div 
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -3 }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">Servicios</h3>
                <p className="text-gray-600">Limpieza incluida y check-in 24/7</p>
              </motion.div>
            </motion.div>
        </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
