import { atom } from 'nanostores';

export const cards = [
    {
        id: 1,
        img: "/assets/im2.png",
        title: "Stability Pro",
        subtitle: "Rendimiento Avanzado",
        desc: "Estructura reforzada con paneles de micromalla para una ventilación superior y un ajuste ergonómico incomparable."
    },
    {
        id: 2,
        img: "/assets/adan.png",
        title: "Legacy Black",
        subtitle: "Esencia Atemporal",
        desc: "Sarga de algodón peinado de alta densidad con un acabado mate profundo. El estándar de oro en elegancia urbana."
    },
    {
        id: 3,
        img: "/assets/img.png",
        title: "Zenith Silver",
        subtitle: "Futurismo Urbano",
        desc: "Tejido técnico con microfibras reflectantes y silueta aerodinámica. Diseñada para quienes miran hacia el futuro."
    }
];

export const $capSelection = atom(cards[1]); // Default to Legacy Black (adan.png)
