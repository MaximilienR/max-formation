import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Info() {
  const [email, setEmail] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.pseudo) setPseudo(user.pseudo);
      if (user.email) setEmail(user.email);
    }
  }, []);

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

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
              htmlFor="motDePasse"
              className="block text-amber-50 text-sm font-bold mb-2"
            >
              Mot de passe:
            </label>
            <input
              type="password"
              id="motDePasse"
              value={motDePasse}
              onChange={(e) => setMotDePasse(e.target.value)}
              className="w-full p-2 bg-gray-100 border rounded"
              placeholder="Votre mot de passe"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-bold text-amber-50"
            >
              Confirmer le mot de passe
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirmez le mot de passe"
              className="w-full p-2 bg-gray-100 border rounded"
            />
            <span
              onClick={toggleConfirmPasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-white cursor-pointer top-6"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.confirmPassword && (
              <p className="text-orange-200 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="mt-4 rounded-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-black shadow hover:bg-[#8ccf64] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            Enregistrer les modifications
          </button>
        </form>
      </main>
    </div>
  );
}
