'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Star } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const footerLinks = {
    alojamiento: [
      { name: 'El Departamento', href: '#apartment' },
      { name: 'Sobre mí', href: '#sobre-mi' },
      { name: 'Ubicación', href: '#location' },
      { name: 'Galería', href: '#gallery' }
    ],
    reservas: [
      { name: 'Disponibilidad', href: '#availability' },
      { name: 'Políticas', href: '#policies' },
      { name: 'Cancelaciones', href: '#cancellations' },
      { name: 'FAQ', href: '#faq' }
    ],
    legal: [
      { name: 'Privacidad', href: '#privacy' },
      { name: 'Términos', href: '#terms' },
      { name: 'Cookies', href: '#cookies' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600' }
  ];

  return (
    <motion.footer 
      className="bg-gray-50 border-t border-gray-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start"
          variants={containerVariants}
        >
          {/* Company Info */}
          <motion.div 
            className="lg:col-span-2 flex flex-col justify-center"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-center mb-4"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-normal text-gray-900">ADAM</h3>
            </motion.div>
            <motion.p 
              className="text-gray-600 mb-6 leading-relaxed max-w-md"
              variants={itemVariants}
            >
              Alquiler temporal de propiedades urbanas gestionado directamente. Te ofrezco una experiencia 
              segura, transparente y personalizada para tu estadía en la ciudad.
            </motion.p>
            
            {/* Contact Info */}
            <motion.div 
              className="space-y-3"
              variants={containerVariants}
            >
              <motion.div 
                className="flex items-center gap-3 text-gray-600"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail size={16} className="text-blue-600" />
                <span>hola@adam.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 text-gray-600"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Phone size={16} className="text-blue-600" />
                <span>+34 600 000 000</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 text-gray-600"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin size={16} className="text-blue-600" />
                <span>Madrid, España</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Alojamiento Links */}
          <div className="flex flex-col justify-center">
            <h4 className="font-medium text-gray-900 mb-4">Alojamiento</h4>
            <ul className="space-y-2">
              {footerLinks.alojamiento.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Reservas Links */}
          <div className="flex flex-col justify-center">
            <h4 className="font-medium text-gray-900 mb-4">Reservas</h4>
            <ul className="space-y-2">
              {footerLinks.reservas.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* CTA Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <h4 className="text-xl font-medium text-gray-900 mb-3">
              ¿Listo para tu estadía en la ciudad?
            </h4>
            <p className="text-gray-600 mb-6">
              Reserva ahora y disfruta de mi departamento con gestión directa y personalizada
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Reservar Ahora
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-500 text-sm">
              © {currentYear} Adam. Todos los derechos reservados.
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              {footerLinks.legal.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-500 hover:text-gray-700 transition-colors">
                  {link.name}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`text-gray-500 ${social.color} transition-colors`}
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
