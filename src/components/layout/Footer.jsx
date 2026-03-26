import React from 'react';
import { MapPin, Phone, Activity } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#2A4869] text-white pt-20 pb-10 border-t-8 border-[#768B68]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 reveal">
          
          <div className="lg:col-span-1 reveal-left delay-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-white text-[#2A4869] flex items-center justify-center font-serif font-bold hover:rotate-12 transition-transform duration-500">
                NH
              </div>
              <h3 className="font-serif font-bold text-xl leading-tight text-white">
                NEW NEELANCHALA
              </h3>
            </div>
            <p className="text-[#D8C3A5] text-sm leading-relaxed mb-6">
              Healing with Heritage. Committed to compassionate care and medical excellence in Southern Odisha.
            </p>
          </div>

          <div className="reveal-left delay-200">
            <h4 className="font-bold text-lg mb-6 border-b border-white/10 pb-2 inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#768B68] hover:after:w-full after:transition-all after:duration-500">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Specialties', 'Book Appointment', 'Patient Portal'].map((link, i) => (
                <li key={i}>
                  <a href={link === 'Book Appointment' ? '#appointment' : '#'} className="text-[#D8C3A5] hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal-right delay-200">
            <h4 className="font-bold text-lg mb-6 border-b border-white/10 pb-2 inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#768B68] hover:after:w-full after:transition-all after:duration-500">Departments</h4>
            <ul className="space-y-3">
              {['Critical Care & ICU', 'Cardiology', 'Orthopedics', 'Pediatrics'].map((dept, i) => (
                <li key={i} className="text-[#D8C3A5] hover:text-white transition-colors duration-300 cursor-default">{dept}</li>
              ))}
            </ul>
          </div>

          <div className="reveal-right delay-100">
            <h4 className="font-bold text-lg mb-6 border-b border-white/10 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group cursor-default">
                <MapPin size={20} className="text-[#768B68] shrink-0 mt-1 transform group-hover:-translate-y-1 transition-transform duration-300" />
                <span className="text-[#D8C3A5] text-sm leading-relaxed group-hover:text-white transition-colors">Berhampur, Odisha, India</span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <Phone size={20} className="text-[#768B68] shrink-0 transform group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-[#D8C3A5] group-hover:text-white transition-colors">+91 XXXX XXXXXX</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Activity size={20} className="text-[#800000] shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                <span className="text-white font-bold group-hover:text-[#ff9999] transition-colors">Emergency: 108</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#D8C3A5] reveal delay-300">
          <p>&copy; {new Date().getFullYear()} New Neelanchala Hospital. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
