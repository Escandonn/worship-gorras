import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            id="nosotros"
            ref={sectionRef}
            className="h-screen flex items-center justify-center bg-[#f8f9fa] overflow-hidden px-6 relative"
        >
            {/* Background decoration */}
            <div className={`absolute bottom-0 right-0 w-full h-full transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-400/10 blur-[130px] rounded-full animate-pulse" />
            </div>

            <div className={`relative z-10 w-full max-w-6xl h-[70vh] flex flex-col items-center justify-center text-center bg-white/40 backdrop-blur-3xl rounded-[4rem] border border-white/60 shadow-[0_45px_110px_-20px_rgba(0,0,0,0.06)] p-12 transition-all duration-1000 transform ${isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10'}`}>
                <h3 className={`text-cyan-500 font-bold tracking-[0.5em] uppercase text-[10px] md:text-sm mb-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 tracking-[0.7em]' : 'opacity-0 tracking-[0.3em]'}`}>
                    Identity & Vision
                </h3>

                <h2 className={`font-['Playfair_Display'] text-5xl md:text-8xl lg:text-9xl font-black text-[#111] leading-tight tracking-tighter mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    SOBRE <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 via-fuchsia-500 to-cyan-500 animate-text-shimmer">
                        NOSOTROS
                    </span>
                </h2>

                <div className={`h-[2px] w-32 bg-linear-to-r from-cyan-400 to-fuchsia-400 rounded-full mb-10 shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-1000 delay-700 ${isVisible ? 'w-48 opacity-100' : 'w-0 opacity-0'}`} />

                <p className={`text-lg md:text-2xl lg:text-3xl text-[#111]/70 max-w-3xl font-medium leading-relaxed transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    Nacimos bajo la premisa de elevar el estándar de las gorras premium. Worship no es solo una marca, es un culto a la calidad extrema y al diseño sin concesiones para la elite urbana.
                </p>

                <div className={`mt-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0 scale-90'}`}>
                    <div className="flex gap-4 md:gap-8 items-center justify-center">
                        <div className="flex flex-col items-center">
                            <span className="text-3xl md:text-5xl font-black text-[#111]">100%</span>
                            <span className="text-[10px] font-bold tracking-widest text-cyan-500">PREMIUM</span>
                        </div>
                        <div className="w-px h-12 bg-black/10" />
                        <div className="flex flex-col items-center">
                            <span className="text-3xl md:text-5xl font-black text-[#111]">LTD</span>
                            <span className="text-[10px] font-bold tracking-widest text-fuchsia-500">EDICIÓN</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
