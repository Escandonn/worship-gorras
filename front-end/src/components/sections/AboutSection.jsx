export default function AboutSection() {
    return (
        <section id="nosotros" className="h-screen flex items-center justify-center p-8 bg-[#f8f9fa]">
            <div className="w-full max-w-6xl h-[70vh] bg-white/40 backdrop-blur-2xl rounded-[3rem] border border-white/60 shadow-2xl flex flex-col items-center justify-center text-center">
                <h2 className="font-['Playfair_Display'] text-6xl md:text-8xl font-black text-[#111] mb-6">NOSOTROS</h2>
                <p className="text-xl md:text-2xl text-[#111]/60 max-w-2xl font-medium">Elevando el estándar de las gorras premium.</p>
            </div>
        </section>
    );
}
