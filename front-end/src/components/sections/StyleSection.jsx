export default function StyleSection() {
    return (
        <section id="estilo" className="h-screen flex items-center justify-center bg-[#f8f9fa] overflow-hidden px-6 relative">
            {/* Background decoration */}
            <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-fuchsia-400/10 blur-[120px] rounded-full z-0" />

            <div className="relative z-10 w-full max-w-6xl h-[65vh] flex flex-col items-center justify-center text-center bg-white/40 backdrop-blur-3xl rounded-[4rem] border border-white/60 shadow-[0_40px_100px_rgba(0,0,0,0.05)] p-12">
                <h3 className="text-fuchsia-500 font-bold tracking-[0.5em] uppercase text-xs mb-6">Lifestyle & Aesthetic</h3>
                <h2 className="font-['Playfair_Display'] text-5xl md:text-8xl font-black text-[#111] leading-tight tracking-tighter mb-8">
                    NUESTRO <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-fuchsia-600 to-cyan-500">ESTILO</span>
                </h2>
                <div className="h-[2px] w-32 bg-linear-to-r from-fuchsia-400 to-cyan-400 rounded-full mb-8 shadow-[0_0_15px_rgba(217,70,239,0.5)]" />
                <p className="text-lg md:text-2xl text-[#111]/70 max-w-2xl font-medium leading-relaxed">
                    Diseño minimalista con un toque vanguardista. Cada pieza es una declaración de intenciones, fusionando el lujo clásico con la rebelión urbana.
                </p>
            </div>
        </section>
    );
}
