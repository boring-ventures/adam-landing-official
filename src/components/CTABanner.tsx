'use client';

import { ArrowRight, Star } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-8">
            <Star size={16} className="mr-2" />
            Oferta especial por tiempo limitado
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            ¿Listo para transformar
            <span className="block">tu negocio?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Únete a miles de empresas que ya están experimentando un crecimiento exponencial. 
            No esperes más para dar el siguiente paso hacia el éxito.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 flex items-center gap-3 text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1">
              Empezar Ahora
              <ArrowRight size={24} />
            </button>
            <button className="border-2 border-white/30 text-white px-10 py-4 rounded-lg hover:bg-white/10 transition-all duration-200 flex items-center gap-3 text-xl font-semibold backdrop-blur-sm">
              Hablar con un Experto
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">30 días</div>
              <div className="text-blue-100">Garantía de devolución</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">$0</div>
              <div className="text-blue-100">Configuración inicial</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Soporte incluido</div>
            </div>
          </div>

          {/* Urgency Message */}
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-white font-semibold">
              ⏰ Oferta especial: 50% de descuento en el primer año para nuevos clientes
            </p>
            <p className="text-blue-100 text-sm mt-2">
              Solo disponible hasta el final del mes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
