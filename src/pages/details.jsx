import React from "react";
import { Link } from "react-router-dom";
export default function Detail() {
  const niveau = 4; // Niveau sur 5
  const totalStars = 5;

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

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Langage utilisé :
        </h2>
        <p className="text-gray-700 leading-relaxed">Utilité du langage</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Ce que Vous allez apprendre
        </h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorem
            quis, sapiente sit harum nam debitis saepe dign
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorem
            quis, sapiente sit harum nam debitis saepe dign
          </li>
          <li>
            issimos est ipsum quos cum quas enim totam id consequatur quae?
            Numquam, sed.
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Rédaction de CV et de lettres de motivation percutants.</li>
              <li>
                issimos est ipsum quos cum quas enim totam id consequatur quae?
                Numquam, sed.
              </li>
              <li>
                issimos est ipsum quos cum quas enim totam id consequatur quae?
                Numquam, sed.
              </li>
              <li>
                issimos est ipsum quos cum quas enim totam id consequatur quae?
                Numquam, sed.
              </li>
            </ul>
          </li>
          <li>
            issimos est ipsum quos cum quas enim totam id consequatur quae?
            Numquam, sed.
          </li>
          <li>
            issimos est ipsum quos cum quas enim totam id consequatur quae?
            Numquam, sed.
          </li>
          <li>
            issimos est ipsum quos cum quas enim totam id consequatur quae?
            Numquam, sed.
          </li>
        </ul>

        <Link to="/contenu">
          <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded">
            En savoir plus
          </button>
        </Link>
      </section>
    </div>
  );
}
