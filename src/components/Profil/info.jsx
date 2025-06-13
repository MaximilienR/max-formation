import React, { useEffect, useState } from "react";

export default function Info() {
  const [email, setEmail] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [motDePasse, setMotDePasse] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.pseudo) setPseudo(user.pseudo);
      if (user.email) setEmail(user.email);
    }
  }, []);

  return (
    <div>
      <main className="bg-sky-900 w-full p-4">
        <h1 className="text-2xl font-bold mb-4 text-amber-50 text-center">
          Profil
        </h1>
        <form>
          <div>
            <label
              htmlFor="pseudo"
              className="block text-amber-50 text-sm font-bold mb-2"
            >
              Pseudo:
            </label>
            <input
              type="text"
              id="pseudo"
              value={pseudo}
              onChange={(e) => setPseudo(e.target.value)}
              className="w-full p-2 bg-gray-100 border rounded"
              placeholder="Votre pseudo"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-amber-50 text-sm font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 bg-gray-100 border rounded"
              placeholder="Votre email"
            />
          </div>
          <div>
            <label
              htmlFor="nom"
              className="block text-amber-50 text-sm font-bold mb-2"
            >
              Mot de passe:
            </label>
            <input
              type="text"
              id="nom"
              value={motDePasse}
              onChange={(e) => setMotDePasse(e.target.value)}
              className="w-full p-2 bg-gray-100 border rounded"
              placeholder="Votre mot de passe"
            />
          </div>

          <button className="rounded-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-black shadow hover:bg-[#8ccf64] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
            Enregistrer les modifications
          </button>
        </form>
      </main>
    </div>
  );
}
