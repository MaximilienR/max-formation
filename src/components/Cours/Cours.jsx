import React from "react";
import { Link } from "react-router-dom";

function Tableau() {
  const cours = [
    { id: 1, nom: "React", image: "../src/Assets/react.png" },
    { id: 2, nom: "Angular", image: "/src/Assets/Angular.jpg" },
    { id: 3, nom: "Vue.js", image: "/src/Assets/vue.jpg" },
    { id: 4, nom: "React", image: "/src/Assets/react.png" },
    { id: 5, nom: "Angular", image: "/src/Assets/Angular.jpg" },
    { id: 6, nom: "Vue.js", image: "/src/Assets/vue.jpg" },
    { id: 7, nom: "React", image: "/src/Assets/react.png" },
    { id: 8, nom: "Angular", image: "/src/Assets/Angular.jpg" },
    { id: 9, nom: "Vue.js", image: "/src/Assets/vue.jpg" },
  ];

  return (
    <div className="container mx-auto p-4 bg-blue-400">
      <h1 className="text-3xl text-center mt-4 font-bold text-yellow-400">
        Nos formations
      </h1>

      <div className="flex flex-wrap justify-center">
        {cours.map((cours) => (
          <div
            key={cours.id}
            className="w-full md:w-1/3 xl:w-1/3 p-4 flex flex-col items-center text-center"
          >
            <img
              src={cours.image}
              alt={cours.nom}
              className="w-1/2 h-1/2 object-cover aspect-square mb-4"
            />
            <Link to="/contenu">
              <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded">
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
