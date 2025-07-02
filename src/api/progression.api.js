import { BASE_URL } from "../utils/url";

export async function updateProgression(payload) {
  const token = localStorage.getItem("token");

  const response = await fetch(`${BASE_URL}/progression`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text(); // <-- pour debugger
    throw new Error(errorText || "Erreur mise à jour progression");
  }

  return response.json();
}


export async function getUserProgressions(userId) {
  const token = localStorage.getItem("token");

  const response = await fetch(`${BASE_URL}/progression/user/${userId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Erreur récupération progression");
  }

  return response.json();
}