'use client';

import { motion } from 'framer-motion';

export default function Contact() {
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
        ease: "easeOut"
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const contactVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      id="contact" 
      className="mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2 
        className="text-4xl md:text-5xl font-normal leading-tight mb-8"
        variants={itemVariants}
      >
        Reservas y Contacto
      </motion.h2>

      <motion.div 
        className="max-w-6xl"
        variants={containerVariants}
      >
        {/* Formulario y contacto lado a lado */}
        <motion.div 
          className="flex flex-col lg:flex-row gap-16"
          variants={containerVariants}
        >
          {/* Formulario */}
          <motion.div 
            className="lg:w-2/3"
            variants={formVariants}
          >
            <motion.form 
              className="space-y-8"
              variants={containerVariants}
            >
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Nombre completo
                  </label>
                  <motion.input 
                    type="text" 
                    className="w-full px-6 py-4 border-b border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
                    placeholder="Tu nombre"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Email
                  </label>
                  <motion.input 
                    type="email" 
                    className="w-full px-6 py-4 border-b border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
                    placeholder="tu@email.com"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Fecha de llegada
                  </label>
                  <motion.input 
                    type="date" 
                    className="w-full px-6 py-4 border-b border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Fecha de salida
                  </label>
                  <motion.input 
                    type="date" 
                    className="w-full px-6 py-4 border-b border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Mensaje
                </label>
                <motion.textarea 
                  rows={4}
                  className="w-full px-6 py-4 border-b border-gray-300 focus:outline-none focus:border-gray-900 transition-colors resize-none"
                  placeholder="Cuéntame sobre tu viaje o cualquier consulta especial..."
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                ></motion.textarea>
              </motion.div>

              <motion.button 
                type="submit"
                className="w-full border-2 border-black text-black py-4 px-8 text-lg font-medium hover:bg-black hover:text-white transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Enviar Consulta
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Contacto directo */}
          <motion.div 
            className="lg:w-1/3"
            variants={contactVariants}
          >
            <motion.h3 
              className="text-xl font-medium text-gray-900 mb-8"
              variants={itemVariants}
            >
              Contacto Directo
            </motion.h3>
            <motion.div 
              className="space-y-4 mb-8"
              variants={containerVariants}
            >
              <motion.a 
                href="https://wa.me/34600000000?text=Hola%20Adam,%20me%20interesa%20reservar%20tu%20departamento"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full border-2 border-green-600 text-green-600 py-4 px-8 font-medium hover:bg-green-600 hover:text-white transition-all duration-300 text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                WhatsApp
              </motion.a>
              <motion.a 
                href="mailto:hola@adam.com?subject=Consulta%20de%20Reserva"
                className="block w-full border-2 border-gray-900 text-gray-900 py-4 px-8 font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Email
              </motion.a>
            </motion.div>

            {/* Dirección */}
            <motion.div 
              className="border-t border-gray-200 pt-8"
              variants={itemVariants}
            >
              <motion.h4 
                className="text-xl font-medium text-gray-900 mb-4"
                variants={itemVariants}
              >
                Dirección
              </motion.h4>
              <motion.div 
                className="space-y-2 text-gray-600 text-sm"
                variants={containerVariants}
              >
                <motion.p variants={itemVariants}><span className="font-medium">Calle:</span> Los Robles 266</motion.p>
                <motion.p variants={itemVariants}><span className="font-medium">Barrio:</span> Altos del Sol</motion.p>
                <motion.p variants={itemVariants}><span className="font-medium">Ciudad:</span> San Martín de los Andes</motion.p>
                <motion.p variants={itemVariants}><span className="font-medium">Código Postal:</span> 8370</motion.p>
                <motion.p variants={itemVariants}><span className="font-medium">Provincia:</span> Neuquén</motion.p>
                <motion.p variants={itemVariants}><span className="font-medium">País:</span> Argentina</motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
