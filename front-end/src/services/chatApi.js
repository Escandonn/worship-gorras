/**
 * Chat API Service
 * Placeholder for future AI model integration (e.g., OpenAI, Anthropic, or custom backend).
 */

export const sendMessage = async (message) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Default mock response
    return {
        text: `¡Hola! Soy tu asistente de Worship. Recibí tu mensaje: "${message}". Pronto podré responderte con inteligencia artificial real.`,
        timestamp: new Date().toISOString()
    };
};
