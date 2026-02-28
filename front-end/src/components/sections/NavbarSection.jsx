export default function NavbarSection() {
  const links = [
    { name: "Inicio", href: "#inicio" },
    { name: "Colección", href: "#inicio" },
    { name: "Estilo", href: "#estilo" },
    { name: "Nosotros", href: "#nosotros" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] px-[3.2vw]">
      <nav
        className="
        relative
        h-[10vh] min-h-[80px] flex items-center justify-between
        rounded-b-[18px]
        backdrop-blur-[18px]
        bg-white/55
        shadow-[0_4px_12px_rgba(0,0,0,0.08),0_8px_24px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.85)]
        mt-0
      "
      >
        {/* BRAND */}
        <div className="flex items-center gap-[12px] sm:gap-[15px] pl-4 sm:pl-8">
          <div
            className="
            w-[52px] h-[52px] sm:w-[64px] sm:h-[64px]
            rounded-full
            bg-white/55 backdrop-blur-[8px]
            flex items-center justify-center shrink-0
            shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_4px_10px_rgba(0,0,0,0.08)]
          "
          >
            <svg viewBox="0 0 48 48" className="w-[32px] h-[32px] sm:w-[42px] sm:h-[42px]">
              <circle cx="24" cy="24" r="22" fill="rgba(0,0,0,0.04)" />
              <path d="M24 10 L40 38 L8 38 Z" fill="#2b2b2e" />
            </svg>
          </div>

          <span
            className="
            font-['Playfair_Display']
            font-semibold
            tracking-[-0.02em]
            text-[#111]
            text-[15px] sm:text-[17px] md:text-[19px] lg:text-[21px]
            leading-none
          "
          >
            Worship Caps
          </span>
        </div>

        {/* LINKS */}
        <div
          className="
          flex items-center
          gap-[6px] sm:gap-[10px] md:gap-[14px] lg:gap-[16px]
          mr-[1vw] lg:mr-[2vw]
        "
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                relative overflow-hidden
                font-['Playfair_Display']
                text-black font-semibold
                tracking-[-0.01em]

                text-[12px] sm:text-[13px] md:text-[15px] lg:text-[17px]
                px-[10px] sm:px-[14px] md:px-[18px] lg:px-[22px]
                py-[7px] sm:py-[9px] md:py-[10px] lg:py-[11px]

                rounded-[12px] md:rounded-[14px]

                bg-white/85 backdrop-blur-[16px]

                shadow-[
                  inset_0_1.5px_0_rgba(255,255,255,1),
                  inset_0_-1px_0_rgba(255,255,255,0.6),
                  0_6px_14px_rgba(0,0,0,0.12),
                  0_10px_28px_rgba(0,0,0,0.08)
                ]

                transition-all duration-300

                before:absolute before:inset-0
                before:bg-gradient-to-b
                before:from-white/70 before:to-transparent
                before:opacity-70
                before:pointer-events-none

                hover:bg-white
                hover:-translate-y-[2px]
                hover:shadow-[
                  inset_0_1.5px_0_rgba(255,255,255,1),
                  inset_0_-1px_0_rgba(255,255,255,0.7),
                  0_10px_22px_rgba(0,0,0,0.18),
                  0_14px_40px_rgba(0,0,0,0.12)
                ]
              "
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}