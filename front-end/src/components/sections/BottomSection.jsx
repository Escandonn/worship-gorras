import { useEffect, useRef, useState } from "react";

export default function BottomSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="h-screen flex items-center justify-center bg-[#f8f9fa] overflow-hidden px-6 relative"
    >
      {/* Background floating light */}
      <div className={`absolute top-0 right-0 w-full h-full transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#111]/5 blur-[150px] rounded-full animate-pulse" />
      </div>

      <div className={`relative z-10 w-full max-w-6xl h-[65vh] flex flex-col items-center justify-center text-center bg-white/40 backdrop-blur-3xl rounded-[4rem] border border-white/60 shadow-[0_40px_100px_rgba(0,0,0,0.05)] p-12 transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <h3 className={`text-[#111] font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs mb-6 transition-all duration-700 ${isVisible ? 'opacity-40 tracking-[0.7em]' : 'opacity-0 tracking-[0.3em]'}`}>
          Get in Touch
        </h3>

        <h2 className={`font-['Playfair_Display'] text-5xl md:text-8xl lg:text-9xl font-black text-[#111] leading-tight tracking-tighter mb-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          CONTACTO
        </h2>

        <div className={`h-[2px] w-24 bg-[#111] rounded-full mb-12 opacity-20 transition-all duration-1000 delay-600 ${isVisible ? 'w-32' : 'w-0'}`} />

        <div className={`flex flex-col md:flex-row gap-8 items-center justify-center w-full transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a href="mailto:info@worshipcaps.com" className="text-xl md:text-3xl font-black text-[#111] hover:text-cyan-600 transition-all hover:scale-105 active:scale-95 leading-none">
            INFO@WORSHIPCAPS.COM
          </a>
          <div className="hidden md:block w-px h-10 bg-[#111]/20" />
          <a href="https://instagram.com/worshipcaps" target="_blank" className="text-xl md:text-3xl font-black text-[#111] hover:text-fuchsia-600 transition-all hover:scale-105 active:scale-95 leading-none">
            @WORSHIPCAPS
          </a>
        </div>

        <div className={`mt-16 text-[10px] font-bold tracking-[0.3em] text-[#111]/30 uppercase transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          © 2026 Worship Premium Headwear. All rights reserved.
        </div>
      </div>
    </section>
  );
}