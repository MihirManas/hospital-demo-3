import React from 'react';
import { Clock, ShieldCheck, Activity, MapPin } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#F3F1E9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group reveal-left">
            <img 
              src="./IMG-20260318-WA0024.jpg" 
              alt="Advanced Centre for ICU & Critical Care" 
              className="w-full h-auto object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" }}
            />
            <div className="absolute inset-0 bg-[#2A4869]/0 group-hover:bg-[#2A4869]/10 transition-colors duration-1000"></div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-4xl font-bold text-[#2A4869] mb-8 reveal-right">Why Choose New Neelanchala?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "14+ Years Experience", icon: Clock, delay: "delay-100" },
                { title: "Strong Infrastructure", icon: ShieldCheck, delay: "delay-200" },
                { title: "Research-Driven Care", icon: Activity, delay: "delay-300" },
                { title: "Strategic Location", icon: MapPin, delay: "delay-400" }
              ].map((feature, idx) => (
                <div key={idx} className={`bg-white/80 backdrop-blur-sm p-5 rounded-2xl fluid-shadow flex items-center gap-4 border border-transparent hover:border-[#768B68]/30 group reveal-right ${feature.delay}`}>
                  <div className="bg-[#D8C3A5]/20 p-3 rounded-xl text-[#2A4869] transition-colors duration-500 group-hover:bg-[#2A4869] group-hover:text-white">
                    <feature.icon size={24} className="transform transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <span className="font-bold text-[#2A4869] transition-colors duration-500 group-hover:text-[#768B68]">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
