import { useState } from "react";

export default function MenuSection() {
  const [shift, setShift] = useState(0);

  const positions = [
    {
      width: "60px", mdWidth: "70px",
      height: "110px", mdHeight: "130px",
      transform: `translate3d(-80px, -80px, -150px) rotateZ(-15deg) rotateX(10deg)`,
      mdTransform: `translate3d(-120px, -120px, -200px) rotateZ(-20deg) rotateX(15deg)`,
      borderRadius: "16px", border: "1px solid rgba(255,255,255,.15)", boxShadow: "0 8px 15px rgba(0,0,0,.2)", opacity: "opacity-40 blur-[0.5px] scale-90"
    },
    {
      width: "75px", mdWidth: "85px",
      height: "105px", mdHeight: "115px",
      transform: `translate3d(0px, -70px, 40px) rotateZ(0deg) rotateX(10deg)`,
      mdTransform: `translate3d(0px, -95px, 60px) rotateZ(0deg) rotateX(15deg)`,
      borderRadius: "14px", border: "1px solid rgba(255,255,255,.6)", boxShadow: "0 22px 44px rgba(0,0,0,.35)", opacity: "opacity-100 scale-110 brightness-110"
    },
    {
      width: "60px", mdWidth: "70px",
      height: "110px", mdHeight: "130px",
      transform: `translate3d(80px, -80px, -150px) rotateZ(15deg) rotateX(10deg)`,
      mdTransform: `translate3d(120px, -120px, -200px) rotateZ(20deg) rotateX(15deg)`,
      borderRadius: "20px", border: "1px solid rgba(255,255,255,.15)", boxShadow: "0 8px 15px rgba(0,0,0,.2)", opacity: "opacity-40 blur-[0.5px] scale-90"
    },
  ];

  const cards = [
    { id: 1, img: "/assets/img.png", title: "Stability Pro", subtitle: "Innovación y Confort" },
    { id: 2, img: "/assets/adan.png", title: "Legacy Black", subtitle: "Elegancia Atemporal" },
    { id: 3, img: "/assets/img.png", title: "Zenith Silver", subtitle: "Estilo Vanguardista" },
  ];

  const handleNext = () => {
    setShift((prev) => {
      const newShift = (prev + 1) % 3;
      const frontCardIndex = (1 - newShift + 3) % 3;
      const frontCard = cards[frontCardIndex];
      window.dispatchEvent(new CustomEvent("worship:selection-change", { detail: frontCard }));
      return newShift;
    });
  };

  return (
    <section className="relative h-[52vh] flex flex-col items-center justify-center px-4 shrink-0">

      {/* NÚCLEO */}
      <div className="relative flex items-center justify-center z-10 w-full max-w-4xl h-full">

        {/* TEXTO IZQUIERDO INTEGRADO */}
        <div className="absolute left-2 md:left-[5%] flex flex-col items-start gap-0 z-0 pointer-events-none opacity-50 md:opacity-100">
          <span className="font-['Playfair_Display'] text-[18px] md:text-[34px] lg:text-[42px] font-black text-black">
            Con un
          </span>
          <span className="font-['Playfair_Display'] text-[22px] md:text-[42px] lg:text-[52px] font-black text-black ml-4">
            triángulo
          </span>
        </div>

        {/* STACK 3D CENTRAL */}
        <div className="relative flex items-center justify-center [perspective:800px] md:[perspective:1000px] [transform-style:preserve-3d] scale-[0.85] md:scale-[1.05] h-[180px] md:h-[250px]">
          {cards.map((c, i) => {
            const pos = positions[(i + shift) % 3];
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
            return (
              <div
                key={i}
                className={`absolute bg-white/10 backdrop-blur-[4px] transition-all duration-700 ease-in-out flex items-center justify-center ${pos.opacity}`}
                style={{
                  width: isMobile ? pos.width : pos.mdWidth,
                  height: isMobile ? pos.height : pos.mdHeight,
                  transform: isMobile ? pos.transform : pos.mdTransform,
                  borderRadius: pos.borderRadius,
                  border: pos.border,
                  boxShadow: pos.boxShadow,
                  padding: isMobile ? "8px" : "10px",
                }}
              >
                <img src={c.img} alt={c.title} className="w-full h-full object-contain" />
              </div>
            );
          })}

          {/* BOTÓN - Centrado verticalmente respecto al stack */}
          <button
            onClick={handleNext}
            className="mt-24 md:mt-0 relative z-30 px-7 py-3 md:px-14 md:py-4 rounded-full border border-white/90 bg-gradient-to-b from-white to-[#e9edf2] font-['Playfair_Display'] font-bold tracking-[0.1em] md:tracking-[0.18em] text-[13px] md:text-[18px] text-[#111] shadow-2xl active:scale-95 transition-transform cursor-pointer"
          >
            WORSHIP
          </button>
        </div>

        {/* TEXTO DERECHO INTEGRADO */}
        <div className="absolute right-2 md:right-[5%] flex flex-col items-end gap-0 z-0 pointer-events-none opacity-50 md:opacity-100">
          <span className="font-['Playfair_Display'] text-[22px] md:text-[42px] lg:text-[52px] font-black text-black mr-4 uppercase tracking-tighter">
            en la
          </span>
          <span className="font-['Playfair_Display'] text-[18px] md:text-[34px] lg:text-[42px] font-black text-black">
            frente
          </span>
        </div>

      </div>

      {/* ===== LÍNEAS DECORATIVAS COMPACTAS ===== */}
      <div className="absolute bottom-2 flex flex-col items-center gap-[3px] md:gap-[6px] w-[150px] md:w-[400px]">
        <div className="h-[1px] md:h-[2px] bg-black w-full opacity-20" />
        <div className="h-[1px] md:h-[2px] bg-black w-[50%] opacity-10" />
      </div>

    </section>
  );
}


