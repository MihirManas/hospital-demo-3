import React from 'react';

const ThemeStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
    
    html {
      scroll-behavior: smooth;
    }
    
    body {
      background-color: #F3F1E9;
      color: #333333;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }

    .font-serif { font-family: 'Playfair Display', serif; }
    .font-sans { font-family: 'Outfit', sans-serif; }
    
    /* Fluid Shadow Hover */
    .fluid-shadow {
      box-shadow: 0 10px 40px -10px rgba(42, 72, 105, 0.08);
      transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    
    .fluid-shadow:hover {
      box-shadow: 0 30px 60px -15px rgba(42, 72, 105, 0.2);
      transform: translateY(-8px) scale(1.01);
    }

    /* Scroll Reveal Animations */
    .reveal {
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), 
                  transform 1s cubic-bezier(0.16, 1, 0.3, 1);
    }
    
    .reveal-left {
      opacity: 0;
      transform: translateX(-40px);
      transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), 
                  transform 1s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .reveal-right {
      opacity: 0;
      transform: translateX(40px);
      transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), 
                  transform 1s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .reveal.active, .reveal-left.active, .reveal-right.active {
      opacity: 1;
      transform: translate(0, 0);
    }

    /* Staggered Delays for Fluid Cascades */
    .delay-100 { transition-delay: 100ms; }
    .delay-200 { transition-delay: 200ms; }
    .delay-300 { transition-delay: 300ms; }
    .delay-400 { transition-delay: 400ms; }
    .delay-500 { transition-delay: 500ms; }

    /* Custom Input Transitions */
    .fluid-input {
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }
  `}</style>
);

export default ThemeStyles;
