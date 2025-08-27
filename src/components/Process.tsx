'use client';

import { Play, CheckCircle, ArrowRight } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Configuración Inicial',
      description: 'Crea tu cuenta en menos de 2 minutos con nuestro proceso de onboarding simplificado.',
      details: [
        'Registro con email o Google',
        'Selección de plantillas',
        'Configuración básica del perfil'
      ],
      icon: Play,
      color: 'blue'
    },
    {
      number: '02',
      title: 'Personalización',
      description: 'Adapta la plataforma a las necesidades específicas de tu empresa y equipo.',
      details: [
        'Configuración de flujos de trabajo',
        'Personalización de dashboards',
        'Integración con herramientas existentes'
      ],
      icon: CheckCircle,
      color: 'green'
    },
    {
      number: '03',
      title: 'Implementación',
      description: 'Implementa gradualmente las funcionalidades con el apoyo de nuestro equipo.',
      details: [
        'Migración de datos existentes',
        'Capacitación del equipo',
        'Configuración de permisos'
      ],
      icon: CheckCircle,
      color: 'purple'
    },
    {
      number: '04',
      title: 'Optimización',
      description: 'Analiza el rendimiento y optimiza continuamente para maximizar resultados.',
      details: [
        'Revisión de métricas clave',
        'Ajustes de configuración',
        'Implementación de mejoras'
      ],
      icon: CheckCircle,
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro proceso simple y efectivo te guía desde la configuración inicial 
            hasta la optimización completa de tu flujo de trabajo.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                {/* Step Number */}
                <div className={`w-16 h-16 ${getColorClasses(step.color)} rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold relative z-10`}>
                  {step.number}
                </div>

                {/* Step Content */}
                <div className="bg-gray-50 rounded-2xl p-6 h-full hover:bg-gray-100 transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <ul className="text-left space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full transform -translate-y-1/2 z-20">
                    <ArrowRight size={24} className="text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Te parece simple?
            </h3>
            <p className="text-gray-600 mb-6">
              Nuestro equipo te guiará en cada paso del proceso para asegurar una implementación exitosa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Empezar Ahora
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Ver Demo Completo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
