import GlassCard from "../ui/GlassCard";

export default function BottomSection() {
  return (
    <section id="contacto" className="h-screen flex items-center justify-center bg-[#f8f9fa] overflow-hidden px-6 relative">
      <div className="relative z-10 w-full max-w-6xl h-[65vh] flex flex-col items-center justify-center text-center bg-white/40 backdrop-blur-3xl rounded-[4rem] border border-white/60 shadow-[0_40px_100px_rgba(0,0,0,0.05)] p-12">
        <h3 className="text-[#111] font-bold tracking-[0.5em] uppercase text-xs mb-6">Get in Touch</h3>
        <h2 className="font-['Playfair_Display'] text-5xl md:text-8xl font-black text-[#111] leading-tight tracking-tighter mb-8">
          CONTACTO
        </h2>
        <div className="h-[2px] w-32 bg-[#111] rounded-full mb-12 opacity-20" />

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full">
          <a href="mailto:info@worshipcaps.com" className="text-xl md:text-2xl font-bold text-[#111] hover:text-cyan-600 transition-colors">INFO@WORSHIPCAPS.COM</a>
          <div className="hidden md:block w-px h-8 bg-[#111]/20" />
          <a href="https://instagram.com/worshipcaps" target="_blank" className="text-xl md:text-2xl font-bold text-[#111] hover:text-fuchsia-600 transition-colors">@WORSHIPCAPS</a>
        </div>

        <div className="mt-16 text-xs font-bold tracking-widest text-[#111]/30 uppercase">
          © 2026 Worship Premium Headwear. All rights reserved.
        </div>
      </div>
    </section>
  );
}