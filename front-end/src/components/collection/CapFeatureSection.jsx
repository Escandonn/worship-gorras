import { useEffect, useRef, useState } from "react";

/**
 * CapFeatureSection - A spectacular, unique section for each cap in the collection.
 * Features:
 * 1. Dynamic 3D Transform based on scroll/mouse.
 * 2. Triple View Composition (Main, Detail Zoom, Abstract Silhouette).
 * 3. Unique storytelling and UI per cap.
 */
export default function CapFeatureSection({ cap, index }) {
    const sectionRef = useRef(null);
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, { threshold: 0.1 });

        if (sectionRef.current) observer.observe(sectionRef.current);

        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            // Progress from 0 (top enters) to 1 (bottom leaves)
            const progress = Math.min(Math.max(1 - (rect.bottom / (windowHeight + rect.height)), 0), 1);
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePos({ x, y });
    };

    const handleMouseLeave = () => setMousePos({ x: 0, y: 0 });

    const isEven = index % 2 === 0;

    // Dynamic 3D rotation based on store params + scroll + mouse
    const rotateX = cap.rotation3D.x + (scrollProgress * 20 - 10) + (mousePos.y * 30);
    const rotateY = cap.rotation3D.y + (scrollProgress * 40 - 20) + (mousePos.x * 30);

    return (
        <section
            id={`cap-${cap.title.split(' ')[0]}`}
            ref={sectionRef}
            className="h-screen md:h-[150vh] flex flex-col items-center justify-center relative overflow-hidden bg-[#0a0a0a] py-4 md:py-32"
        >
            {/* 1. BACKGROUND LAYER: ABSTRACT SILHOUETTE & AMBIENCE */}
            <div className={`absolute inset-0 z-0 pointer-events-none transition-opacity duration-2000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                {/* Large Background Text (Parallax) */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-[20vh] md:text-[40vh] uppercase leading-none opacity-[0.03] select-none whitespace-nowrap"
                    style={{
                        color: cap.accent,
                        transform: `translate(-50%, -50%) translateX(${(scrollProgress - 0.5) * -100}px) rotate(-10deg)`
                    }}
                >
                    {cap.title}
                </div>
            </div>

            {/* MAIN CONTENT CONTAINER */}
            <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col md:grid md:grid-cols-2 gap-2 md:gap-24 items-center justify-center h-full max-h-screen md:max-h-none py-10 md:py-0">

                {/* VISUAL COMPOSITION (3 IMAGES COMPOSITION) */}
                <div className={`relative w-full flex items-center justify-center order-1 md:order-0 ${isEven ? 'md:order-2' : 'md:order-1'}`}>

                    {/* A. 3D CARD (Main Image) */}
                    <div
                        ref={cardRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="relative w-full aspect-square max-w-[240px] md:max-w-[550px] perspective-distant transition-all duration-1000"
                        style={{
                            transform: `translateY(${(scrollProgress - 0.5) * -30}px)`,
                            opacity: isVisible ? 1 : 0
                        }}
                    >
                        <div
                            className="w-full h-full relative transition-transform duration-200 ease-out preserve-3d"
                            style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
                        >
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl md:backdrop-blur-3xl rounded-3xl md:rounded-4xl border border-white/10 shadow-2xl overflow-hidden" />
                            <img
                                src={cap.img}
                                className="absolute inset-0 w-full h-full object-contain scale-110 md:scale-125 drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
                                style={{ transform: 'translateZ(60px)' }}
                            />
                        </div>
                    </div>

                    {/* B. DETAIL ZOOM (Floating Circle) */}
                    <div
                        className={`absolute -bottom-2 ${isEven ? '-left-2' : '-right-2'} w-20 h-20 md:w-64 md:h-64 z-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
                        style={{ transform: `translateY(${(scrollProgress - 0.5) * 40}px)` }}
                    >
                        <div className="relative w-full h-full rounded-full overflow-hidden border border-white/20 shadow-xl group bg-black/40 backdrop-blur-md">
                            <img src={cap.img} className="w-full h-full object-contain scale-[4] rotate-25 group-hover:scale-[4.5] transition-transform duration-700" />
                            <div className="absolute inset-0 bg-white/5 group-hover:animate-scan" />
                        </div>
                    </div>

                    {/* C. GHOST PROFILE (Third Image Layer) */}
                    <div
                        className={`absolute -top-6 ${isEven ? 'right-4' : 'left-4'} w-32 h-32 md:w-80 md:h-80 opacity-5 md:opacity-10 pointer-events-none blur-sm mix-blend-screen transition-all duration-1000 delay-300 ${isVisible ? 'opacity-5 md:opacity-10 scale-100' : 'opacity-0 scale-150'}`}
                        style={{ transform: `translateX(${(scrollProgress - 0.5) * 60}px) rotate(${(scrollProgress * 45)}deg)` }}
                    >
                        <img src={cap.img} className="w-full h-full object-contain filter grayscale invert opacity-50" />
                    </div>
                </div>

                {/* TEXT CONTENT */}
                <div className={`flex flex-col gap-3 md:gap-10 order-2 md:order-0 ${isEven ? 'md:order-1 md:items-start md:text-left' : 'md:order-2 md:items-end md:text-right'} items-center text-center`}>
                    <div className={`flex flex-col gap-1 md:gap-4 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <span className="w-8 md:w-12 h-px" style={{ backgroundColor: cap.accent }} />
                            <span className="font-bold tracking-[0.4em] text-[7px] md:text-xs uppercase text-white/40">{cap.subtitle}</span>
                        </div>

                        <h2 className="font-['Playfair_Display'] text-3xl md:text-9xl font-black text-white leading-none tracking-tighter">
                            {cap.title.split(' ')[0]} <br className="hidden md:block" />
                            <span className={`text-transparent bg-clip-text bg-linear-to-r ${cap.gradient} animate-text-shimmer ml-1 md:ml-0`}>
                                {cap.title.split(' ')[1]}
                            </span>
                        </h2>
                    </div>

                    <p className="text-[10px] md:text-2xl text-white/60 font-medium leading-relaxed italic max-w-[240px] md:max-w-md line-clamp-2 md:line-clamp-none">
                        "{cap.story}"
                    </p>

                    <button className="group relative px-6 md:px-14 py-2.5 md:py-6 bg-transparent border border-white/20 text-white font-black tracking-[0.3em] text-[8px] md:text-xs overflow-hidden transition-all active:scale-95">
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        <span className="relative z-10 mix-blend-difference uppercase">{cap.callToAction}</span>
                    </button>
                </div>
            </div>

            {/* PROGRESS INDICATOR (SIDE) - HIDDEN ON SMALL MOBILE */}
            <div className={`hidden md:flex absolute top-1/2 -translate-y-1/2 ${isEven ? 'right-4' : 'left-4'} flex flex-col items-center gap-4 opacity-20`}>
                <span className="[writing-mode:vertical-lr] text-[8px] font-black tracking-[1em] uppercase text-white">0{cap.id}</span>
                <div className="w-px h-16 bg-white/20" />
            </div>
        </section>
    );
}
