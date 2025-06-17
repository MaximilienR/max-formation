import { BASE_URL } from "../utils/url";

export async function createCours(values) {
  try {
    const response = await fetch(`${BASE_URL}/cours`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!response.ok) {
      // Si la réponse HTTP n'est pas 2xx, on récupère le message d'erreur du backend
      const errorData = await response.json();
      throw new Error(errorData.message || "Erreur inconnue du serveur");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur API createCours:", error);
    throw error; // on relance l'erreur pour que le catch du composant React la récupère
  }
}
