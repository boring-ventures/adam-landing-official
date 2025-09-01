'use client';

import { motion } from 'framer-motion';
import { titleVariants } from '../hooks/useScrollAnimation';

export default function Testimonials() {
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

  const testimonials = [
    {
      id: 1,
      name: "María González",
      role: "Arquitecta",
      company: "Estudio González & Asociados",
      location: "Buenos Aires, Argentina",
      image: "https://images.unsplash.com/photo-1560087637-bf797bc7796a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Excelente experiencia en el departamento de Adam. La ubicación es perfecta, con vistas increíbles a las montañas. El espacio está impecable y Adam fue muy atento durante toda nuestra estadía. La gestión directa sin intermediarios hizo que todo fuera transparente y confiable. Definitivamente volveremos y lo recomendamos a todos nuestros amigos."
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      role: "Médico",
      company: "Hospital Italiano",
      location: "Córdoba, Argentina",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "Pasamos una semana espectacular. El departamento tiene todo lo necesario y más. La cocina está perfectamente equipada y la cama es súper cómoda. Adam es un anfitrión excepcional, muy profesional y amigable. La atención al detalle es impresionante, desde la ropa de cama premium hasta los electrodomésticos de alta calidad."
    },
    {
      id: 3,
      name: "Ana Martínez",
      role: "Diseñadora Gráfica",
      company: "Estudio Creativo Martínez",
      location: "Rosario, Argentina",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "La mejor elección para nuestra estadía en San Martín. El balcón con vistas panorámicas es increíble para tomar el desayuno. El departamento está muy bien mantenido y la gestión directa con Adam fue muy transparente. La ubicación en Altos del Sol es perfecta, tranquila pero cerca de todo."
    }
  ];

  return (
    <motion.section 
      id="testimonios" 
      className="mb-16 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2 
        className="text-4xl md:text-5xl font-normal leading-tight mb-12 section-title"
        variants={titleVariants}
      >
        Lo que dicen nuestros huéspedes
      </motion.h2>

      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Testimonios en layout de dos columnas */}
        <div className="space-y-16">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id}>
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-3 gap-12"
                variants={itemVariants}
              >
                {/* Columna izquierda - Testimonio */}
                <div className="lg:col-span-2">
                  <motion.div 
                    className="space-y-6 text-gray-700 text-lg leading-relaxed body-text"
                    variants={itemVariants}
                  >
                    <motion.p variants={itemVariants}>
                      {testimonial.text}
                    </motion.p>
                  </motion.div>
                </div>

                {/* Columna derecha - Información del autor */}
                <div className="lg:col-span-1 flex flex-col space-y-6">
                  <motion.img 
                    alt={testimonial.name}
                    className="w-24 h-24 object-cover grayscale"
                    src={testimonial.image}
                    variants={itemVariants}
                  />
                  <div>
                    <motion.h2 
                      className="text-2xl font-bold text-gray-900 highlight-text"
                      variants={itemVariants}
                    >
                      {testimonial.name}
                    </motion.h2>
                    <motion.p 
                      className="text-gray-500 mt-1 body-text"
                      variants={itemVariants}
                    >
                      {testimonial.role}, {testimonial.company}
                    </motion.p>
                    <motion.p 
                      className="text-gray-400 text-sm mt-1 body-text"
                      variants={itemVariants}
                    >
                      {testimonial.location}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
              
              {/* Línea de separación entre testimonios (excepto el último) */}
              {index < testimonials.length - 1 && (
                <div className="border-t border-gray-200 mt-16"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
