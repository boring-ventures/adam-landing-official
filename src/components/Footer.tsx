'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

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



  const footerLinks = {
    alojamiento: [
      { name: 'El Departamento', href: '#apartment' },
      { name: 'Sobre mí', href: '#sobre-mi' },
      { name: 'Inicio', href: '#hero' }
    ],
    contacto: [
      { name: 'Reservas y Contacto', href: '#contact' },
      { name: 'WhatsApp', href: 'https://wa.me/5493515336420?text=Hola%20Adam,%20me%20interesa%20reservar%20tu%20departamento' },
      { name: 'Email Directo', href: 'mailto:adam.rezuc@gmail.com?subject=Consulta%20de%20Reserva' }
    ],

  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/stories/adamrezuc/', color: 'hover:text-pink-600' }
  ];

  return (
    <motion.footer 
      className="bg-white border-t border-gray-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Main Footer Content */}
      <div className="w-full px-8 py-12">
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
              <h3 className="text-2xl font-normal text-gray-900">ADAM REZUC</h3>
            </motion.div>
            <motion.p 
              className="text-gray-600 mb-6 leading-relaxed max-w-md"
              variants={itemVariants}
            >
              Departamento de lujo en el corazón de San Martín de los Andes. Ubicado en Los Robles 266, 
              Altos del Sol, con vistas panorámicas a las montañas. Gestión directa y personalizada.
            </motion.p>
            
            {/* Contact Info */}
            <motion.div 
              className="space-y-3"
              variants={itemVariants}
            >
              <motion.div 
                className="flex items-center gap-3 text-gray-600"
                variants={itemVariants}
              >
                <Mail size={16} className="text-[#1E3C4A]" />
                <span>adam.rezuc@gmail.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 text-gray-600"
                variants={itemVariants}
              >
                <Phone size={16} className="text-[#1E3C4A]" />
                <span>+54 9 351 533 6420</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 text-gray-600"
                variants={itemVariants}
              >
                <MapPin size={16} className="text-[#1E3C4A]" />
                <span>Los Robles 266, Altos del Sol, San Martín de los Andes, Neuquén, Argentina (CP 8370)</span>
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

          {/* Contacto Links */}
          <div className="flex flex-col justify-center">
            <h4 className="font-medium text-gray-900 mb-4">Contacto</h4>
            <ul className="space-y-2">
              {footerLinks.contacto.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="w-full px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-600 text-sm">
              © {currentYear} Adam Rezuc. Website diseñada para uso oficial.
            </div>



            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`text-gray-600 ${social.color} transition-colors`}
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
