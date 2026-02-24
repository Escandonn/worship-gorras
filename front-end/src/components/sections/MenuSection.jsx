import { useState } from "react";

export default function MenuSection() {
  const [shift, setShift] = useState(0);

  const positions = [
    { width: "65px", height: "120px", transform: `translate3d(-110px, -110px, -200px) rotateZ(-20deg) rotateX(15deg)`, borderRadius: "20px", border: "1px solid rgba(255,255,255,.15)", boxShadow: "0 8px 15px rgba(0,0,0,.2)", opacity: "opacity-40 blur-[0.5px] scale-90" },
    { width: "75px", height: "100px", transform: `translate3d(0px, -90px, 50px) rotateZ(0deg) rotateX(15deg)`, borderRadius: "15px", border: "1px solid rgba(255,255,255,.6)", boxShadow: "0 20px 40px rgba(0,0,0,.35)", opacity: "opacity-100 scale-110 brightness-110" },
    { width: "65px", height: "120px", transform: `translate3d(110px, -110px, -200px) rotateZ(20deg) rotateX(15deg)`, borderRadius: "24px", border: "1px solid rgba(255,255,255,.15)", boxShadow: "0 8px 15px rgba(0,0,0,.2)", opacity: "opacity-40 blur-[0.5px] scale-90" },
  ];

  const cards = [
    { id: 1, img: "/assets/img.png" },
    { id: 2, img: "/assets/adan.png" },
    { id: 3, img: "/assets/img.png" },
  ];

  const handleNext = () => setShift((prev) => (prev + 1) % 3);

  return (
    <section className="relative h-[40vh] md:h-[20vh] flex items-center justify-center overflow-hidden bg-[#f4f4f4] px-4">
      
      {/* LADO IZQUIERDO: FLUJO EN "V" COMPACTO */}
      <div className="absolute left-2 md:left-[6%] lg:left-[10%] flex items-baseline gap-2 md:gap-3 z-0 pointer-events-none">
        <span className="font-['Playfair_Display'] text-[20px] md:text-[32px] lg:text-[40px] font-black text-black -translate-y-4 md:-translate-y-8">
          Con
        </span>
        <span className="font-['Playfair_Display'] text-[18px] md:text-[24px] lg:text-[30px] font-bold text-black/30">
          un
        </span>
        <span className="font-['Playfair_Display'] text-[24px] md:text-[38px] lg:text-[48px] font-black text-black translate-y-4 md:translate-y-8 ml-1 md:ml-4">
          triángulo
        </span>
      </div>

      {/* NÚCLEO CENTRAL */}
      <div className="relative flex items-center justify-center [perspective:1000px] [transform-style:preserve-3d] z-10 scale-75 md:scale-[0.85]">
        {cards.map((c, i) => {
          const pos = positions[(i + shift) % 3];
          return (
            <div
              key={i}
              className={`absolute overflow-hidden bg-white/10 backdrop-blur-[4px] transition-all duration-700 ease-in-out flex items-center justify-center ${pos.opacity}`}
              style={{ width: pos.width, height: pos.height, transform: pos.transform, borderRadius: pos.borderRadius, border: pos.border, boxShadow: pos.boxShadow, padding: "10px" }}
            >
              <img src={c.img} alt="" className="w-full h-full object-contain" />
            </div>
          );
        })}

        <div className="absolute z-[5] w-[140px] h-[140px] md:w-[160px] md:h-[160px] rounded-full border-[2px] border-cyan-300/40 animate-[ringPulse1_3.8s_ease-in-out_infinite]" />
        <div className="absolute z-[5] w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full border-[2px] border-fuchsia-300/40 animate-[ringPulse2_3.2s_ease-in-out_infinite]" />

        <button
          onClick={handleNext}
          className="relative z-30 px-6 py-2.5 md:px-[30px] md:py-[10px] rounded-full border border-white/90 bg-gradient-to-b from-white to-[#e9edf2] font-['Playfair_Display'] font-bold tracking-[0.2em] text-[12px] md:text-[13px] text-[#111] shadow-xl active:scale-95 transition-transform"
        >
          WORSHIP
        </button>
      </div>

      {/* LADO DERECHO: FLUJO EN "V" COMPACTO */}
      <div className="absolute right-2 md:right-[6%] lg:right-[10%] flex items-baseline gap-2 md:gap-3 z-0 pointer-events-none">
        <span className="font-['Playfair_Display'] text-[24px] md:text-[38px] lg:text-[48px] font-black text-black translate-y-4 md:translate-y-8 mr-1 md:mr-4">
          en
        </span>
        <span className="font-['Playfair_Display'] text-[18px] md:text-[24px] lg:text-[30px] font-bold text-black/30">
          la
        </span>
        <span className="font-['Playfair_Display'] text-[20px] md:text-[32px] lg:text-[40px] font-black text-black -translate-y-4 md:-translate-y-8">
          frente
        </span>
      </div>

    </section>
  );
}