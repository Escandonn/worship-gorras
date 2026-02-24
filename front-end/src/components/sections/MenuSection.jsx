export default function MenuSection() {
  return (
    <section className="h-[20vh] flex items-center justify-center">
      <div className="relative flex items-center justify-center">

        {/* RING 1 */}
        <div className="
          absolute
          w-[160px] h-[160px] md:w-[210px] md:h-[210px]
          rounded-full
          border-[3px]
          border-cyan-300
          animate-[ringPulse1_3.8s_ease-in-out_infinite]
        " />

        {/* RING 2 */}
        <div className="
          absolute
          w-[120px] h-[120px] md:w-[170px] md:h-[170px]
          rounded-full
          border-[3px]
          border-fuchsia-300
          animate-[ringPulse2_3.2s_ease-in-out_infinite]
        " />

        {/* RING 3 */}
        <div className="
          absolute
          w-[85px] h-[85px] md:w-[130px] md:h-[130px]
          rounded-full
          border-[3px]
          border-emerald-300
          animate-[ringPulse3_2.6s_ease-in-out_infinite]
        " />

        {/* BUTTON */}
        <button
          className="
          relative z-10
          px-[22px] md:px-[36px]
          py-[9px] md:py-[13px]
          rounded-full
          border border-white/90
          bg-gradient-to-b from-white to-[#e9edf2]
          font-['Playfair_Display']
          tracking-[0.28em]
          text-[12px] md:text-[15px]
          text-[#111]
          animate-[btnPulse_3s_ease-in-out_infinite]
        "
        >
          WORSHIP
        </button>
      </div>
    </section>
  );
}