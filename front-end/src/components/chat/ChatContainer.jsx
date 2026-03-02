import { useState, useEffect } from "react";
import ChatButton from "./ChatButton";
import ChatPanel from "./ChatPanel";

export default function ChatContainer() {
    const [isOpen, setIsOpen] = useState(false);
    const [isHeroPanelVisible, setIsHeroPanelVisible] = useState(true);
    const [showFloatingButton, setShowFloatingButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const heroHeight = window.innerHeight * 0.8; // Trigger transition somewhat before hero ends

            if (scrollY > heroHeight) {
                setIsHeroPanelVisible(false);
                setShowFloatingButton(true);
            } else {
                setIsHeroPanelVisible(true);
                setShowFloatingButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* FLOATING BUTTON (Always visible unless open) */}
            <ChatButton
                isVisible={!isOpen}
                onClick={() => setIsOpen(true)}
            />

            {/* MAIN CHAT PANEL */}
            <ChatPanel
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
}
