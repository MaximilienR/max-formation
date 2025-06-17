import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
export default function Detail() {
  const navigate = useNavigate();

  const niveau = 4;
  const totalStars = 5;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleBuy(data) {
    alert("Merci pour votre achat !");
    navigate("/contenu");
  }

  return (
    <div className="flex justify-center px-12">
      <div className="container mx-auto p-4 bg-sky-900 rounded-2xl font-['Josefin_Sans'] text-[#dfe4ea]">
        <h1 className="mt-4 text-3xl font-bold text-center text-yellow-400">
          À propos du cours
        </h1>

        {/* Niveau */}
        <section className="mt-6 mb-8">
          <h2 className="mb-2 text-xl font-semibold text-white">Niveau :</h2>
          <div className="text-2xl text-yellow-400">
            {"★".repeat(niveau)}
            {"☆".repeat(totalStars - niveau)}
          </div>
        </section>

        {/* Prix */}
        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold text-white">Prix :</h2>
          <div className="text-2xl font-bold text-green-400">GRATUIT</div>
        </section>

        {/* Langage */}
        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold text-white">
            Langage utilisé :
          </h2>
          <p className="leading-relaxed text-amber-100">
            Ce cours utilise <strong>JavaScript</strong> et{" "}
            <strong>React</strong> pour vous enseigner le développement
            front-end.
          </p>
        </section>

        {/* Apprentissage */}
        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold text-white">
            Ce que vous allez apprendre :
          </h2>
          <ul className="space-y-2 leading-relaxed list-disc list-inside text-amber-100">
            <li>Les bases du développement web avec HTML, CSS, JavaScript.</li>
            <li>Créer des composants réutilisables avec React.</li>
            <li>
              Bonnes pratiques pour améliorer l'employabilité :
              <ul className="mt-2 ml-6 space-y-1 list-disc list-inside">
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
        <form onSubmit={handleSubmit(handleBuy)}>
          <div className="mb-6">
            <label
              htmlFor="rgpd"
              className="block mb-2 text-sm font-bold cursor-pointer text-amber-50"
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
            <button
              type="submit"
              className="rounded-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-black shadow hover:bg-[#8ccf64] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Acheter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
