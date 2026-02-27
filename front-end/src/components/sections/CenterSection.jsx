import { useState, useEffect } from "react";

export default function CenterSection() {
  // --- CONFIGURACIÓN DE TAMAÑO / HEIGHT CONFIG ---
  const HEIGHT_MOBILE = "h-[65vh]"; // Altura en móvil
  const HEIGHT_DESKTOP = "md:h-[65vh]"; // Altura en PC (reducida para dar más aire)
  // -----------------------------------------------

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
    <section className={`${HEIGHT_MOBILE} ${HEIGHT_DESKTOP} flex flex-col items-center justify-center px-4 py-8 md:px-6 relative overflow-hidden shrink-0`}>
      {/* Background decoration: Más vibrante / More vibrant */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-400/15 blur-[80px] md:blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] md:w-[450px] h-[220px] md:h-[450px] bg-fuchsia-400/10 blur-[70px] md:blur-[100px] rounded-full -z-10" />

      {/* Main Container: Flex-col en móvil, flex-row en PC */}
      <div
        className={`max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-24 transition-all duration-500 ease-out 
        ${isAnimating ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100 blur-0"}`}
      >

        {/* Visual Content & Text Wrap (Mobile Specific Layering) */}
        <div className="relative group w-full md:w-1/2 flex flex-col items-center justify-center">

          {/* Main Product Card (Glass 2.0) */}
          <div className="relative w-full max-w-[320px] md:max-w-none aspect-square md:aspect-auto md:min-h-[450px] flex items-center justify-center p-8">
            {/* Multi-layered Glass Background */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-2xl rounded-[40px] md:rounded-[60px] border border-white/60 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] -z-10 transform -rotate-1 md:-rotate-2 transition-transform duration-700 group-hover:rotate-0" />
            <div className="absolute inset-4 bg-white/20 backdrop-blur-md rounded-[32px] md:rounded-[48px] border border-white/30 -z-10 transform rotate-2 md:rotate-3" />

            {/* Product Image */}
            <img
              src={selection.img}
              alt={selection.title}
              className="w-[180px] sm:w-[240px] md:w-[340px] lg:w-[420px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition-all duration-700 group-hover:scale-110 group-hover:-rotate-3"
            />

            {/* Float Badge */}
            <div className="absolute -bottom-4 right-4 md:bottom-12 md:right-12 bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl backdrop-blur-lg shadow-2xl z-20 border border-white/10">
              <span className="font-['Playfair_Display'] text-[10px] md:text-sm tracking-[0.3em] uppercase font-black text-cyan-400">New Edition</span>
            </div>
          </div>

          {/* Mobile-only Overlaid Heading (SOBRESALIENTE) */}
          <div className="md:hidden absolute top-[-10px] left-[-10px] pointer-events-none z-30">
            <h2 className="font-['Playfair_Display'] text-4xl font-black text-black/90 leading-none drop-shadow-sm select-none">
              {selection.title.split(' ')[0]}
            </h2>
          </div>
        </div>

        {/* Textual Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-4 md:gap-8 text-center md:text-left">
          <div className="space-y-1 md:space-y-3">
            <h3 className="text-cyan-600 font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-sm">
              Marketing Excellence
            </h3>

            {/* Desktop Title & Remaining Mobile Title */}
            <h2 className="hidden md:block font-['Playfair_Display'] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#111] leading-[0.9] tracking-tighter">
              {selection.title}
            </h2>

            <h2 className="md:hidden font-['Playfair_Display'] text-5xl font-black text-black leading-none -mt-2">
              {selection.title.split(' ').slice(1).join(' ')}
            </h2>

            <p className="font-['Playfair_Display'] text-lg md:text-3xl lg:text-4xl text-fuchsia-600/60 italic font-semibold">
              {selection.subtitle}
            </p>
          </div>

          <div className="h-[3px] w-12 md:w-24 bg-gradient-to-r from-cyan-500 to-transparent rounded-full shadow-sm" />

          <p className="text-black/60 text-sm md:text-xl lg:text-2xl leading-relaxed max-w-sm md:max-w-lg font-medium">
            Nuestra colección <span className="text-black font-extrabold underline decoration-cyan-400 decoration-2 underline-offset-4">Worship Caps</span> redefine el lujo moderno para los más exigentes.
          </p>

          <div className="flex flex-row gap-4 md:gap-6 mt-4 w-full justify-center md:justify-start">
            <button className="flex-1 md:flex-none px-8 py-3 md:px-12 md:py-5 bg-black text-white rounded-[20px] md:rounded-full text-xs md:text-lg font-bold tracking-widest hover:bg-neutral-800 transition-all shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] hover:-translate-y-1 active:scale-95 cursor-pointer">
              EXPLORAR
            </button>
            <button className="flex-1 md:flex-none px-8 py-3 md:px-12 md:py-5 border-2 border-black/5 bg-white/50 backdrop-blur-md rounded-[20px] md:rounded-full text-xs md:text-lg font-bold tracking-widest hover:bg-black/5 transition-all cursor-pointer">
              VER MAS
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
