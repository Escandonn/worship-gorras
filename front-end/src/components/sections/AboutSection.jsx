export default function AboutSection() {
    return (
        <section id="nosotros" className="h-screen flex items-center justify-center bg-[#f8f9fa] overflow-hidden px-6 relative">
            {/* Background decoration */}
            <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-400/10 blur-[120px] rounded-full z-0" />

            <div className="relative z-10 w-full max-w-6xl h-[65vh] flex flex-col items-center justify-center text-center bg-white/40 backdrop-blur-3xl rounded-[4rem] border border-white/60 shadow-[0_40px_100px_rgba(0,0,0,0.05)] p-12">
                <h3 className="text-cyan-500 font-bold tracking-[0.5em] uppercase text-xs mb-6">Identity & Vision</h3>
                <h2 className="font-['Playfair_Display'] text-5xl md:text-8xl font-black text-[#111] leading-tight tracking-tighter mb-8">
                    SOBRE <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-fuchsia-500">NOSOTROS</span>
                </h2>
                <div className="h-[2px] w-32 bg-linear-to-r from-cyan-400 to-fuchsia-400 rounded-full mb-8 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                <p className="text-lg md:text-2xl text-[#111]/70 max-w-2xl font-medium leading-relaxed">
                    Nacimos bajo la premisa de elevar el estándar de las gorras premium. Worship no es solo una marca, es un culto a la calidad y al diseño sin concesiones.
                </p>
            </div>
        </section>
    );
}
