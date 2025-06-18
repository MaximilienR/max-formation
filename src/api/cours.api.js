import { BASE_URL } from "../utils/url";

// Fonction pour créer un cours (POST)
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
      const errorData = await response.json();
      throw new Error(errorData.message || "Erreur inconnue du serveur");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur API createCours:", error);
    throw error;
  }
}

// Fonction pour récupérer les cours (GET)
export async function getCours() {
  const response = await fetch(`${BASE_URL}/cours`);
  if (!response.ok) throw new Error("Erreur lors du chargement des cours");
  console.log("Cours reçus :", data); // Ajoute ce log

  return response.json();
}

// Fonction pour supprimer un cours (DELETE)
export async function deleteCours(id) {
  try {
    const response = await fetch(`${BASE_URL}/cours/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Erreur lors de la suppression");
    }

    return await response.json(); // optionnel, selon ce que ton backend renvoie
  } catch (error) {
    console.error("Erreur API deleteCours:", error);
    throw error;
  }
}

export async function updateCours(id, body) {
  const response = await fetch(`${BASE_URL}/cours/${id}`, {  // ✅ ICI
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.message || "Erreur lors de la mise à jour");
  }

  return await response.json();
}