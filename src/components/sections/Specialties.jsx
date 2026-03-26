import React from 'react';
import { Heart, Brain, Bone, Baby, Activity, Stethoscope, ChevronRight } from 'lucide-react';

export default function Specialties() {
  return (
    <section id="specialties" className="py-24 bg-[#F3F1E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-[#768B68] font-semibold uppercase tracking-wider text-sm mb-3 block">Center of Excellence</span>
          <h2 className="font-serif text-4xl font-bold text-[#2A4869] mb-4">Our Medical Specialties</h2>
          <p className="text-gray-600">Comprehensive healthcare services delivered by expert medical professionals using advanced technology.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Cardiology", desc: "Advanced heart care, diagnostics, and interventional procedures.", icon: Heart, delay: "delay-100" },
            { title: "Neurology", desc: "Comprehensive care for brain, spine, and nervous system disorders.", icon: Brain, delay: "delay-200" },
            { title: "Orthopedics", desc: "Expert treatment for bone, joint, and musculoskeletal conditions.", icon: Bone, delay: "delay-300" },
            { title: "Pediatrics", desc: "Compassionate healthcare for infants, children, and adolescents.", icon: Baby, delay: "delay-100" },
            { title: "Critical Care", desc: "24/7 intensive care with advanced life support systems.", icon: Activity, delay: "delay-200" },
            { title: "General Medicine", desc: "Holistic diagnosis and management of adult diseases.", icon: Stethoscope, delay: "delay-300" },
          ].map((dept, idx) => (
            <div key={idx} className={`bg-white rounded-2xl p-8 fluid-shadow group border border-transparent hover:border-[#D8C3A5]/50 cursor-pointer reveal ${dept.delay}`}>
              <div className="w-14 h-14 rounded-2xl bg-[#768B68]/10 flex items-center justify-center text-[#768B68] mb-6 group-hover:bg-[#768B68] group-hover:text-white transition-all duration-700 ease-out transform group-hover:rotate-6 group-hover:scale-110">
                <dept.icon size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2A4869] mb-3 group-hover:text-[#768B68] transition-colors duration-500">{dept.title}</h3>
              <p className="text-gray-600 mb-6 line-clamp-2 transition-colors duration-500 group-hover:text-gray-800">{dept.desc}</p>
              <div className="flex items-center text-sm font-bold text-[#2A4869] group-hover:text-[#800000] transition-colors duration-500">
                Learn more <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-2 transition-transform duration-500 ease-out" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
