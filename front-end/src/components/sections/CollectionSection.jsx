import { useState, useEffect } from "react";

export default function CollectionSection() {
    const [shift, setShift] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % 6);
        }, 800);
        return () => clearInterval(interval);
    }, []);

    const positions = [
        { width: "75px", height: "135px", transform: `translate3d(-120px, -110px, -200px) rotateZ(-20deg) rotateX(15deg)`, borderRadius: "20px", border: "1px solid rgba(255,255,255,.15)", boxShadow: "0 8px 15px rgba(0,0,0,.2)", opacity: "opacity-40 blur-[0.5px] scale-90" },
        { width: "85px", height: "115px", transform: `translate3d(0px, -90px, 50px) rotateZ(0deg) rotateX(15deg)`, borderRadius: "15px", border: "1px solid rgba(255,255,255,.6)", boxShadow: "0 20px 40px rgba(0,0,0,.35)", opacity: "opacity-100 scale-110 brightness-110" },
        { width: "75px", height: "135px", transform: `translate3d(120px, -110px, -200px) rotateZ(20deg) rotateX(15deg)`, borderRadius: "24px", border: "1px solid rgba(255,255,255,.15)", boxShadow: "0 8px 15px rgba(0,0,0,.2)", opacity: "opacity-40 blur-[0.5px] scale-90" },
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

    const TXT_L_MOB = "text-[25px]";
    const TXT_M_MOB = "text-[20px]";
    const TXT_S_MOB = "text-[18px]";
    const TXT_L_PC = "md:text-[38px] lg:text-[44px]";
    const TXT_M_PC = "md:text-[22px] lg:text-[28px]";
    const TXT_S_PC = "md:text-[16px] lg:text-[22px]";

    return (
        <section id="coleccion" className="relative h-screen flex items-center justify-center bg-[#f8f9fa] py-4">

            {/* PANEL CONTENEDOR PRINCIPAL */}
            <div className="relative w-[95%] md:w-[94%] h-[40vh] md:h-[35vh] max-w-[1500px] mx-auto bg-white/30 backdrop-blur-xl rounded-[2.5rem] border border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.03)] flex items-center justify-center">

                {/* LADO IZQUIERDO */}
                <div className="absolute left-6 md:left-[8%] lg:left-[12%] flex items-baseline gap-2 md:gap-3 z-0 pointer-events-none">
                    <span className={`font-['Playfair_Display'] ${TXT_M_MOB} ${TXT_M_PC} font-black animate-word-focus -translate-y-4 md:-translate-y-12 text-[#111]`}>Con</span>
                    <span className={`font-['Playfair_Display'] ${TXT_S_MOB} ${TXT_S_PC} font-bold animate-word-focus text-[#111]/60`}>un</span>
                    <span className={`font-['Playfair_Display'] ${TXT_L_MOB} ${TXT_L_PC} font-black animate-word-focus translate-y-4 md:translate-y-12 ml-1 md:ml-4 text-[#111]`}>triángulo</span>
                </div>

                {/* NÚCLEO CENTRAL */}
                <div className="relative flex items-center justify-center perspective-distant transform-3d z-10 scale-[0.9] md:scale-100 lg:scale-110">
                    {cards.map((c, i) => {
                        const pos = positions[(i + shift) % 3];
                        return (
                            <div
                                key={i}
                                className={`absolute overflow-hidden bg-white/10 backdrop-blur-xs transition-all duration-700 ease-in-out flex items-center justify-center ${pos.opacity}`}
                                style={{ width: pos.width, height: pos.height, transform: pos.transform, borderRadius: pos.borderRadius, border: pos.border, boxShadow: pos.boxShadow, padding: "10px" }}
                            >
                                <img src={c.img} alt="" className="w-full h-full object-contain" />
                            </div>
                        );
                    })}

                    <div className="absolute z-5 w-[140px] h-[140px] md:w-[170px] md:h-[170px] rounded-full border-2 border-cyan-300/40 animate-[ringPulse1_3.8s_ease-in-out_infinite]" />
                    <div className="absolute z-5 w-[100px] h-[100px] md:w-[130px] md:h-[130px] rounded-full border-2 border-fuchsia-300/40 animate-[ringPulse2_3.2s_ease-in-out_infinite]" />

                    <button
                        onClick={handleNext}
                        className="relative z-30 px-6 py-2.5 md:px-[34px] md:py-[12px] rounded-full border border-white/90 bg-linear-to-b from-white to-[#e9edf2] font-['Playfair_Display'] font-bold tracking-[0.2em] text-[12px] md:text-[14px] text-[#111] shadow-xl active:scale-95 transition-transform"
                    >
                        WORSHIP
                    </button>
                </div>

                {/* LADO DERECHO */}
                <div className="absolute right-6 md:right-[8%] lg:right-[12%] flex items-baseline gap-2 md:gap-3 z-0 pointer-events-none">
                    <span className={`font-['Playfair_Display'] ${TXT_L_MOB} ${TXT_L_PC} font-black animate-word-focus translate-y-4 md:translate-y-12 mr-1 md:mr-4 text-[#111]`}>en</span>
                    <span className={`font-['Playfair_Display'] ${TXT_S_MOB} ${TXT_S_PC} font-bold animate-word-focus text-[#111]/60`}>la</span>
                    <span className={`font-['Playfair_Display'] ${TXT_M_MOB} ${TXT_M_PC} font-black animate-word-focus -translate-y-4 md:-translate-y-12 text-[#111]`}>frente</span>
                </div>

            </div>
        </section>
    );
}
