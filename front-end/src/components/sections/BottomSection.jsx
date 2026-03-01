import { useEffect, useRef, useState } from "react";

export default function BottomSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollScale, setScrollScale] = useState(1);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate visibility percentage (0 to 1)
      const visiblePct = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (viewportHeight + rect.height)));

      // Set a scale factor based on scroll
      const newScale = 0.8 + (visiblePct * 0.4);
      setScrollScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden px-6 relative"
    >
      {/* ATMOSPHERIC BACKGROUND */}
      <div className={`absolute inset-0 z-0 transition-opacity duration-[2000ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-950/20 blur-[180px] rounded-full" />
        <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-fuchsia-950/10 blur-[150px] rounded-full" />
      </div>

      {/* TRIPART BACKGROUND BRANDING WITH DISPERSIVE SCROLL MOTION */}
      <div
        className={`absolute inset-0 z-0 flex items-center justify-center transition-opacity duration-1000 ${isVisible ? 'opacity-5' : 'opacity-0'}`}
      >
        <div className="flex gap-2 md:gap-8 items-baseline select-none">
          {/* PART 1: WO */}
          <div
            className="font-['Playfair_Display'] text-[12vh] md:text-[35vh] lg:text-[45vh] font-black text-white leading-none tracking-tighter"
            style={{
              transform: `scale(${scrollScale * 1.1}) translateX(${(1 - scrollScale) * 200}px) translateY(${(1 - scrollScale) * 100}px) rotate(-10deg)`
            }}
          >
            WO
          </div>
          {/* PART 2: RSH */}
          <div
            className="font-['Playfair_Display'] text-[12vh] md:text-[35vh] lg:text-[45vh] font-black text-white leading-none tracking-tighter"
            style={{
              transform: `scale(${scrollScale}) translateY(${(scrollScale - 1) * -50}px)`
            }}
          >
            RSH
          </div>
          {/* PART 3: IP */}
          <div
            className="font-['Playfair_Display'] text-[12vh] md:text-[35vh] lg:text-[45vh] font-black text-white leading-none tracking-tighter"
            style={{
              transform: `scale(${scrollScale * 0.95}) translateX(${(scrollScale - 1) * 200}px) translateY(${(scrollScale - 1) * 100}px) rotate(10deg)`
            }}
          >
            IP
          </div>
        </div>
      </div>

      <div className={`relative z-10 w-full max-w-5xl flex flex-col items-center justify-center text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

        {/* EXCLUSIVE BADGE */}
        <div className={`mb-10 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0 shadow-[0_0_20px_rgba(255,255,255,0.05)]' : 'opacity-0 -translate-y-4'}`}>
          <span className="text-white/40 font-bold tracking-[0.6em] uppercase text-[9px] md:text-xs">The Final Link</span>
        </div>

        {/* MAIN HEADLINE (THE MONOLITH) */}
        <h2 className={`font-['Playfair_Display'] text-6xl md:text-9xl font-black text-white text-glow-white leading-none tracking-tighter mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          ÚNETE AL <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white/80 to-white/40">
            CULTO
          </span>
        </h2>

        {/* INTERACTIVE BUTTONS */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center w-full px-4 mb-20">

          {/* INSTAGRAM BUTTON (FOLLOW THE CULT) */}
          <a
            href="https://instagram.com/worshipcaps"
            target="_blank"
            className={`group relative overflow-hidden px-10 py-5 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} hover:border-fuchsia-500/50 hover:bg-fuchsia-500/5 hover:glow-fuchsia`}
          >
            <div className="relative z-10 flex flex-col items-center gap-1">
              <span className="text-fuchsia-500 font-bold tracking-[0.3em] text-[10px] uppercase group-hover:tracking-[0.4em] transition-all">FOLLOW THE CULT</span>
              <span className="text-white text-2xl md:text-3xl font-black tracking-tight">INSTAGRAM</span>
            </div>
            <div className="absolute inset-0 bg-linear-to-tr from-fuchsia-500/0 via-fuchsia-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </a>

          {/* WHATSAPP BUTTON (DIRECT LINE) */}
          <a
            href="https://wa.me/your-number"
            target="_blank"
            className={`group relative overflow-hidden px-10 py-5 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} hover:border-cyan-500/50 hover:bg-cyan-500/5 hover:glow-cyan`}
          >
            <div className="relative z-10 flex flex-col items-center gap-1">
              <span className="text-cyan-500 font-bold tracking-[0.3em] text-[10px] uppercase group-hover:tracking-[0.4em] transition-all">DIRECT LINE</span>
              <span className="text-white text-2xl md:text-3xl font-black tracking-tight">WHATSAPP</span>
            </div>
            <div className="absolute inset-0 bg-linear-to-tr from-cyan-500/0 via-cyan-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </a>

        </div>

        {/* FOOTER & CREDITS */}
        <div className={`w-full max-w-3xl flex flex-col md:flex-row items-center justify-between gap-8 pt-10 border-t border-white/5 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center md:items-start">
            <span className="text-white/20 text-[10px] font-bold tracking-[0.4em] uppercase mb-2">Designed for the Elite</span>
            <span className="text-white/40 text-[11px] font-medium">© 2026 WORSHIP PREMIUM HEADWEAR</span>
          </div>

          <div className="h-[1px] w-12 bg-white/10 hidden md:block" />

          {/* WORSHIP SOLUTIONS CREDIT */}
          <div className="group flex flex-col items-center md:items-end cursor-default">
            <span className="text-white/20 text-[10px] font-bold tracking-[0.4em] uppercase mb-1">Experience Architecture</span>
            <div className="flex items-center gap-2">
              <span className="text-white/30 text-[11px] font-medium group-hover:text-white/60 transition-colors">Creado por</span>
              <span className="text-white/60 text-[12px] font-black tracking-tighter group-hover:text-cyan-400 transition-all">worship.solutions</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}