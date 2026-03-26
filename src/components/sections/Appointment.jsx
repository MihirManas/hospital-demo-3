import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Appointment() {
  const [formStatus, setFormStatus] = useState('idle');

  const handleBooking = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id="appointment" className="py-24 relative bg-white">
      <div className="absolute top-0 left-0 w-full h-[60%] bg-[#2A4869] rounded-b-[4rem] transition-all duration-1000"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_30px_60px_-15px_rgba(42,72,105,0.3)] p-8 md:p-12 border border-[#F3F1E9] transition-all duration-[1s] ease-out">
          
          <div className={`transition-all duration-700 ease-out transform ${formStatus === 'success' ? 'opacity-100 translate-y-0 h-auto' : 'opacity-0 -translate-y-8 h-0 overflow-hidden absolute'}`}>
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-[#768B68]/10 text-[#768B68] rounded-full flex items-center justify-center mx-auto mb-6 transform transition-transform duration-1000 scale-110">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#2A4869] mb-4">Request Received</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Thank you for choosing New Neelanchala Hospital. Our support team will contact you shortly to confirm your appointment.
              </p>
              <button 
                onClick={() => setFormStatus('idle')}
                className="bg-[#2A4869] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1d334a] hover:shadow-[0_10px_30px_-10px_rgba(42,72,105,0.5)] transition-all duration-500 ease-out hover:-translate-y-1"
              >
                Book Another
              </button>
            </div>
          </div>

          <div className={`transition-all duration-700 ease-out transform ${formStatus !== 'success' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 hidden'}`}>
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2A4869] mb-3">Book an Appointment</h2>
              <p className="text-gray-600">Fill out the form below and we will get back to you promptly.</p>
            </div>

            <form onSubmit={handleBooking} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-semibold text-[#2A4869] mb-2 transition-colors duration-300 group-focus-within:text-[#768B68]">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe" 
                    className="fluid-input w-full px-4 py-3 rounded-xl bg-[#F3F1E9]/50 border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#768B68]/50 focus:border-[#768B68] shadow-sm focus:shadow-md"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-semibold text-[#2A4869] mb-2 transition-colors duration-300 group-focus-within:text-[#768B68]">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="+91 XXXXX XXXXX" 
                    className="fluid-input w-full px-4 py-3 rounded-xl bg-[#F3F1E9]/50 border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#768B68]/50 focus:border-[#768B68] shadow-sm focus:shadow-md"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-semibold text-[#2A4869] mb-2 transition-colors duration-300 group-focus-within:text-[#768B68]">Department</label>
                  <select required className="fluid-input w-full px-4 py-3 rounded-xl bg-[#F3F1E9]/50 border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#768B68]/50 focus:border-[#768B68] text-gray-700 appearance-none shadow-sm focus:shadow-md cursor-pointer">
                    <option value="">Select Specialty</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="neurology">Neurology</option>
                    <option value="orthopedics">Orthopedics</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="critical-care">Critical Care</option>
                    <option value="general">General Medicine</option>
                  </select>
                </div>
                <div className="group">
                  <label className="block text-sm font-semibold text-[#2A4869] mb-2 transition-colors duration-300 group-focus-within:text-[#768B68]">Preferred Date</label>
                  <input 
                    required
                    type="date" 
                    className="fluid-input w-full px-4 py-3 rounded-xl bg-[#F3F1E9]/50 border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#768B68]/50 focus:border-[#768B68] text-gray-700 shadow-sm focus:shadow-md cursor-pointer"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={formStatus === 'submitting'}
                className={`relative overflow-hidden w-full py-4 rounded-xl font-bold text-white text-lg transition-all duration-[0.8s] cubic-bezier(0.16, 1, 0.3, 1) ${formStatus === 'submitting' ? 'bg-[#768B68] opacity-80 cursor-wait' : 'bg-[#768B68] hover:bg-[#5f7153] shadow-[0_15px_30px_-10px_rgba(118,139,104,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(118,139,104,0.6)] hover:-translate-y-1'}`}
              >
                <span className={`transition-opacity duration-500 ${formStatus === 'submitting' ? 'opacity-0' : 'opacity-100'}`}>Confirm Appointment</span>
                {formStatus === 'submitting' && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                )}
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
