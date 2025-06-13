import React from "react";
import { Link } from "react-router-dom";

export default function Aside() {
  return (
    <aside className="w-64 bg-yellow-400 p-4">
      <Link to="/profil/informations" className="block">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded mt-4 w-full text-left">
          Mes informations
        </button>
      </Link>
      <Link to="/achat" className="block">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded mt-4 w-full text-left">
          Mes achats
        </button>
      </Link>
      <Link to="/profil/parcours" className="block">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded mt-4 w-full text-left">
          Mon parcours
        </button>
      </Link>
    </aside>
  );
}
