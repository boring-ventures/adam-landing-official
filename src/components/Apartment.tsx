'use client';

import { motion } from 'framer-motion';
import { sectionVariants, titleVariants, imageVariants, cardVariants, textVariants, fadeInVariants } from '../hooks/useScrollAnimation';

export default function Apartment() {

  return (
    <motion.section 
      id="apartment" 
      className="mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
              variants={sectionVariants}
    >
              <motion.h2 
          className="text-4xl md:text-5xl font-normal leading-tight mb-12"
          variants={titleVariants}
        >
        Departamento
      </motion.h2>
      
      {/* Galería de imágenes */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration: 1,
              staggerChildren: 0.15
            }
          }
        }}
      >
        <div className="space-y-8">
          <motion.img 
            alt="Sala de estar moderna con muebles elegantes" 
            className="w-full h-80 object-cover" 
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            variants={imageVariants}
          />
          <motion.img 
            alt="Cocina equipada con electrodomésticos modernos" 
            className="w-full h-64 object-cover" 
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            variants={imageVariants}
          />
        </div>
        <div className="space-y-8">
          <motion.img 
            alt="Dormitorio principal con cama king size" 
            className="w-full h-64 object-cover" 
            src="https://images.unsplash.com/photo-1560448075-bb485b067938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            variants={imageVariants}
          />
          <motion.img 
            alt="Baño moderno con ducha de lluvia" 
            className="w-full h-80 object-cover" 
            src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            variants={imageVariants}
          />
        </div>
      </motion.div>

      {/* Información del espacio */}
      <motion.div 
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration: 1,
              staggerChildren: 0.15
            }
          }
        }}
      >
        {/* Descripción principal */}
        <motion.div 
          className="mb-8 max-w-2xl"
          variants={textVariants}
        >
          <p className="text-lg text-gray-600 leading-relaxed">
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
                    duration: 1,
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              <motion.div 
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -3 }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">Ubicación</h3>
                <p className="text-gray-600">Altos del Sol, San Martín de los Andes</p>
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
