'use client';

import { CheckCircle, Shield, Zap, Users, BarChart3, Clock } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Zap,
      title: 'Implementación Rápida',
      description: 'Configura tu cuenta en menos de 5 minutos y comienza a trabajar inmediatamente.',
      features: ['Setup automático', 'Tutoriales integrados', 'Soporte personalizado']
    },
    {
      icon: Shield,
      title: 'Seguridad Empresarial',
      description: 'Protección de nivel bancario con encriptación de extremo a extremo y cumplimiento GDPR.',
      features: ['Encriptación AES-256', 'Cumplimiento GDPR', 'Auditorías regulares']
    },
    {
      icon: Users,
      title: 'Colaboración en Tiempo Real',
      description: 'Trabaja con tu equipo de forma sincronizada, sin importar dónde estén.',
      features: ['Edición colaborativa', 'Chat integrado', 'Notificaciones instantáneas']
    },
    {
      icon: BarChart3,
      title: 'Analytics Avanzados',
      description: 'Obtén insights profundos sobre el rendimiento y la productividad de tu equipo.',
      features: ['Dashboards personalizables', 'Reportes automáticos', 'KPIs en tiempo real']
    },
    {
      icon: Clock,
      title: 'Automatización Inteligente',
      description: 'Reduce tareas repetitivas con flujos de trabajo automatizados y IA integrada.',
      features: ['Flujos personalizables', 'IA predictiva', 'Integraciones nativas']
    },
    {
      icon: CheckCircle,
      title: 'Soporte 24/7',
      description: 'Nuestro equipo de expertos está disponible siempre que lo necesites.',
      features: ['Chat en vivo', 'Base de conocimientos', 'Comunidad activa']
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre las ventajas únicas que hacen de nuestra plataforma la elección perfecta 
            para empresas que buscan crecer y optimizar sus operaciones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <benefit.icon size={32} className="text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {benefit.description}
              </p>
              
              <ul className="space-y-3">
                {benefit.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Convencido de las ventajas?
            </h3>
            <p className="text-gray-600 mb-6">
              Únete a miles de empresas que ya están experimentando estos beneficios
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Probar Gratis
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Ver Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
