import { atom } from 'nanostores';

export const cards = [
    {
        id: 1,
        img: "/assets/im2.png",
        title: "Stability Pro",
        subtitle: "Rendimiento Avanzado",
        desc: "Estructura reforzada con paneles de micromalla para una ventilación superior.",
        accent: "#22d3ee", // Cyan
        glow: "rgba(34, 211, 238, 0.4)",
        gradient: "from-cyan-500 via-blue-500 to-cyan-500",
        heroLeft: ["Vence", "al", "viento"],
        heroRight: ["Pure", "Tech", "Flow"],
        styleTitle: "Technical Precision",
        styleHeadline: "MAESTRÍA EN",
        styleHighlight: "VENTILACIÓN",
        styleDesc: "Ingeniería de vanguardia aplicada a cada panel. Buscamos el equilibrio perfecto entre peso y resistencia estructural."
    },
    {
        id: 2,
        img: "/assets/adan.png",
        title: "Legacy Black",
        subtitle: "Esencia Atemporal",
        desc: "Sarga de algodón peinado de alta densidad con un acabado mate profundo.",
        accent: "#fbbf24", // Gold/Amber
        glow: "rgba(251, 191, 36, 0.4)",
        gradient: "from-amber-600 via-yellow-400 to-amber-600",
        heroLeft: ["Sangre", "de", "Rey"],
        heroRight: ["Noble", "Black", "Gold"],
        styleTitle: "Premium Heritage",
        styleHeadline: "EL CULTO AL",
        styleHighlight: "LUJO",
        styleDesc: "Tejidos nobles seleccionados a mano. Cada gorra cuenta una historia de exclusividad y elegancia sin esfuerzo."
    },
    {
        id: 3,
        img: "/assets/img.png",
        title: "Zenith Silver",
        subtitle: "Futurismo Urbano",
        desc: "Tejido técnico con microfibras reflectantes y silueta aerodinámica.",
        accent: "#d946ef", // Fuchsia
        glow: "rgba(217, 70, 239, 0.4)",
        gradient: "from-fuchsia-600 via-cyan-400 to-fuchsia-500",
        heroLeft: ["Alma", "del", "Espacio"],
        heroRight: ["Cyber", "Neon", "Soul"],
        styleTitle: "Future Vision",
        styleHeadline: "DISEÑO DEL",
        styleHighlight: "MAÑANA",
        styleDesc: "Materiales que desafían la realidad. Una estética cibernética diseñada para destacar en el paisaje nocturno de la ciudad."
    }
];

export const $capSelection = atom(cards[1]);
