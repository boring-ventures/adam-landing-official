'use client';

import { Zap, Shield, Globe, Smartphone, Database, Lock } from 'lucide-react';

export default function Characteristics() {
  const characteristics = [
    {
      icon: Zap,
      title: 'Rendimiento Ultra-Rápido',
      description: 'Optimizado para velocidad máxima con tiempos de carga inferiores a 100ms.',
      specs: ['CDN global', 'Caché inteligente', 'Optimización de imágenes']
    },
    {
      icon: Shield,
      title: 'Seguridad de Nivel Bancario',
      description: 'Protección avanzada con múltiples capas de seguridad y cumplimiento internacional.',
      specs: ['Encriptación AES-256', 'Autenticación 2FA', 'Cumplimiento SOC2']
    },
    {
      icon: Globe,
      title: 'Disponibilidad Global',
      description: '99.99% de tiempo activo garantizado con infraestructura distribuida mundialmente.',
      specs: ['Múltiples regiones', 'Backup automático', 'Recuperación de desastres']
    },
    {
      icon: Smartphone,
      title: 'Diseño Responsivo',
      description: 'Experiencia perfecta en todos los dispositivos, desde móviles hasta pantallas 4K.',
      specs: ['Mobile-first', 'PWA nativo', 'Offline support']
    },
    {
      icon: Database,
      title: 'Escalabilidad Infinita',
      description: 'Crece sin límites con arquitectura cloud-native y auto-scaling automático.',
      specs: ['Microservicios', 'Kubernetes', 'Load balancing']
    },
    {
      icon: Lock,
      title: 'Privacidad Total',
      description: 'Control completo sobre tus datos con opciones de hosting privado y on-premise.',
      specs: ['GDPR compliant', 'Data residency', 'Audit logs']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Características Técnicas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Construido con las últimas tecnologías para ofrecer una experiencia 
            excepcional y un rendimiento inigualable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {characteristics.map((characteristic, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <characteristic.icon size={32} className="text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {characteristic.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {characteristic.description}
              </p>
              
              <ul className="space-y-3">
                {characteristic.specs.map((spec, specIndex) => (
                  <li key={specIndex} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Especificaciones Técnicas Detalladas
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100ms</div>
              <div className="text-gray-600">Tiempo de respuesta</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.99%</div>
              <div className="text-gray-600">Uptime garantizado</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">256-bit</div>
              <div className="text-gray-600">Encriptación AES</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Monitoreo activo</div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Ver Documentación Técnica
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
