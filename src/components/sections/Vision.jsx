import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Vision() {
  return (
    <section id="vision" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2A4869] rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl reveal">
          <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden">
            {/* Decorative fluid shape */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            <span className="text-[#D8C3A5] font-semibold uppercase tracking-wider text-sm mb-4 block relative z-10">Future Forward</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight relative z-10">
              Expanding for <br/> a Healthier Tomorrow
            </h2>
            <p className="text-[#F3F1E9]/80 mb-8 text-lg relative z-10">
              We are actively upgrading our infrastructure to meet the growing healthcare needs of Berhampur and Southern Odisha.
            </p>
            
            <div className="space-y-6 relative z-10">
              {[
                { title: "200 Bed Expansion", desc: "Significantly increasing our capacity to serve more patients.", delay: "delay-100" },
                { title: "Advanced ICU & NICU", desc: "State-of-the-art critical care units for adults and newborns.", delay: "delay-200" },
                { title: "Dedicated Cardiology Wing", desc: "Specialized facilities for comprehensive heart health.", delay: "delay-300" }
              ].map((item, idx) => (
                <div key={idx} className={`flex items-start gap-4 reveal-left ${item.delay}`}>
                  <div className="mt-1 bg-[#768B68] p-1.5 rounded-full text-white transform transition-transform duration-500 hover:scale-110 hover:rotate-12">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{item.title}</h4>
                    <p className="text-[#F3F1E9]/70 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative min-h-[400px] overflow-hidden group">
            <img 
              src="./IMG-20260318-WA0025(1).jpg" 
              alt="Advanced ICU Ward" 
              className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[2s] ease-out"
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1512678080530-7760d81faba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2A4869] to-transparent lg:w-1/3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
