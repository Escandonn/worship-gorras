import { useState, useRef, useEffect } from "react";
import { sendMessage } from "../../services/chatApi";

export default function ChatPanel({ isOpen, onClose }) {
    const [messages, setMessages] = useState(() => {
        // Load from localStorage on init
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("worship_chat_history");
            return saved ? JSON.parse(saved) : [
                { id: 1, text: "Bienvenido a Worship Elite Support. ¿En qué podemos ayudarte hoy?", sender: "bot" }
            ];
        }
        return [{ id: 1, text: "Bienvenido a Worship Elite Support. ¿En qué podemos ayudarte hoy?", sender: "bot" }];
    });
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        // Save to localStorage, limit to last 15 messages
        if (typeof window !== "undefined") {
            const historyToSave = messages.slice(-15);
            localStorage.setItem("worship_chat_history", JSON.stringify(historyToSave));
        }
        if (isOpen) scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const userMsg = { id: Date.now(), text: inputValue, sender: "user" };
        const newMessages = [...messages, userMsg];
        setMessages(newMessages);
        setInputValue("");
        setIsTyping(true);

        try {
            // Pass the context (previous messages)
            const response = await sendMessage(inputValue, messages.slice(-14)); // -14 to leave room for the new message
            setMessages(prev => [...prev, { id: Date.now() + 1, text: response.text, sender: "bot" }]);
        } catch (error) {
            setMessages(prev => [...prev, { id: Date.now() + 1, text: "Lo siento, hubo un error de conexión con mi cerebro artificial.", sender: "bot" }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div
            className={`fixed inset-y-0 right-0 z-110 w-full max-w-[420px] bg-[#0a0a0a]/95 backdrop-blur-3xl border-l border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] transition-all duration-500 ease-in-out transform
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-linear-to-r from-cyan-400/5 to-transparent">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-linear-to-br from-cyan-400 to-violet-500 rounded-lg p-2.5 shadow-lg">
                        <div className="w-full h-full triangle-mask bg-white" />
                    </div>
                    <div>
                        <h3 className="text-white font-black tracking-widest text-sm uppercase">ASISTENTE</h3>
                        <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                            <span className="text-cyan-400/60 text-[8px] font-bold tracking-widest uppercase">Online Elite Service</span>
                        </div>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 h-[calc(100vh-180px)] custom-scrollbar">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-pop`}>
                        <div className={`max-w-[85%] rounded-[20px] px-4 py-3 text-xs leading-relaxed transition-all
                            ${msg.sender === 'user'
                                ? 'bg-linear-to-br from-cyan-500 to-blue-600 text-white rounded-tr-none shadow-lg'
                                : 'bg-white/5 border border-white/10 text-white/80 rounded-tl-none'
                            }
                        `}>
                            {msg.text}
                        </div>
                    </div>
                ))}
                {isTyping && (
                    <div className="flex justify-start">
                        <div className="bg-white/5 border border-white/10 rounded-[20px] rounded-tl-none px-4 py-3 flex gap-1">
                            <span className="w-1 h-1 bg-white/40 rounded-full animate-bounce" />
                            <span className="w-1 h-1 bg-white/40 rounded-full animate-bounce delay-100" />
                            <span className="w-1 h-1 bg-white/40 rounded-full animate-bounce delay-200" />
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="absolute bottom-0 left-0 w-full p-6 border-t border-white/10 bg-[#0a0a0a]">
                <div className="relative group">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Escribe tu consulta..."
                        className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-6 pr-14 text-white text-xs placeholder:text-white/20 focus:border-cyan-400/50 outline-none transition-all group-hover:bg-white/10"
                    />
                    <button
                        onClick={handleSend}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 active:scale-95 transition-all"
                    >
                        <svg className="w-5 h-5 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
