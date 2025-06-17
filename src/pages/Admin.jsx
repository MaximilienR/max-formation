import React, { useState } from "react";
import Aside from "../components/Profil/aside";

export default function Admin() {
  const [showModal, setShowModal] = useState(false);

  // Nouveaux états pour inputs du modal
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleSave = () => {
    // Tu peux gérer ici la sauvegarde, par exemple envoyer au backend
    alert(
      `Cours: ${courseName}\nDescription: ${description}\nFichier: ${
        file ? file.name : "Aucun fichier"
      }`
    );

    // Fermer modal et reset form
    setShowModal(false);
    setCourseName("");
    setDescription("");
    setFile(null);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Aside className="min-w-[200px] bg-yellow-400 p-4" />

      {/* Main content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-sky-900">Panel Admin</h1>
          <button
            onClick={() => setShowModal(true)}
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded"
          >
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

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50">
            <div className="bg-white rounded shadow-lg p-6 w-3/4 max-w-xl">
              <h2 className="text-xl font-bold mb-4">Ajouter un cours</h2>
              <form>
                <div className="mb-4">
                  <label
                    className="block mb-1 font-semibold"
                    htmlFor="courseName"
                  >
                    Nom du cours
                  </label>
                  <input
                    id="courseName"
                    type="text"
                    placeholder="Nom du cours"
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                    className="w-full border rounded px-2 py-1"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-1 font-semibold"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    placeholder="Description du cours"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full border rounded px-2 py-1"
                    rows={4}
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1 font-semibold" htmlFor="file">
                    Importer un fichier
                  </label>
                  <input
                    id="file"
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="w-full"
                  />
                </div>
              </form>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                >
                  Fermer
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 rounded bg-yellow-400 hover:bg-yellow-500 text-white font-semibold"
                >
                  Sauvegarder
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
