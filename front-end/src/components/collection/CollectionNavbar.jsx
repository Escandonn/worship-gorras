import { useState, useEffect } from "react";
import { cards } from "../../store/capStore";

export default function CollectionNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeCap, setActiveCap] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Track active section for context-aware navbar
            const sections = document.querySelectorAll('section[id^="cap-"]');
            let current = null;
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    current = section.getAttribute('id').replace('cap-', '');
                }
            });
            setActiveCap(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const activeCapData = cards.find(c => c.title.split(' ')[0] === activeCap);

    return (
        <nav className={`fixed top-0 left-0 w-full z-100 transition-all duration-700 ${scrolled ? "bg-black/90 backdrop-blur-3xl py-3 md:py-4 shadow-[0_0_50px_rgba(0,0,0,0.5)]" : "bg-transparent py-6 md:py-8"}`}>
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
                <a href="/" className="group flex items-center gap-2">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-white triangle-mask flex items-center justify-center text-black transition-all group-hover:rotate-45"
                        style={{ backgroundColor: activeCapData?.accent || '#fff' }}>
                        <span className="text-[10px] md:text-[12px] font-black">W</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-['Playfair_Display'] font-black tracking-tighter text-lg md:text-2xl text-white leading-none">WORSHIP</span>
                        <span className="text-[7px] md:text-[8px] font-bold tracking-[0.3em] md:tracking-[0.5em] text-white/30 uppercase">
                            {activeCapData ? `Colección / ${activeCapData.title.split(' ')[0]}` : "Premium Collection"}
                        </span>
                    </div>
                </a>

                {/* CONTEXT INDICATOR (DESKTOP & TABLET) */}
                <div className="hidden md:flex items-center gap-8 lg:gap-12">
                    {cards.map((cap) => {
                        const name = cap.title.split(' ')[0];
                        const isActive = activeCap === name;
                        return (
                            <a href={`#cap-${name}`} key={cap.id} className="flex flex-col items-center gap-1 group">
                                <span className={`text-[9px] lg:text-[10px] font-black tracking-[0.2em] lg:tracking-[0.3em] transition-all duration-500 uppercase ${isActive ? 'opacity-100' : 'opacity-20 group-hover:opacity-60'}`}
                                    style={{ color: isActive ? cap.accent : '#fff' }}>
                                    {name}
                                </span>
                                <div className={`h-[2px] transition-all duration-500 rounded-full ${isActive ? 'w-full' : 'w-0'}`}
                                    style={{ backgroundColor: cap.accent }} />
                            </a>
                        );
                    })}
                </div>

                <div className="flex items-center gap-3 md:gap-6">
                    <a href="/" className="hidden sm:block font-black tracking-[0.3em] text-[8px] md:text-[10px] text-white/40 hover:text-white transition-colors">VOLVER</a>
                    <button className="px-5 md:px-8 py-2 md:py-3 rounded-none border border-white/10 bg-white/5 text-white font-black tracking-[0.1em] md:tracking-[0.3em] text-[7px] md:text-[10px] hover:bg-white hover:text-black transition-all whitespace-nowrap">
                        SHOP {activeCap ? activeCap.toUpperCase() : "ELITE"}
                    </button>
                </div>
            </div>

            {/* MOBILE SECTION LIST (REPLACES DOTS) */}
            <div className="md:hidden flex justify-center gap-6 mt-4 pb-2 border-t border-white/5 pt-3">
                {cards.map((cap) => {
                    const name = cap.title.split(' ')[0];
                    const isActive = activeCap === name;
                    return (
                        <a
                            href={`#cap-${name}`}
                            key={cap.id}
                            className="flex flex-col items-center gap-1 transition-all"
                        >
                            <span
                                className={`text-[8px] font-black tracking-[0.2em] uppercase transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-30'}`}
                                style={{ color: isActive ? cap.accent : '#fff' }}
                            >
                                {name}
                            </span>
                            <div
                                className={`h-[1px] transition-all duration-500 rounded-full ${isActive ? 'w-full' : 'w-0'}`}
                                style={{ backgroundColor: cap.accent }}
                            />
                        </a>
                    );
                })}
            </div>
        </nav>
    );
}
