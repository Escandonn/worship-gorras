import { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { $capSelection, cards } from "../../store/capStore";

export default function HeroSection() {
    // --- CONFIGURACIÓN DE TAMAÑO / HEIGHT CONFIG ---
    const HEIGHT_FULL = "h-screen";
    const HERO_HEIGHT = "h-[63vh] md:h-[65vh]";
    const PANEL_HEIGHT = "h-[20vh] md:h-[20vh]";
    // -----------------------------------------------

    const selection = useStore($capSelection);

    const [shift, setShift] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const positions = [
        { width: "70px", height: "125px", transform: `translate3d(-100px, -110px, -200px) rotateZ(-20deg) rotateX(15deg)`, borderRadius: "18px", border: "1px solid rgba(255,255,255,.15)", boxShadow: "0 8px 15px rgba(0,0,0,.2)", opacity: "opacity-40 blur-[1px] scale-90" },
        { width: "80px", height: "110px", transform: `translate3d(0px, -100px, 50px) rotateZ(0deg) rotateX(15deg)`, borderRadius: "14px", border: "1px solid rgba(255,255,255,.7)", boxShadow: "0 20px 40px rgba(0,0,0,.3), 0 0 20px rgba(34,211,238,0.2)", opacity: "opacity-100 scale-110 brightness-110" },
        { width: "70px", height: "125px", transform: `translate3d(100px, -110px, -200px) rotateZ(20deg) rotateX(15deg)`, borderRadius: "22px", border: "1px solid rgba(255,255,255,.15)", boxShadow: "0 8px 15px rgba(0,0,0,.2)", opacity: "opacity-40 blur-[1px] scale-90" },
    ];

    const handleNext = () => {
        setShift((prev) => {
            const newShift = (prev + 1) % 3;
            const frontCardIndex = (1 - newShift + 3) % 3;
            // USAR LA CONSTANTE 'cards' IMPORTADA DEL STORE
            const frontCard = cards[frontCardIndex];

            setIsAnimating(true);
            setTimeout(() => {
                $capSelection.set(frontCard);
                setIsAnimating(false);
            }, 400);

            return newShift;
        });
    };

    const TXT_L_MOB = "text-[25px]";
    const TXT_M_MOB = "text-[20px]";
    const TXT_S_MOB = "text-[18px]";
    const TXT_L_PC = "md:text-[32px] lg:text-[40px]";
    const TXT_M_PC = "md:text-[18px] lg:text-[24px]";
    const TXT_S_PC = "md:text-[14px] lg:text-[20px]";

    const [scrollPos, setScrollPos] = useState(0);
    const [isClient, setIsClient] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);

        const handleScroll = () => {
            setScrollPos(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", checkMobile);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Fade out as StyleSection image takes over
    const heroOpacity = isClient ? Math.max(1 - (scrollPos / 300), 0) : 1;
    const heroTranslate = isClient ? (scrollPos / 5) : 0;

    return (
        <section id="inicio" className={`${HEIGHT_FULL} flex flex-col items-center bg-[#f8f9fa] overflow-hidden pt-10 md:pt-[80px]`}>

            {/* PARTE SUPERIOR: HERO PRODUCTO */}
            <div className={`${HERO_HEIGHT} w-full flex flex-col items-center justify-center px-4 md:px-6 relative`}>
                {/* Background decoration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-400/10 blur-[100px] rounded-full -z-10 animate-pulse" />

                <div className={`max-w-5xl w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-14 transition-all duration-700 ease-out 
          ${isAnimating ? "opacity-0 scale-95 blur-md" : "opacity-100 scale-100 blur-0"}`}>

                    <div className="relative group w-full md:w-1/2 flex flex-col items-center justify-center">
                        <div
                            className="relative w-full max-w-[220px] md:max-w-none aspect-square md:min-h-[350px] flex items-center justify-center p-6 transition-all duration-300 ease-out"
                            style={{ opacity: heroOpacity, transform: `translateY(${heroTranslate}px)` }}
                        >
                            {/* Glass Card Hero con efecto flotante */}
                            <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl rounded-[35px] md:rounded-[50px] border border-white/60 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.1)] -z-10 animate-[float_6s_ease-in-out_infinite]" />
                            <img
                                src={selection.img}
                                alt={selection.title}
                                className="w-[120px] sm:w-[150px] md:w-[250px] lg:w-[320px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-700 group-hover:scale-105 group-hover:-rotate-2 animate-[float_5s_ease-in-out_infinite]"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-2 md:gap-5 text-center md:text-left">
                        <h3 className="text-cyan-500 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">Worship Premium Line</h3>
                        <div className="space-y-1">
                            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#111] leading-[0.9] tracking-tighter">
                                {selection.title}
                            </h2>
                            <p className="font-['Playfair_Display'] text-base md:text-xl lg:text-2xl text-slate-400/80 italic font-semibold">
                                {selection.subtitle}
                            </p>
                        </div>
                        <div className="h-[2px] w-16 md:w-24 bg-linear-to-r from-cyan-400 to-transparent rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                        <p className="text-[#111]/70 text-xs md:text-base lg:text-lg font-medium max-w-sm leading-relaxed">
                            {selection.desc}
                        </p>

                        {/* BOTÓN DE COMPRA PREMIUM */}
                        <button className="group relative -mt-2 md:mt-4 px-6 py-2 md:px-8 md:py-3 rounded-full bg-[#111] text-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                            <div className="absolute inset-0 bg-linear-to-r from-cyan-400/0 via-cyan-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            <span className="relative z-10 font-bold tracking-[0.2em] text-[10px] md:text-xs">COMPRAR AHORA</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* PARTE INFERIOR: PANEL DE COLECCIÓN */}
            <div className={`${PANEL_HEIGHT} w-full flex items-center justify-center relative`}>
                <div className="relative w-[95%] md:w-[94%] h-full max-w-[1500px] mx-auto bg-linear-to-br from-slate-300/30 via-white/20 to-cyan-400/30 backdrop-blur-3xl rounded-[3rem] border border-white/70 shadow-[0_30px_100px_rgba(148,163,184,0.1),0_40px_100px_rgba(34,211,238,0.2)] flex items-center justify-center">

                    {/* LADO IZQUIERDO DINÁMICO */}
                    <div className="absolute left-2 md:left-[8%] lg:left-[10%] flex flex-col md:flex-row items-start md:items-baseline gap-2 md:gap-4 z-0 pointer-events-none opacity-40 md:translate-y-0">
                        <span className={`font-['Playfair_Display'] ${TXT_M_MOB} ${TXT_M_PC} font-black animate-word-focus md:-translate-y-12 text-[#111] leading-none tracking-tight transition-all duration-700 ${isClient && isMobile ? 'translate-x-0 -translate-y-4' : ''}`}>
                            {selection.heroLeft[0]}
                        </span>
                        <span className={`font-['Playfair_Display'] ${TXT_S_MOB} ${TXT_S_PC} font-bold animate-word-focus text-[#111] leading-none tracking-tight transition-all duration-700 ${isClient && isMobile ? 'translate-x-[15px]' : ''}`}>
                            {selection.heroLeft[1]}
                        </span>
                        <span className={`font-['Playfair_Display'] ${TXT_L_MOB} ${TXT_L_PC} font-black animate-word-focus md:translate-y-12 text-[#111] leading-none tracking-tighter transition-all duration-700 ${isClient && isMobile ? 'translate-x-[45px] translate-y-8' : ''}`}>
                            {selection.heroLeft[2]}
                        </span>
                    </div>

                    {/* NÚCLEO CENTRAL */}
                    <div className="relative flex items-center justify-center perspective-distant transform-3d z-10 scale-[0.8] md:scale-90 lg:scale-100">
                        {cards.map((c, i) => {
                            const pos = positions[(i + shift) % 3];
                            return (
                                <div
                                    key={i}
                                    className={`absolute overflow-hidden bg-white/20 backdrop-blur-sm transition-all duration-700 ease-in-out flex items-center justify-center ${pos.opacity}`}
                                    style={{ width: pos.width, height: pos.height, transform: pos.transform, borderRadius: pos.borderRadius, border: pos.border, boxShadow: pos.boxShadow, padding: "12px" }}
                                >
                                    <img src={c.img} alt="" className="w-full h-full object-contain" />
                                </div>
                            );
                        })}

                        {/* Anillos de luz dinámica */}
                        <div className="absolute z-5 w-[140px] h-[140px] md:w-[170px] md:h-[170px] rounded-full border border-cyan-400/30 animate-[ringPulse1_4s_infinite]" />
                        <div className="absolute z-5 w-[100px] h-[100px] md:w-[130px] md:h-[130px] rounded-full border border-slate-300/20 animate-[ringPulse2_3s_infinite]" />

                        <button
                            onClick={handleNext}
                            className="group relative z-30 px-7 py-3 md:px-[38px] md:py-[12px] rounded-full border border-white/50 bg-white/80 font-['Playfair_Display'] font-black tracking-[0.3em] text-[12px] text-[#111] shadow-2xl transition-all duration-300 hover:scale-105 hover:tracking-[0.45em] hover:bg-white hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] active:scale-95 overflow-hidden"
                        >
                            <span className="relative z-10">WORSHIP</span>
                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </button>
                    </div>

                    {/* LADO DERECHO DINÁMICO */}
                    <div className="absolute right-2 md:right-[8%] lg:right-[10%] flex flex-col md:flex-row items-end md:items-baseline gap-2 md:gap-4 z-0 pointer-events-none opacity-40 md:translate-y-0 text-right md:text-left">
                        <span className={`font-['Playfair_Display'] ${TXT_L_MOB} ${TXT_L_PC} font-black animate-word-focus md:translate-y-12 text-[#111] leading-none tracking-tighter transition-all duration-700 ${isClient && isMobile ? '-translate-x-[20px] -translate-y-2' : ''}`}>
                            {selection.heroRight[0]}
                        </span>
                        <span className={`font-['Playfair_Display'] ${TXT_S_MOB} ${TXT_S_PC} font-bold animate-word-focus text-[#111] leading-none tracking-tight transition-all duration-700 ${isClient && isMobile ? '-translate-x-[50px]' : ''}`}>
                            {selection.heroRight[1]}
                        </span>
                        <span className={`font-['Playfair_Display'] ${TXT_M_MOB} ${TXT_M_PC} font-black animate-word-focus md:-translate-y-12 text-[#111] leading-none tracking-tight transition-all duration-700 ${isClient && isMobile ? '-translate-x-[90px] translate-y-8' : ''}`}>
                            {selection.heroRight[2]}
                        </span>
                    </div>
                </div>
            </div>
        </section >
    );
}
