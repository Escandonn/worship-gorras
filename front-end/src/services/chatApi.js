import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: import.meta.env.PUBLIC_GROQ_API_KEY,
    dangerouslyAllowBrowser: true // Essential for client-side demo, though insecure for production
});

/**
 * Chat API Service
 * Integration with Groq Cloud (Llama 3.3 70B)
 */
export const sendMessage = async (message, history = []) => {
    try {
        const messages = [
            {
                role: "system",
                content: "Eres un asistente experto de Worship, una marca de gorras premium. Tu tono es elegante, servicial y moderno. Ayudas a los clientes con dudas sobre la colección, estilos y envíos. Mantén tus respuestas concisas y profesionales."
            },
            ...history.map(msg => ({
                role: msg.sender === "user" ? "user" : "assistant",
                content: msg.text
            })),
            { role: "user", content: message }
        ];

        const chatCompletion = await groq.chat.completions.create({
            messages: messages,
            model: "llama-3.3-70b-versatile",
            temperature: 0.7,
            max_tokens: 1024,
            top_p: 1,
        });

        return {
            text: chatCompletion.choices[0]?.message?.content || "No recibí respuesta.",
            timestamp: new Date().toISOString()
        };
    } catch (error) {
        console.error("Error calling Groq:", error);
        throw error;
    }
};
