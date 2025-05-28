import React, { useState } from "react";
import { Link } from "react-router-dom";
// Import du fichier JSON (assure-toi que le chemin est correct)
import desc from "../../data/descripition.json";

function Tableau() {
  // Génère 3 fois chaque élément avec un nouvel id unique
  const cours = Array(3)
    .fill(desc)
    .flat()
    .map((cours, index) => ({ ...cours, id: `${cours.nom}-${index}` }));

  const [hoveredCourse, setHoveredCourse] = useState(null);

  return (
    <div className="container mx-auto p-4 bg-sky-900  min-h-screen">
      <h1 className="text-3xl text-center mt-4 font-bold text-yellow-400">
        Nos formations
      </h1>

      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {cours.map((cours) => (
          <div
            key={cours.id}
            className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex flex-col items-center text-center"
          >
            <div
              className="relative w-full h-48 overflow-hidden rounded-lg shadow-lg cursor-pointer flex items-center justify-center p-4 bg-white text-amber-50 text-sm transition-all duration-300"
              onMouseEnter={() => setHoveredCourse(cours.id)}
              onMouseLeave={() => setHoveredCourse(null)}
            >
              {hoveredCourse === cours.id ? (
                <div className="relative z-10 flex flex-col items-center">
                  <p className="mb-2 overflow-auto">{cours.description}</p>
                  <div className="text-yellow-400 text-xl select-none flex items-center gap-2">
                    <h2 className="text-base font-semibold text-amber-50 m-0">
                      Niveau :
                    </h2>
                    <span>
                      {"★".repeat(cours.niveau)}
                      {"☆".repeat(5 - (cours.niveau || 0))}
                    </span>
                  </div>
                  <div className="text-yellow-400 text-xl select-none flex items-center gap-2">
                    <h2 className="text-base font-semibold text-amber-50  m-0">
                      Prix :
                    </h2>
                    <span>GRATUIT</span>
                  </div>
                </div>
              ) : (
                <img
                  src={cours.image}
                  alt={cours.nom}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 relative z-10"
                />
              )}
            </div>
            <h2 className="mt-3 text-lg font-semibold text-yellow-400">
              {cours.nom}
            </h2>
            <Link to="/detail">
              <button className="mt-2 bg-yellow-400 text-black font-bold py-2 px-4 rounded">
                En savoir plus
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tableau;
