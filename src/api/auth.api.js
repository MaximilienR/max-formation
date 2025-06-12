import { BASE_URL } from "../utils/url";

export async function signup(values) {
  console.log(values);
  try {
    const response = await fetch(`${BASE_URL}/user/signup`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-type": "application/json",
      },
    });

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function login(values) {
  console.log(" voila les valeur " + values);

  try {
    const response = await fetch(`${BASE_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Login échoué");
    }

    console.log("Login réussi :", data);

    localStorage.setItem("token", data.token);
  } catch (error) {
    console.error("Erreur de login :", error.message);
  }
}
