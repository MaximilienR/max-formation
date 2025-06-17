import React, { useState } from "react";
import Aside from "../components/Profil/aside";

export default function Admin() {
  const [showModal, setShowModal] = useState(false);

  // Etats pour inputs du modal
  const [coursName, setCoursName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  // Etat pour stocker les cours ajoutés
  const [cours, setCours] = useState([]);

  // Etat pour savoir si on modifie un cours (id sinon null)
  const [editingCoursId, setEditingCoursId] = useState(null);

  const openAddModal = () => {
    setEditingCoursId(null);
    setCoursName("");
    setDescription("");
    setFile(null);
    setShowModal(true);
  };

  const openEditModal = (cours) => {
    setEditingCoursId(cours.id);
    setCoursName(cours.name);
    setDescription(cours.description);
    setFile(cours.file || null);
    setShowModal(true);
  };

  const handleSave = async () => {
    if (!coursName.trim()) {
      alert("Le nom du cours est obligatoire.");
      return;
    }

    const body = {
      name: coursName,
      description,
    };

    try {
      const res = await fetch("/api/cours", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const data = await res.json();
        alert(data.message || "Erreur lors de la sauvegarde");
        return;
      }

      const newCours = await res.json();

      // Mise à jour locale de la liste des cours
      setCours((prev) => [...prev, newCours]);

      // Réinitialisation et fermeture modal
      setCoursName("");
      setDescription("");
      setShowModal(false);
    } catch (error) {
      alert("Erreur réseau, réessaye plus tard.");
    }
  };
  const handleDelete = (id) => {
    setCours((prev) => prev.filter((cours) => cours.id !== id));
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
            onClick={openAddModal}
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
            {cours.length === 0 ? (
              <tr>
                <td
                  className="border border-gray-300 px-4 py-4 text-center text-gray-500"
                  colSpan={2}
                >
                  Aucun élément à afficher
                </td>
              </tr>
            ) : (
              cours.map((cours) => (
                <tr key={cours.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">
                    {cours.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() => openEditModal(cours)}
                      className="bg-yellow-400 text-white font-semibold px-3 py-1 rounded mr-2 hover:bg-yellow-500"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleDelete(cours.id)}
                      className="bg-red-600 text-white font-semibold px-3 py-1 rounded hover:bg-red-700"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center   bg-opacity-50 z-50">
            <div className="bg-white rounded shadow-lg p-6 w-3/4 max-w-xl">
              <h2 className="text-xl font-bold mb-4">
                {editingCoursId ? "Modifier le cours" : "Ajouter un cours"}
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSave();
                }}
              >
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
                    value={coursName}
                    onChange={(e) => setCoursName(e.target.value)}
                    className="w-full border rounded px-2 py-1"
                    required
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
                  {/* Afficher nom du fichier si existant */}
                  {file && (
                    <p className="mt-2 text-sm text-gray-600">
                      Fichier sélectionné : {file.name || "Aucun"}
                    </p>
                  )}
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                  >
                    Fermer
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded bg-yellow-400 hover:bg-yellow-500 text-white font-semibold"
                  >
                    {editingCoursId
                      ? "Enregistrer les modifications"
                      : "Sauvegarder"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
