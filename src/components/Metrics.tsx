'use client';

import { TrendingUp, Users, Zap, Target } from 'lucide-react';

export default function Metrics() {
  const metrics = [
    {
      icon: TrendingUp,
      value: '300%',
      label: 'Aumento en productividad',
      description: 'Mejora promedio reportada por nuestros clientes'
    },
    {
      icon: Users,
      value: '50K+',
      label: 'Usuarios activos',
      description: 'Empresas que confían en nuestra plataforma'
    },
    {
      icon: Zap,
      value: '90%',
      label: 'Reducción de tiempo',
      description: 'Menos tiempo en tareas repetitivas'
    },
    {
      icon: Target,
      value: '95%',
      label: 'Tasa de satisfacción',
      description: 'Clientes que recomiendan nuestro servicio'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Resultados que hablan por sí solos
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Nuestros números demuestran el impacto real que tenemos en el éxito de nuestros clientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors">
                  <metric.icon size={32} className="text-white" />
                </div>
                
                <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                  {metric.value}
                </div>
                
                <h3 className="text-xl font-semibold mb-3">
                  {metric.label}
                </h3>
                
                <p className="text-blue-100 text-sm leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para unirte a ellos?
            </h3>
            <p className="text-blue-100 mb-6">
              Únete a miles de empresas que ya están transformando su negocio
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Empezar Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
