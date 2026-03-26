import React, { useEffect } from 'react';
import ThemeStyles from './components/styles/ThemeStyles';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import Specialties from './components/sections/Specialties';
import Vision from './components/sections/Vision';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Appointment from './components/sections/Appointment';
import Footer from './components/layout/Footer';

export default function App() {
  // Intersection Observer for Scroll Reveal Animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Optional: Unobserve after revealing to animate only once
          // observer.unobserve(entry.target); 
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans min-h-screen flex flex-col">
      <ThemeStyles />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Specialties />
      <Vision />
      <WhyChooseUs />
      <Appointment />
      <Footer />
    </div>
  );
}
