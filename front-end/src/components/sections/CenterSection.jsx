import { useState, useEffect } from "react";

export default function CenterSection() {
  const [selection, setSelection] = useState({
    id: 2, // Default to Adan
    img: "/assets/adan.png",
    title: "Legacy Black",
    subtitle: "Elegancia Atemporal"
  });

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleSelection = (e) => {
      setIsAnimating(true);
      setTimeout(() => {
        setSelection(e.detail);
        setIsAnimating(false);
      }, 400); // Wait for fade out
    };

    window.addEventListener("worship:selection-change", handleSelection);
    return () => window.removeEventListener("worship:selection-change", handleSelection);
  }, []);

  return (
    <section className="h-[48vh] flex flex-col items-center justify-center px-6 py-6 md:py-10 relative overflow-hidden shrink-0">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-cyan-200/10 blur-[60px] md:blur-[100px] rounded-full -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] md:w-[250px] h-[180px] md:h-[250px] bg-fuchsia-200/10 blur-[50px] md:blur-[80px] rounded-full -z-10" />

      {/* Main Container */}
      <div
        className={`max-w-4xl w-full flex flex-row items-center gap-6 md:gap-12 transition-all duration-500 ease-out 
        ${isAnimating ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100 blur-0"}`}
      >

        {/* Visual Content */}
        <div className="relative group w-1/3 md:w-1/2 flex justify-center">
          {/* Glass Background for Image */}
          <div className="absolute inset-x-0 inset-y-0 bg-white/40 backdrop-blur-xl rounded-[24px] md:rounded-[40px] border border-white/60 shadow-[0_12px_24px_-8px_rgba(0,0,0,0.1)] -z-10 transform -rotate-2" />

          <img
            src={selection.img}
            alt={selection.title}
            className="w-[120px] sm:w-[180px] md:w-[260px] h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-transform duration-700 group-hover:scale-105"
          />

          {/* Badge */}
          <div className="absolute bottom-2 right-2 md:bottom-6 md:right-6 bg-black/90 text-white px-2 py-1 md:px-5 md:py-2 rounded-lg md:rounded-2xl backdrop-blur-md shadow-2xl">
            <span className="font-['Playfair_Display'] text-[8px] md:text-sm tracking-widest uppercase font-bold text-cyan-300">New Edition</span>
          </div>
        </div>

        {/* Textual Content */}
        <div className="w-2/3 md:w-1/2 flex flex-col gap-2 md:gap-6 text-left">
          <div className="space-y-0 md:space-y-2">
            <h3 className="text-cyan-600/60 font-medium tracking-[0.2em] md:tracking-[0.3em] uppercase text-[8px] md:text-sm">
              Marketing Excellence
            </h3>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-[#1a1a1a] leading-tight">
              {selection.title}
            </h2>
            <p className="font-['Playfair_Display'] text-sm md:text-2xl text-black/40 italic font-medium">
              {selection.subtitle}
            </p>
          </div>

          <div className="h-[2px] w-8 md:w-20 bg-gradient-to-r from-black to-transparent" />

          <p className="text-[#4a4a4a] text-[10px] md:text-lg leading-relaxed max-w-md font-light">
            Nuestra colección <span className="font-bold text-black">Worship Caps</span> redefine el lujo moderno.
          </p>

          <div className="flex flex-row gap-2 md:gap-4 mt-2">
            <button className="px-4 py-2 md:px-8 md:py-4 bg-black text-white rounded-full text-[10px] md:text-base font-semibold tracking-wider hover:bg-neutral-800 transition-colors shadow-xl shadow-black/10 cursor-pointer">
              Explorar
            </button>
            <button className="px-4 py-2 md:px-8 md:py-4 border border-black/10 rounded-full text-[10px] md:text-base font-semibold tracking-wider hover:bg-black/5 transition-all cursor-pointer">
              Ver Mas
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
