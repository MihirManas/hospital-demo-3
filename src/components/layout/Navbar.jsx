import React from 'react';
import { Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#F3F1E9]/80 backdrop-blur-xl border-b border-[#D8C3A5]/30 transition-all duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <div className="flex items-center gap-3 reveal-left active">
          <div className="w-12 h-12 rounded-full bg-[#2A4869] text-[#F3F1E9] flex items-center justify-center font-serif text-xl font-bold border-2 border-[#D8C3A5] transition-transform duration-700 hover:rotate-12">
            NH
          </div>
          <div>
            <h1 className="font-serif font-bold text-[#2A4869] text-xl leading-tight">
              NEW NEELANCHALA
            </h1>
            <p className="text-xs font-semibold text-[#768B68] tracking-widest uppercase">
              Hospital
            </p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium text-[#2A4869] reveal active delay-200">
          <a href="#about" className="relative group overflow-hidden pb-1">
            <span className="group-hover:text-[#768B68] transition-colors duration-500">About</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#768B68] transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
          </a>
          <a href="#specialties" className="relative group overflow-hidden pb-1">
            <span className="group-hover:text-[#768B68] transition-colors duration-500">Specialties</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#768B68] transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
          </a>
          <a href="#vision" className="relative group overflow-hidden pb-1">
            <span className="group-hover:text-[#768B68] transition-colors duration-500">Vision</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#768B68] transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
          </a>
          <a href="#contact" className="relative group overflow-hidden pb-1">
            <span className="group-hover:text-[#768B68] transition-colors duration-500">Contact</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#768B68] transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
          </a>
        </div>
        <div className="flex items-center gap-4 reveal-right active delay-100">
          <a href="tel:108" className="hidden sm:flex items-center gap-2 text-[#800000] font-bold hover:opacity-70 transition-opacity duration-500">
            <Phone size={18} />
            <span>Emergency</span>
          </a>
          <button 
            onClick={() => document.getElementById('appointment') && document.getElementById('appointment').scrollIntoView()}
            className="bg-[#2A4869] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#1d334a] hover:shadow-[0_8px_25px_-5px_rgba(42,72,105,0.4)] hover:-translate-y-1 transition-all duration-500 ease-out"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </nav>
  );
}
