import React, { useState, useEffect } from 'react';

const ContactSection = () => {
  const [time, setTime] = useState('');

  // Цагийг секунд тутамд шинэчлэх (Улаанбаатарын цагаар)
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Ulaanbaatar',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Хуудасны дээшээ зөөлөн гүйх функц
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-black text-white px-6 py-12 md:px-20 md:py-20 font-sans border-t border-gray-900 relative">
      <div className="max-w-7xl mx-auto flex flex-col min-h-[80vh]">
        
        {/* 1. Төв хэсэг: Дуудлага (CTA) */}
        <div className="flex-grow flex flex-col items-center justify-center text-center py-20">
          <h1 className="text-5xl md:text-8xl font-black tracking-[0.2em] uppercase mb-8 animate-fade-in-up">
            ETHEREAL
          </h1>
          <p className="max-w-2xl text-gray-400 text-sm md:text-base leading-relaxed mb-10 tracking-wide opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Have a project in mind or want to work together? 
            Feel free to reach out — I’m always open to new opportunities and collaborations.
          </p>
          
          <a 
            href="mailto:hello.xionsqqq@gmail.com"
            className="group inline-flex items-center gap-3 border border-gray-700 rounded-full px-10 py-4 text-[10px] tracking-[0.2em] uppercase transition-all duration-500 hover:bg-white hover:text-black opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Let’s work together 
            <span className="text-lg transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
          </a>
        </div>

        {/* 2. Доод хэсэг: Мэдээлэл болон Холбоосууд */}
        <div className="mt-auto">
          {/* Хуваагч шугам */}
          <div className="w-full h-[1px] bg-gray-900 mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 items-end text-[10px] tracking-[0.15em] uppercase text-gray-500 font-medium">
            
            {/* Холбоо барих болон Сошиал сувгууд */}
            <div className="flex flex-col gap-4">
              <span className="text-gray-700 mb-1 tracking-[0.3em]">Contact</span>
              <a href="mailto:xionsqqq@gmail.com" className="hover:text-white transition-colors duration-300 w-fit lowercase text-sm">
                xionsqqq@gmail.com
              </a>
              <div className="flex gap-6 mt-2">
                <a href="#" className="hover:text-white transition-colors duration-300">Instagram</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Behance</a>
              </div>
            </div>

            {/* Орон нутгийн цаг болон Хяналт */}
            <div className="flex flex-col gap-4 md:items-center">
              <span className="text-gray-700 mb-1 tracking-[0.3em]">Local Time</span>
              <p className="text-gray-300 text-sm">ULN — {time || '00:00:00'}</p>
              <button 
                onClick={scrollToTop}
                className="hover:text-white transition-colors duration-300 flex items-center gap-2 group cursor-pointer"
              >
                Back to top <span className="group-hover:-translate-y-1 transition-transform">↑</span>
              </button>
            </div>

            {/* Зохиогчийн эрх */}
            <div className="md:text-right flex flex-col gap-4">
              <span className="text-gray-700 mb-1 tracking-[0.3em]">Credits</span>
              <p>
                Designed by{' '}
                <a href="#" className="text-gray-300 hover:text-white underline underline-offset-8 decoration-gray-800 hover:decoration-white transition-all">
                  Xionsqqq
                </a>
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;