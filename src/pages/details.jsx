import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Detail() {
  const niveau = 4;
  const totalStars = 5;

  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex justify-center px-12">
      <div className="container mx-auto p-4 bg-sky-900 rounded-2xl font-['Josefin_Sans'] text-[#dfe4ea]">
        <h1 className="text-3xl text-center mt-4 font-bold text-yellow-400">
          À propos du cours
        </h1>

        {/* Niveau */}
        <section className="mb-8 mt-6">
          <h2 className="text-xl font-semibold text-white mb-2">Niveau :</h2>
          <div className="text-yellow-400 text-2xl">
            {"★".repeat(niveau)}
            {"☆".repeat(totalStars - niveau)}
          </div>
        </section>

        {/* Prix */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">Prix :</h2>
          <div className="text-green-400 text-2xl font-bold">GRATUIT</div>
        </section>

        {/* Langage */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">
            Langage utilisé :
          </h2>
          <p className="text-amber-100 leading-relaxed">
            Ce cours utilise <strong>JavaScript</strong> et{" "}
            <strong>React</strong> pour vous enseigner le développement
            front-end.
          </p>
        </section>

        {/* Apprentissage */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">
            Ce que vous allez apprendre :
          </h2>
          <ul className="list-disc list-inside text-amber-100 leading-relaxed space-y-2">
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

        {/* RGPD */}
        <div className="mb-6">
          <label
            htmlFor="rgpd"
            className="block mb-2 text-sm font-bold text-amber-50 cursor-pointer"
          >
            <input
              type="checkbox"
              id="rgpd"
              {...register("rgpd", {
                required: "Vous devez accepter les conditions.",
              })}
              className="mr-2 leading-tight text-amber-50"
            />
            J'accepte les conditions d'utilisation et la politique de
            confidentialité
          </label>
          {errors.rgpd && (
            <p className="mt-1 text-xs text-red-600">{errors.rgpd.message}</p>
          )}
        </div>

        {/* Bouton */}
        <div className="flex justify-center">
          <Link to="/contenu">
            <button className="rounded-md  bg-[#8ccf64]   px-4 py-2 text-sm font-semibold text-white shadow hover: bg-[#0DFFD3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
              Acheter
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
