import React from 'react';
import { Users, Award, Stethoscope, TrendingUp } from 'lucide-react';

export default function Stats() {
  return (
    <section className="relative z-20 -mt-16 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl fluid-shadow p-8 lg:p-10 reveal border border-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#D8C3A5]/30">
            <div className="text-center px-4 reveal delay-100">
              <div className="flex justify-center mb-3 text-[#768B68] transform transition-transform duration-700 hover:scale-125 hover:-translate-y-1"><Users size={32} /></div>
              <h3 className="font-serif text-3xl font-bold text-[#2A4869]">1,00,000+</h3>
              <p className="text-sm text-gray-500 font-medium mt-1">Patients Treated</p>
            </div>
            <div className="text-center px-4 reveal delay-200">
              <div className="flex justify-center mb-3 text-[#768B68] transform transition-transform duration-700 hover:scale-125 hover:-translate-y-1"><Award size={32} /></div>
              <h3 className="font-serif text-3xl font-bold text-[#2A4869]">14+</h3>
              <p className="text-sm text-gray-500 font-medium mt-1">Years of Excellence</p>
            </div>
            <div className="text-center px-4 reveal delay-300">
              <div className="flex justify-center mb-3 text-[#768B68] transform transition-transform duration-700 hover:scale-125 hover:-translate-y-1"><Stethoscope size={32} /></div>
              <h3 className="font-serif text-3xl font-bold text-[#2A4869]">Multi</h3>
              <p className="text-sm text-gray-500 font-medium mt-1">Specialty Care</p>
            </div>
            <div className="text-center px-4 reveal delay-400">
              <div className="flex justify-center mb-3 text-[#768B68] transform transition-transform duration-700 hover:scale-125 hover:-translate-y-1"><TrendingUp size={32} /></div>
              <h3 className="font-serif text-3xl font-bold text-[#2A4869]">200+</h3>
              <p className="text-sm text-gray-500 font-medium mt-1">Bed Expansion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
