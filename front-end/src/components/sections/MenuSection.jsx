import { useState } from "react";

export default function MenuSection() {
  const positions = [
    { // left
      width: "80px",
      height: "150px",
      transform: `translate3d(-140px, -150px, -280px) rotateZ(-24deg) rotateX(18deg)`,
      borderRadius: "26px",
      border: "1px solid rgba(255,255,255,.15)",
      boxShadow: "0 10px 20px rgba(0,0,0,.25)",
      opacity: "opacity-40 blur-[0.5px] scale-90",
    },
    { // center
      width: "85px",
      height: "120px",
      transform: `translate3d(0px, -130px, 60px) rotateZ(0deg) rotateX(18deg)`,
      borderRadius: "18px",
      border: "1px solid rgba(255,255,255,.6)",
      boxShadow: "0 30px 60px rgba(0,0,0,.45)",
      opacity: "opacity-100 scale-110 brightness-110",
    },
    { // right
      width: "80px",
      height: "150px",
      transform: `translate3d(140px, -150px, -280px) rotateZ(24deg) rotateX(18deg)`,
      borderRadius: "30px",
      border: "1px solid rgba(255,255,255,.15)",
      boxShadow: "0 10px 20px rgba(0,0,0,.25)",
      opacity: "opacity-40 blur-[0.5px] scale-90",
    },
  ];

  const [shift, setShift] = useState(0);

  const cards = [
    { id: 1, img: "/assets/img.png" },
    { id: 2, img: "/assets/adan.png" },
    { id: 3, img: "/assets/img.png" },
  ];

  const handleNext = () => {
    console.log('handleNext called');
    setShift((prev) => (prev + 1) % 3);
  };

  return (
    <section className="h-[40vh] flex items-center justify-center">
      <div className="relative flex items-center justify-center [perspective:1200px] [transform-style:preserve-3d]">
        
        {/* CARDS 3D */}
        {cards.map((c, i) => {
          const pos = positions[(i + shift) % 3];

          return (
            <div
              key={i}
              className={`absolute overflow-hidden bg-white/10 backdrop-blur-[4px] transition-all duration-700 ease-in-out flex items-center justify-center ${pos.opacity}`}
              style={{
                width: pos.width,
                height: pos.height,
                transform: pos.transform,
                borderRadius: pos.borderRadius,
                border: pos.border,
                boxShadow: pos.boxShadow,
                padding: "12px",
              }}
            >
              <img
                src={c.img}
                alt=""
                className="w-full h-full object-contain transition-all duration-700"
              />
            </div>
          );
        })}

        {/* RINGS */}
        <div className="absolute z-[5] w-[160px] h-[160px] md:w-[210px] md:h-[210px] rounded-full border-[3px] border-cyan-300/50 animate-[ringPulse1_3.8s_ease-in-out_infinite]" />
        <div className="absolute z-[5] w-[120px] h-[120px] md:w-[170px] md:h-[170px] rounded-full border-[3px] border-fuchsia-300/50 animate-[ringPulse2_3.2s_ease-in-out_infinite]" />

        {/* BUTTON */}
        <button
          onClick={handleNext}
          className="
            relative z-30
            px-[36px] py-[13px]
            rounded-full border border-white/90
            bg-gradient-to-b from-white to-[#e9edf2]
            font-['Playfair_Display'] tracking-[0.28em] text-[15px] text-[#111]
            active:scale-95 transition-transform
            animate-[btnPulse_3s_ease-in-out_infinite]
          "
        >
          WORSHIP
        </button>
      </div>
    </section>
  );
}