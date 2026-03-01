import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const sectionRef = useRef(null);

    const cardsContent = [
        {
            id: 1,
            badge: "Génesis & Pasión",
            title: "NACIÓ DEL",
            highlight: "CORAZÓN",
            desc: "Worship no es solo diseño, es un origen. Cada línea y cada ángulo nace de un amor incondicional por la excelencia. Somos la elite que entiende el lujo en la pasión.",
            color: "cyan",
            accent: "#22d3ee"
        },
        {
            id: 2,
            badge: "Maestría Pura",
            title: "EL CULTO AL",
            highlight: "DETALLE",
            desc: "Nuestras gorras son esculturas urbanas. Buscamos la perfección en cada puntada, utilizando materiales que desafían el tiempo y elevan el estándar premium.",
            color: "sand",
            accent: "#C2A385"
        },
        {
            id: 3,
            badge: "Legado Elite",
            title: "VISIÓN SIN",
            highlight: "LIMITES",
            desc: "Miramos hacia el futuro del streetwear. Creamos piezas exclusivas que no solo visten, sino que comunican pertenencia a un culto de calidad absoluta.",
            color: "cyan",
            accent: "#22d3ee"
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    // Auto-rotation logic
    useEffect(() => {
        if (!isVisible) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % cardsContent.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isVisible, cardsContent.length]);

    const activeCard = cardsContent[currentIndex];

    return (
        <section
            id="nosotros"
            ref={sectionRef}
            className="h-screen flex items-start md:items-center justify-center bg-[#f8f9fa] overflow-hidden px-6 pt-24 md:pt-0 relative"
        >
            {/* GEOMETRIC BACKGROUND SYNCED WITH CARD */}
            <div className={`absolute inset-0 z-0 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <svg className="w-full h-full opacity-15" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                    <defs>
                        <radialGradient id="gradTheme" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" style={{ stopColor: activeCard.accent, stopOpacity: 0.2 }} />
                            <stop offset="100%" style={{ stopColor: 'transparent', stopOpacity: 0 }} />
                        </radialGradient>
                    </defs>

                    <polygon points="500,100 900,800 100,800" fill="url(#gradTheme)" className="animate-pulse" />

                    {/* Dynamic Background Triangles - Enhanced for Sensation */}
                    {cardsContent.map((_, i) => (
                        <g key={i}>
                            <path
                                d={`M500,${100 + i * 40} L${950 - i * 40},${850 - i * 40} L${50 + i * 40},${850 - i * 40} Z`}
                                fill="none"
                                stroke={currentIndex === i ? activeCard.accent : "rgba(0,0,0,0.03)"}
                                strokeWidth={currentIndex === i ? "3" : "1"}
                                className={`transition-all duration-1000 ${isVisible ? "animate-draw" : ""}`}
                                style={{
                                    opacity: currentIndex === i ? 0.9 : 0.15,
                                    filter: currentIndex === i ? `drop-shadow(0 0 15px ${activeCard.accent})` : 'none'
                                }}
                            />
                            {/* Extra Glowing Lines for framing */}
                            <path
                                d={`M500,${50} L${1000},${950} L${0},${950} Z`}
                                fill="none"
                                stroke={activeCard.accent}
                                strokeWidth="0.5"
                                className="opacity-10 animate-pulse"
                            />
                        </g>
                    ))}
                </svg>

                {/* Floating dynamic elements */}
                <div className="absolute top-1/4 left-10 w-24 h-24 triangle-mask rotate-12 blur-sm animate-[float_7s_infinite]"
                    style={{ backgroundColor: `${activeCard.accent}33` }} />
                <div className="absolute bottom-1/4 right-10 w-32 h-32 triangle-mask -rotate-12 blur-md animate-[float_9s_infinite_reverse]"
                    style={{ backgroundColor: `${activeCard.accent}33` }} />
            </div>

            {/* 3D CARD STACK */}
            <div className="relative z-10 w-full max-w-5xl h-[75vh] md:h-[70vh] flex items-center justify-center perspective-distant">
                {cardsContent.map((card, index) => {
                    const isCenter = index === currentIndex;
                    const isNext = index === (currentIndex + 1) % cardsContent.length;
                    const isPrev = index === (currentIndex - 1 + cardsContent.length) % cardsContent.length;

                    let transform = "scale(0.8) translateZ(-300px) translateX(100%) opacity-0";
                    let zIndex = 0;
                    let opacity = 0;

                    if (isCenter) {
                        transform = "scale(1) translateZ(0) translateX(0) rotateY(0)";
                        zIndex = 30;
                        opacity = 1;
                    } else if (isNext) {
                        transform = "scale(0.9) translateZ(-150px) translateX(40%) rotateY(-15deg)";
                        zIndex = 20;
                        opacity = 0.6;
                    } else if (isPrev) {
                        transform = "scale(0.9) translateZ(-150px) translateX(-40%) rotateY(15deg)";
                        zIndex = 20;
                        opacity = 0.6;
                    }

                    return (
                        <div
                            key={card.id}
                            className={`absolute inset-0 flex flex-col items-center justify-center text-center bg-white/30 backdrop-blur-[40px] rounded-[3rem] md:rounded-[4rem] border border-white/60 p-8 md:p-16 transition-all duration-1000 ease-out card-stack-item overflow-hidden ${isCenter ? (card.color === 'cyan' ? 'card-shadow-cyan' : (card.color === 'sand' ? 'card-shadow-sand' : 'card-shadow-fuchsia')) : ''}`}
                            style={{ transform, zIndex, opacity }}
                        >
                            {/* CORNER GLOWING BRACKETS - DOUBLE LINE FOR TECH SENSATION */}
                            <div className={`absolute top-0 left-0 w-28 h-28 transition-all duration-1000 delay-500 ${isCenter ? 'opacity-100 translate-x-2 translate-y-2' : 'opacity-0 scale-150'}`}>
                                <svg className="w-full h-full" viewBox="0 0 100 100">
                                    <path d="M 0 50 L 0 0 L 50 0" fill="none" stroke={card.accent} strokeWidth="3" className="animate-pulse" style={{ filter: `drop-shadow(0 0 8px ${card.accent})` }} />
                                    <path d="M 10 60 L 10 10 L 60 10" fill="none" stroke={card.accent} strokeWidth="1" className="opacity-40" />
                                </svg>
                            </div>
                            <div className={`absolute top-0 right-0 w-28 h-28 transition-all duration-1000 delay-500 ${isCenter ? 'opacity-100 -translate-x-2 translate-y-2' : 'opacity-0 scale-150'}`}>
                                <svg className="w-full h-full" viewBox="0 0 100 100">
                                    <path d="M 50 0 L 100 0 L 100 50" fill="none" stroke={card.accent} strokeWidth="3" className="animate-pulse" style={{ filter: `drop-shadow(0 0 8px ${card.accent})` }} />
                                    <path d="M 40 10 L 90 10 L 90 60" fill="none" stroke={card.accent} strokeWidth="1" className="opacity-40" />
                                </svg>
                            </div>
                            <div className={`absolute bottom-0 left-0 w-28 h-28 transition-all duration-1000 delay-500 ${isCenter ? 'opacity-100 translate-x-2 -translate-y-2' : 'opacity-0 scale-150'}`}>
                                <svg className="w-full h-full" viewBox="0 0 100 100">
                                    <path d="M 0 50 L 0 100 L 50 100" fill="none" stroke={card.accent} strokeWidth="3" className="animate-pulse" style={{ filter: `drop-shadow(0 0 8px ${card.accent})` }} />
                                    <path d="M 10 40 L 10 90 L 60 90" fill="none" stroke={card.accent} strokeWidth="1" className="opacity-40" />
                                </svg>
                            </div>
                            <div className={`absolute bottom-0 right-0 w-28 h-28 transition-all duration-1000 delay-500 ${isCenter ? 'opacity-100 -translate-x-2 -translate-y-2' : 'opacity-0 scale-150'}`}>
                                <svg className="w-full h-full" viewBox="0 0 100 100">
                                    <path d="M 50 100 L 100 100 L 100 50" fill="none" stroke={card.accent} strokeWidth="3" className="animate-pulse" style={{ filter: `drop-shadow(0 0 8px ${card.accent})` }} />
                                    <path d="M 40 90 L 90 90 L 90 40" fill="none" stroke={card.accent} strokeWidth="1" className="opacity-40" />
                                </svg>
                            </div>

                            {/* INTERNAL GLOWING TRIANGLE MASK - MORE PRONOUNCED */}
                            <div className={`absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000 ${isCenter ? 'opacity-20' : 'opacity-0'}`}>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] rotate-45"
                                    style={{
                                        background: `linear-gradient(45deg, transparent 40%, ${card.accent} 50%, transparent 60%)`,
                                        backgroundSize: '200% 200%',
                                        animation: 'shimmer 4s infinite linear'
                                    }}
                                />
                            </div>

                            <div className="relative z-10 flex flex-col items-center justify-center">
                                <div className={`mb-4 md:mb-6 p-1 px-4 rounded-full transition-all duration-700 ${isCenter ? 'opacity-100 translate-y-0' : 'opacity-0'}`}
                                    style={{ backgroundColor: card.accent }}>
                                    <span className="text-white font-bold tracking-[0.5em] uppercase text-[9px] md:text-xs">{card.badge}</span>
                                </div>

                                <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl font-black text-[#111] leading-[0.8] md:leading-[0.85] tracking-tighter mb-4 md:mb-8">
                                    {card.title} <br />
                                    <span className={`text-transparent bg-clip-text bg-linear-to-r ${card.color === 'sand' ? 'from-[#8B735B] via-[#C2A385] to-[#8B735B]' : 'from-cyan-600 via-fuchsia-500 to-cyan-500'} ${isCenter ? 'animate-text-shimmer' : ''}`}>
                                        {card.highlight}
                                    </span>
                                </h2>

                                <div className={`h-[1px] bg-linear-to-r from-transparent via-[#111]/20 to-transparent mb-6 md:mb-10 transition-all duration-1000 ${isCenter ? 'w-32 md:w-64 opacity-100' : 'w-0 opacity-0'}`} />

                                <p className="text-base md:text-xl lg:text-2xl text-[#111]/90 max-w-3xl font-bold leading-tight md:leading-relaxed px-2 md:px-4">
                                    {card.desc}
                                </p>

                                {/* Badge/Icons */}
                                <div className={`mt-8 md:mt-10 flex gap-6 md:gap-8 items-center justify-center transition-all duration-1000 delay-300 ${isCenter ? 'opacity-100 scale-110 md:scale-100' : 'opacity-0 scale-50'}`}>
                                    <div className="w-10 h-10 md:w-10 md:h-10 bg-[#111] triangle-mask flex items-center justify-center text-white shadow-lg">
                                        <span className="text-[9px] md:text-[8px] font-bold">W</span>
                                    </div>
                                    <div className={`w-10 h-10 md:w-10 md:h-10 triangle-mask flex items-center justify-center text-white shadow-lg`} style={{ backgroundColor: card.accent }}>
                                        <span className="text-[9px] md:text-[8px] font-bold">{card.id}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* NAVIGATION DOTS */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-40">
                {cardsContent.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`h-2 rounded-full transition-all duration-500 ${currentIndex === i ? 'w-8 bg-[#111]' : 'w-2 bg-[#111]/20'}`}
                    />
                ))}
            </div>

            {/* CORNER DECORATIONS */}
            <div className={`absolute bottom-0 left-0 w-48 h-48 bg-linear-to-tr from-cyan-500/10 to-transparent -translate-x-12 translate-y-12 rotate-45 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0'}`} />
            <div className={`absolute top-0 right-0 w-48 h-48 bg-linear-to-bl from-fuchsia-500/10 to-transparent translate-x-12 -translate-y-12 rotate-45 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0'}`} />
        </section>
    );
}
