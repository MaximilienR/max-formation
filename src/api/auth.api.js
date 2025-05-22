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
    const message = await response.json();
    console.log(message);

    return message;
  } catch (error) {
    console.log(error);
  }
}
