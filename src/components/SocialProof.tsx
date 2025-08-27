'use client';

import { Star } from 'lucide-react';

export default function SocialProof() {
  const companies = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'InnovateLab', logo: 'IL' },
    { name: 'FutureSoft', logo: 'FS' },
    { name: 'DataFlow', logo: 'DF' },
    { name: 'CloudTech', logo: 'CT' },
    { name: 'SmartBiz', logo: 'SB' },
  ];

  const testimonials = [
    {
      text: "Esta plataforma ha transformado completamente nuestro flujo de trabajo. Increíblemente eficiente.",
      author: "María García",
      role: "CEO, TechCorp",
      rating: 5
    },
    {
      text: "La mejor inversión que hemos hecho este año. ROI excepcional y fácil de implementar.",
      author: "Carlos Rodríguez",
      role: "CTO, InnovateLab",
      rating: 5
    },
    {
      text: "Soporte excepcional y funcionalidades que realmente marcan la diferencia.",
      author: "Ana Martínez",
      role: "Directora de Operaciones, FutureSoft",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Companies Section */}
        <div className="text-center mb-16">
          <p className="text-gray-600 mb-8 text-lg">
            Confían en nosotros empresas líderes de la industria
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 font-bold text-lg">
                  {company.logo}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-600 text-lg">
            Descubre por qué miles de empresas confían en nosotros
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 italic text-center">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="text-center">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
            <div className="text-gray-600">Clientes activos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
            <div className="text-gray-600">Tiempo activo</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Soporte disponible</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Valoración media</div>
          </div>
        </div>
      </div>
    </section>
  );
}
