import React from "react";
import Aside from "../components/Profil/aside";

export default function Admin() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Aside className="min-w-[200px] bg-yellow-400 p-4" />

      {/* Main content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-sky-900">Panel Admin</h1>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded">
            Ajouter un cours
          </button>
        </div>

        {/* Table */}
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr className="bg-sky-900 text-white">
              <th className="border border-gray-300 px-4 py-2">
                Nom de l'article
              </th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-4 text-center text-gray-500">
                Aucun élément à afficher
              </td>
              <td className="border border-gray-300 px-4 py-4 text-center">
                <button
                  disabled
                  className="bg-yellow-400 text-gray-100 font-semibold px-3 py-1 rounded mr-2 cursor-not-allowed"
                >
                  Modifier
                </button>
                <button
                  disabled
                  className="bg-red-600 text-gray-100 font-semibold px-3 py-1 rounded cursor-not-allowed"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
