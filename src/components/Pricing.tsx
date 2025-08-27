'use client';

import { Check, Star, Zap } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '29',
      period: '/mes',
      description: 'Perfecto para pequeñas empresas y emprendedores',
      features: [
        'Hasta 5 usuarios',
        'Funcionalidades básicas',
        '5GB de almacenamiento',
        'Soporte por email',
        'Plantillas básicas',
        'Integraciones estándar'
      ],
      popular: false,
      cta: 'Empezar Gratis',
      color: 'gray'
    },
    {
      name: 'Professional',
      price: '99',
      period: '/mes',
      description: 'Ideal para equipos en crecimiento',
      features: [
        'Hasta 25 usuarios',
        'Todas las funcionalidades',
        '100GB de almacenamiento',
        'Soporte prioritario',
        'Plantillas premium',
        'Integraciones avanzadas',
        'Analytics avanzados',
        'API personalizada'
      ],
      popular: true,
      cta: 'Empezar Ahora',
      color: 'blue'
    },
    {
      name: 'Enterprise',
      price: '299',
      period: '/mes',
      description: 'Para grandes organizaciones',
      features: [
        'Usuarios ilimitados',
        'Funcionalidades personalizadas',
        'Almacenamiento ilimitado',
        'Soporte 24/7 dedicado',
        'Plantillas personalizadas',
        'Integraciones personalizadas',
        'Analytics personalizados',
        'API dedicada',
        'SLA garantizado',
        'Onboarding personalizado'
      ],
      popular: false,
      cta: 'Contactar Ventas',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string, isPopular: boolean) => {
    if (isPopular) {
      return 'border-blue-600 bg-blue-50';
    }
    
    const colors = {
      gray: 'border-gray-200 bg-white',
      blue: 'border-blue-200 bg-white',
      purple: 'border-purple-200 bg-white'
    };
    return colors[color as keyof typeof colors] || colors.gray;
  };

  const getButtonClasses = (color: string, isPopular: boolean) => {
    if (isPopular) {
      return 'bg-blue-600 text-white hover:bg-blue-700';
    }
    
    const colors = {
      gray: 'bg-gray-600 text-white hover:bg-gray-700',
      blue: 'bg-blue-600 text-white hover:bg-blue-700',
      purple: 'bg-purple-600 text-white hover:bg-purple-700'
    };
    return colors[color as keyof typeof colors] || colors.gray;
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Planes de Precios Transparentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades. 
            Todos incluyen nuestra garantía de satisfacción de 30 días.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative rounded-2xl border-2 p-8 ${getColorClasses(plan.color, plan.popular)}`}>
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star size={16} />
                    Más Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${getButtonClasses(plan.color, plan.popular)}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Necesitas algo personalizado?
            </h3>
            <p className="text-gray-600 mb-6">
              Nuestro equipo puede crear un plan a medida para tu empresa con funcionalidades específicas y precios competitivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Hablar con Ventas
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Ver Comparación Completa
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Preguntas Frecuentes
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">¿Puedo cambiar de plan en cualquier momento?</h4>
              <p className="text-gray-600">Sí, puedes cambiar o cancelar tu plan en cualquier momento sin penalizaciones.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">¿Hay un período de prueba gratuito?</h4>
              <p className="text-gray-600">Todos los planes incluyen 14 días de prueba gratuita con acceso completo.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">¿Qué incluye el soporte técnico?</h4>
              <p className="text-gray-600">Soporte por email, chat en vivo y base de conocimientos detallada.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">¿Puedo exportar mis datos?</h4>
              <p className="text-gray-600">Sí, puedes exportar todos tus datos en formatos estándar en cualquier momento.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
