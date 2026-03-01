import { useEffect, useRef, useState } from "react";
import { useStore } from "@nanostores/react";
import { $capSelection } from "../../store/capStore";

export default function StyleSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRef = useRef(null);
    const selection = useStore($capSelection);

    useEffect(() => {
        const handleScroll = () => {
            const vh = window.innerHeight;
            const scrollY = window.scrollY;

            // Calculate progress for 140vh height
            // progress 0 = top of section, progress 1 = fully scrolled through
            const progress = Math.min(Math.max(scrollY / vh, 0), 1.5);
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    // Calculate dynamic transforms based on scroll
    // The image starts at -110vh (slightly above navbar) and moves to 0
    const translateY = (1 - scrollProgress) * -110;
    const scale = 0.5 + (scrollProgress * 0.5);
    const rotateX = (1 - scrollProgress) * 45; // Tilt back during flight
    const rotateZ = (1 - scrollProgress) * -10;
    const opacity = Math.min(scrollProgress * 3, 1);

    // Text parallax: reciprocity movement (text goes up as image descends)
    const textTranslateY = (1 - scrollProgress) * 180;

    return (
        <section
            id="estilo"
            ref={sectionRef}
            className="h-[115vh] md:h-[140vh] flex items-center justify-center bg-[#f8f9fa] overflow-hidden px-6 relative"
        >
            {/* BACKGROUND ELEMENTS */}
            <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-cyan-400/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-fuchsia-400/10 blur-[150px] rounded-full" />
            </div>

            {/* MAIN CONTENT CONTAINER */}
            <div
                className={`relative z-10 w-full max-w-7xl flex flex-col items-center justify-center transition-all duration-700 ease-out`}
                style={{ transform: `translateY(${textTranslateY}px)`, opacity: opacity }}
            >

                {/* FLOATING PRODUCT IMAGE (Traveling from top) */}
                <div className="relative mb-8 md:mb-12 group perspective-1000 transform-3d">
                    <div
                        className={`relative w-[280px] sm:w-[350px] md:w-[450px] lg:w-[500px] aspect-square flex items-center justify-center p-8 transition-all duration-300 ease-out transform-3d`}
                        style={{
                            transform: `translateY(${translateY}vh) scale(${scale}) rotateX(${rotateX}deg) rotateZ(${rotateZ}deg)`,
                            opacity: opacity
                        }}
                    >
                        {/* Multiple glass layers for depth */}
                        <div className="absolute inset-0 bg-white/30 backdrop-blur-2xl rounded-full border border-white/50 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.2)] -z-10" />
                        <div className="absolute inset-10 bg-linear-to-br from-cyan-400/20 to-transparent rounded-full -z-10" />

                        <img
                            src={selection.img}
                            alt={selection.title}
                            className="w-full h-full object-contain drop-shadow-[0_45px_100px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-110 active:scale-95 cursor-pointer"
                        />
                    </div>
                </div>

                {/* TEXT CONTENT */}
                <div className="text-center space-y-4 md:space-y-6 max-w-4xl px-4">
                    <h3 className={`text-cyan-500 font-bold tracking-[0.6em] uppercase text-[10px] md:text-sm transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 tracking-[0.8em]' : 'opacity-0 tracking-[0.2em]'}`}>
                        Aesthetic Excellence
                    </h3>

                    <h2 className={`font-['Playfair_Display'] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#111] leading-[0.85] tracking-tighter transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        EL ARTE DEL <br />
                        <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-r from-cyan-500 via-fuchsia-500 to-cyan-500 animate-text-shimmer">
                            DETALLE
                        </span>
                    </h2>

                    <div className={`h-[2px] w-24 md:w-48 mx-auto bg-linear-to-r from-transparent via-fuchsia-500 to-transparent rounded-full shadow-[0_0_20px_rgba(217,70,239,0.6)] transition-all duration-1000 delay-800 ${isVisible ? 'w-48 opacity-100' : 'w-0 opacity-0'}`} />

                    <p className={`text-[#111]/70 text-base md:text-xl lg:text-2xl font-medium max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                        Fusionamos la elegancia del renacimiento con la rebeldía del streetwear moderno. Cada puntada es una oda a la perfección visual y táctil.
                    </p>

                    <div className={`pt-6 md:pt-10 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                        <button className="px-10 py-4 rounded-full bg-[#111] text-white font-['Playfair_Display'] font-bold tracking-[0.2em] text-xs md:text-sm hover:bg-cyan-500 hover:scale-105 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.1)] active:scale-95 group overflow-hidden relative">
                            <span className="relative z-10">EXPLORAR VISIÓN</span>
                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </button>
                    </div>
                </div>
            </div>

            {/* DECORATIVE TEXT (SCROLLING SLOWLY) */}
            <div className={`absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 pointer-events-none transition-all duration-1000 delay-300 ${isVisible ? 'opacity-10 -translate-x-20' : 'opacity-0 -translate-x-40'}`}>
                <span className="font-['Playfair_Display'] text-[20vh] font-black text-[#111] whitespace-nowrap uppercase tracking-tighter">WORSHIP CAPS</span>
            </div>
        </section>
    );
}
