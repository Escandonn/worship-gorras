/**
 * ChatButton - Premium floating button with neon gradients and triangular logo.
 */
export default function ChatButton({ isVisible, onClick }) {
    return (
        <div
            className={`fixed z-100 transition-all duration-1000 ease-out flex flex-col items-end gap-4
                right-6 bottom-10 md:right-8 md:bottom-12
                ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none translate-y-10'}
            `}
        >
            {/* HELP BUBBLE / MESSAGE ABOVE */}
            <div className="relative animate-[float_4s_ease-in-out_infinite]">
                <div className="bg-black/40 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-2xl shadow-2xl">
                    <span className="text-white/80 font-bold tracking-widest text-[9px] uppercase whitespace-nowrap">
                        Habla con nuestra asistencia
                    </span>
                    {/* Tiny arrow */}
                    <div className="absolute -bottom-1 right-8 w-2 h-2 bg-black/40 border-r border-b border-white/10 rotate-45" />
                </div>
            </div>

            <button
                onClick={onClick}
                className="group relative flex items-center justify-center"
            >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-linear-to-r from-cyan-400 via-violet-500 to-fuchsia-500 rounded-full blur-xl opacity-20 group-hover:opacity-60 transition-opacity animate-pulse" />

                {/* Main Pill Button */}
                <div className="relative flex items-center gap-3 bg-[#0a0a0a] backdrop-blur-2xl border border-white/20 p-3 md:p-4 rounded-full shadow-2xl group-hover:border-cyan-400/50 transition-all group-hover:scale-110">

                    {/* Triangular Logo Icon */}
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-linear-to-br from-cyan-400 to-violet-500 rounded-full flex items-center justify-center p-2.5 shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                        <div className="w-full h-full triangle-mask bg-white" />
                    </div>

                    <span className="hidden md:block pr-4 text-white font-black tracking-[0.2em] text-[10px] uppercase">
                        Chat Elite
                    </span>
                </div>

                {/* Pulse Decorative Ring */}
                <div className="absolute -inset-2 border border-cyan-400/20 rounded-full animate-ping opacity-20 pointer-events-none" />
            </button>
        </div>
    );
}
