import React from "react";
import { NavLink } from "react-router-dom";
export default function Login() {
  return (
    <div className="container flex items-center justify-center p-4 mx-auto bg-sky-900 rounded-2xl">
      <div className="w-full p-4 md:w-1/2 xl:w-1/3">
        <h1 className="text-3xl text-center mt-4 font-bold text-yellow-400">
          Connexion
        </h1>
        <form className="flex flex-col">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-bold text-amber-50"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 bg-gray-100 border rounded"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-bold text-amber-50"
            >
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 bg-gray-100 border rounded"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 font-bold text-black bg-yellow-400 rounded"
          >
            Me connecter
          </button>
        </form>
        <label>
          Mot passe oublié ?{" "}
          <NavLink className="mr-4" to="/Password">
            <span>Ici</span>
          </NavLink>
        </label>{" "}
      </div>
    </div>
  );
}
