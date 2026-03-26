import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function About() {
  const [aboutImageIndex, setAboutImageIndex] = useState(0);

  const aboutImages = [
    "./IMG-20260318-WA0028.jpg",
    "./IMG-20260318-WA0029.jpg",
    "./IMG-20260318-WA0027.jpg"
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div 
            className="relative group reveal-left cursor-pointer min-h-[500px]"
            onClick={() => setAboutImageIndex((prev) => (prev + 1) % aboutImages.length)}
          >
            <div className="absolute inset-0 bg-[#2A4869] rounded-3xl transform -rotate-3 transition-transform duration-1000 ease-out group-hover:-rotate-4 group-hover:scale-[1.02]"></div>
            
            {/* Fluid Interactive Image Stack */}
            <div className="relative w-full h-[500px]">
              {aboutImages.map((src, idx) => {
                const offset = (idx - aboutImageIndex + aboutImages.length) % aboutImages.length;
                const isTop = offset === 0;
                
                // Calculate dynamic fluid styles based on position in stack
                const scale = 1 - (offset * 0.05);
                const translateY = offset * 20; 
                const rotate = offset === 0 ? 0 : offset === 1 ? 3 : -2;
                const opacity = 1 - (offset * 0.3);
                const zIndex = 30 - offset;

                return (
                  <img 
                    key={idx}
                    src={src} 
                    alt={`Hospital Heritage ${idx + 1}`} 
                    className="absolute inset-0 rounded-3xl object-cover w-full h-full shadow-2xl transition-all duration-[0.8s] ease-out"
                    style={{
                      zIndex,
                      opacity,
                      transform: `scale(${scale}) translateY(${translateY}px) rotate(${rotate}deg)`,
                      transformOrigin: 'bottom center'
                    }}
                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" }}
                  />
                );
              })}
            </div>

            {/* Interactive Hint */}
            <div className="absolute top-4 left-4 z-40 bg-black/40 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Click to view gallery
            </div>

            <div className="absolute -bottom-8 -right-8 z-40 bg-white/95 backdrop-blur-md p-6 rounded-2xl fluid-shadow max-w-xs hidden md:block border border-[#F3F1E9] transform transition-transform duration-1000 ease-out group-hover:-translate-y-4 group-hover:-translate-x-4">
              <div className="flex items-start gap-4">
                <div className="bg-[#D8C3A5]/20 p-3 rounded-full text-[#800000]">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#2A4869]">Est. 2008</h4>
                  <p className="text-sm text-gray-500 leading-snug mt-1">A trusted healthcare institution in Southern Odisha.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-right">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#768B68] transition-all duration-700 ease-out hover:w-20"></div>
              <span className="text-[#768B68] font-semibold uppercase tracking-wider text-sm">Our Heritage</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#2A4869] mb-6 leading-tight">
              Compassion Rooted <br/> in Culture
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Since 2008, New Neelanchala Hospital has been a beacon of hope and healing in Berhampur. We blend modern medical science with the traditional warmth and care that Odisha is known for.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our focus is on patient-centered care. Every decision, from our infrastructure expansion to our daily operations, is guided by a commitment to providing accessible, high-quality healthcare to our community.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Patient-first holistic healing approach",
                "State-of-the-art medical infrastructure",
                "Experienced panel of specialist doctors"
              ].map((item, i) => (
                <li key={i} className={`flex items-center gap-3 text-[#2A4869] font-medium reveal delay-${(i+1)*100}`}>
                  <CheckCircle2 size={20} className="text-[#768B68] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="flex items-center gap-2 text-[#2A4869] font-bold hover:text-[#768B68] transition-colors group">
              <span className="relative overflow-hidden pb-1">
                Discover Our Journey
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#768B68] transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              </span>
              <ArrowRight size={20} className="transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500 ease-out" />
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
