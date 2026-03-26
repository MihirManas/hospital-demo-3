import React from 'react';
import { Calendar, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl z-10">
            <span className="reveal inline-block py-1.5 px-4 rounded-full bg-[#768B68]/10 text-[#768B68] font-semibold text-sm tracking-wide mb-6 border border-[#768B68]/20 backdrop-blur-sm">
              Healing with Heritage
            </span>
            <h1 className="reveal delay-100 font-serif text-5xl lg:text-6xl text-[#2A4869] font-bold leading-[1.15] mb-6">
              Excellence in <br/>
              <span className="text-[#768B68] relative inline-block">
                Multi-Specialty
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#768B68]/10 -z-10 rounded-full"></span>
              </span> <br/>
              & Critical Care
            </h1>
            <p className="reveal delay-200 text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              Combining Odisha's rich cultural heritage of compassion with advanced medical infrastructure to deliver world-class healthcare in Berhampur.
            </p>
            <div className="reveal delay-300 flex flex-wrap items-center gap-4">
              <button 
                onClick={() => document.getElementById('appointment') && document.getElementById('appointment').scrollIntoView()} 
                className="bg-[#2A4869] text-white px-8 py-4 rounded-full font-medium hover:bg-[#1d334a] transition-all duration-700 ease-out flex items-center gap-2 shadow-[0_10px_30px_-10px_rgba(42,72,105,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(42,72,105,0.6)] hover:-translate-y-1.5"
              >
                <Calendar size={20} className="animate-pulse" />
                Book Appointment
              </button>
              <button className="bg-white text-[#800000] border border-[#800000]/20 px-8 py-4 rounded-full font-medium hover:bg-[#800000] hover:text-white transition-all duration-700 ease-out flex items-center gap-2 hover:shadow-[0_10px_30px_-10px_rgba(128,0,0,0.3)] hover:-translate-y-1.5">
                <Activity size={20} />
                Emergency Contact
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative z-10 lg:ml-auto reveal-right delay-200">
            <div className="absolute inset-0 bg-[#D8C3A5] rounded-[3rem] transform translate-x-4 translate-y-4 -z-10 opacity-50 transition-transform duration-1000 ease-out hover:translate-x-6 hover:translate-y-6"></div>
            <div className="absolute inset-0 bg-[#768B68] rounded-[3rem] transform -translate-x-4 -translate-y-4 -z-10 opacity-20 transition-transform duration-1000 ease-out hover:-translate-x-6 hover:-translate-y-6"></div>
            
            <div className="relative rounded-[3rem] overflow-hidden fluid-shadow border-8 border-white group">
              <img 
                src="./IMG-20260318-WA0027.jpg" 
                alt="New Neelanchala Hospital Exterior" 
                className="w-full h-auto object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2A4869]/30 to-transparent mix-blend-multiply opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
