import React from "react";

export default function Parcours() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto p-4 bg-sky-900 rounded-2xl">
        {/* Contenu principal */}
        <main className="flex-1 flex items-center justify-center">
          <div className="container mx-auto p-4 bg-[#8ccf64] rounded-2xl">
            <div className="w-full p-2 text-center text-white font-bold rounded">
              Cours terminé
            </div>
          </div>
        </main>

        {/* Rectangle HTML un peu plus petit */}
        <div className="mx-auto mt-4 w-40 p-2   text-center text-black bg-amber-50 font-semibold rounded shadow">
          HTML
        </div>
        <div className="mx-auto mt-4 w-40 p-2   text-center text-black bg-amber-50 font-semibold rounded shadow">
          CSS
        </div>
        <div className="mx-auto mt-4 w-40 p-2   text-center text-black bg-amber-50 font-semibold rounded shadow mb-2">
          JS
        </div>
        <div className="container mx-auto p-4 bg-yellow-400   rounded-2xl">
          <div className="w-full p-2 text-center text-white font-bold rounded">
            En cours
          </div>
        </div>
        <div className="mx-auto mt-4 w-40 p-2   text-center text-black bg-amber-50 font-semibold rounded shadow">
          JS
        </div>
      </div>
    </div>
  );
}
