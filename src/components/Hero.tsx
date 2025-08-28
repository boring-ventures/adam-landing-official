'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efecto parallax: la imagen se expande mientras scrolleas
  const parallaxScale = 1 + (scrollY * 0.0005); // Escala de 1 a 1.5
  const parallaxY = scrollY * 0.5; // Movimiento vertical suave

  return (
    <main id="hero" className="mb-32">
      {/* Imagen principal con efecto parallax */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="w-full h-full">
          <img 
            alt="Imagen de montaña y naturaleza para Adam Rezuc" 
            className="w-full h-full object-cover" 
            style={{
              transform: `scale(${parallaxScale}) translateY(${parallaxY}px)`,
              transition: 'transform 0.1s ease-out'
            }}
            src="https://images.pexels.com/photos/18926515/pexels-photo-18926515.jpeg"
          />
        </div>
        
        {/* Overlay con slogan que aparece con scroll */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white">
            <motion.p 
              className="text-2xl md:text-3xl font-light tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Tu estadía cómoda y segura en San Martín de los Andes
            </motion.p>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
              <motion.div 
          className="flex flex-col mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                duration: 0.8,
                staggerChildren: 0.2
              }
            }
          }}
        >
        <motion.div 
          className="mb-6 md:w-1/2"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-normal leading-tight">
            Adam Rezuc, Tu experiencia de lujo en la montaña
          </h2>
        </motion.div>
        <motion.div 
          className="flex justify-end"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 }
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="md:w-1/2 text-right">
            <motion.p 
              className="text-base text-gray-600 leading-relaxed mb-8"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Te invito a disfrutar mi departamento en el corazón de la ciudad. Gestiono directamente cada reserva, 
              ofreciendo una experiencia segura, transparente y de confianza para tu estadía.
            </motion.p>
            <motion.div 
              className="border-t border-gray-300 pt-6"
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1 }
              }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
