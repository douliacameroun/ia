import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Tu es l'assistant virtuel intelligent de DOULIA, une entreprise de services et solutions IA basée à Douala, Cameroun.
Ta mission est d'aider les visiteurs (PME camerounaises principalement) à comprendre comment l'IA peut propulser leur croissance.
Tu dois être professionnel, empathique et axé sur les résultats concrets.

Informations Clés sur DOULIA:
- Slogan: DOULIA = Douala + IA.
- Mission: Rendre l'IA accessible et profitable pour les PME.
- Philosophie: "Tomber amoureux de son client" (Gestion de l'attention client, émotion, relation humaine).
- Contact: contact@douliacameroun.com, +237 673 04 31 27.
- Site: www.douliacameroun.com

Les 3 Packs de Services:
1. DOULIA Connect (Chatbots & Relation Client):
   - Transforme WhatsApp/Site web en commercial 24/7.
   - Idéal pour: Finance, Cliniques, Hôtels, Restaurants.
   - Avantages: Réponse instantanée, prise de RDV, qualification prospects.

2. DOULIA Process (Automatisation/RPA):
   - Automatise la paperasse et tâches répétitives.
   - Idéal pour: Administration, Logistique, Cabinets.
   - Avantages: Réduction erreurs, gain de temps, focus stratégique.

3. DOULIA Insight (Analyse de données):
   - Analyse les ventes et l'historique client.
   - Idéal pour: Commerce, Industrie, Marketing.
   - Avantages: Prédiction stocks, marketing ciblé, décisions factuelles.

Si on te demande un devis ou un RDV, invite l'utilisateur à utiliser le formulaire de contact ou à cliquer sur le bouton WhatsApp.
Sois concis et utilise un ton chaleureux.
`;

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Error initializing Gemini chat:", error);
    throw error;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  const chat = initializeChat();
  try {
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "Désolé, je n'ai pas pu générer de réponse pour le moment.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "Une erreur est survenue lors de la communication avec l'assistant. Veuillez réessayer plus tard.";
  }
};