import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Detail() {
  const niveau = 4; // Niveau sur 5
  const totalStars = 5;

  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className="container mx-auto py-8 px-4 md:px-8 lg:px-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        À Propos du cours
      </h1>

      {/* Section Niveau */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Niveau :</h2>
        <div className="text-yellow-500 text-2xl">
          {"★".repeat(niveau)}
          {"☆".repeat(totalStars - niveau)}
        </div>
      </section>

      {/* Prix */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Prix :</h2>
        <div className="text-green-600 text-2xl font-bold">GRATUIT</div>
      </section>

      {/* Langage utilisé */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Langage utilisé :
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Ce cours utilise JavaScript et React pour vous enseigner le
          développement front-end.
        </p>
      </section>

      {/* Ce que vous allez apprendre */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Ce que vous allez apprendre
        </h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
          <li>Les bases du développement web avec HTML, CSS, JavaScript.</li>
          <li>Créer des composants réutilisables avec React.</li>
          <li>
            Bonnes pratiques pour améliorer l'employabilité :
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Rédiger un CV efficace et personnalisé.</li>
              <li>Écrire une lettre de motivation convaincante.</li>
              <li>Préparer des entretiens techniques.</li>
              <li>Construire un portfolio professionnel.</li>
            </ul>
          </li>
          <li>Comprendre le routage avec React Router.</li>
          <li>Utiliser les hooks React pour la logique d'état.</li>
          <li>Déployer une application React en ligne.</li>
        </ul>
      </section>

      {/* RGPD + Bouton */}
      <div className="mb-6">
        <label
          htmlFor="rgpd"
          className="block mb-2 text-sm font-semibold text-gray-800 cursor-pointer"
        >
          <input
            type="checkbox"
            id="rgpd"
            {...register("rgpd", {
              required: "Vous devez accepter les conditions.",
            })}
            className="mr-2 leading-tight"
          />
          J'accepte les conditions d'utilisation et la politique de
          confidentialité
        </label>
        {errors.rgpd && (
          <p className="mt-1 text-xs text-red-600">{errors.rgpd.message}</p>
        )}
      </div>

      <Link to="/contenu">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded">
          Acheter
        </button>
      </Link>
    </div>
  );
}
