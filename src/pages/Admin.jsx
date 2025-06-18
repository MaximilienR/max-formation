import React, { useState, useEffect } from "react";
import Aside from "../components/Profil/aside";
import { createCours, getCours, deleteCours, updateCours } from "../api/cours.api";

export default function Admin() {
  const [showModal, setShowModal] = useState(false);
  const [coursName, setCoursName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  const [niveau, setNiveau] = useState(1);
  const [cours, setCours] = useState([]);
  const [editingCoursId, setEditingCoursId] = useState(null);

  const openAddModal = () => {
    setEditingCoursId(null);
    setCoursName("");
    setDescription("");
    setLink("");
    setImage("");
    setNiveau(1);
    setShowModal(true);
  };

  const openEditModal = (cours) => {
    setEditingCoursId(cours._id);
    setCoursName(cours.name);
    setDescription(cours.description);
    setLink(cours.link || "");
    setImage(cours.image || "");
    setNiveau(cours.niveau || 1);
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
      link: link.trim() !== "" ? link : undefined,
      image: image.trim(),
      niveau: Number(niveau),
    };

    try {
      if (editingCoursId) {
        const updated = await updateCours(editingCoursId, body);
        setCours((prev) =>
          prev.map((c) => (c._id === editingCoursId ? updated : c))
        );
      } else {
        const newCours = await createCours(body);
        setCours((prev) => [...prev, newCours]);
      }

      setCoursName("");
      setDescription("");
      setLink("");
      setImage("");
      setNiveau(1);
      setEditingCoursId(null);
      setShowModal(false);
    } catch (error) {
      alert("Erreur : " + error.message);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce cours ?")) {
      try {
        await deleteCours(id);
        setCours((prev) => prev.filter((cours) => cours._id !== id));
      } catch (error) {
        alert("Erreur lors de la suppression du cours : " + error.message);
      }
    }
  };

  useEffect(() => {
    async function fetchCours() {
      try {
        const data = await getCours();
        setCours(data);
      } catch (error) {
        alert("Erreur lors du chargement des cours : " + error.message);
      }
    }
    fetchCours();
  }, []);

  return (
    <div className="flex min-h-screen">
      <Aside className="min-w-[200px] bg-yellow-400 p-4" />

      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-sky-900">Panel Admin</h1>
          <button
            onClick={openAddModal}
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded"
          >
            Ajouter un cours
          </button>
        </div>

        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr className="bg-sky-900 text-white">
              <th className="border border-gray-300 px-4 py-2">Nom du cours</th>
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
                <tr key={cours._id} className="hover:bg-gray-100">
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
                      onClick={() => handleDelete(cours._id)}
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
          <div className="fixed inset-0 bg-sky-900 text-[#dfe4ea] z-50 overflow-auto font-['Josefin_Sans']">
            <div className="max-w-4xl mx-auto p-8">
              <h1 className="text-4xl text-center font-bold mb-6">
                {editingCoursId
                  ? "Modifier le cours"
                  : "Ajouter un nouveau cours"}
              </h1>

              <p className="text-lg text-center mb-10 max-w-2xl mx-auto">
                Remplis les champs ci-dessous pour créer ou modifier un cours dans
                ta plateforme.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSave();
                }}
                className="space-y-6 bg-sky-800 p-8 rounded-2xl shadow-xl"
              >
                <div>
                  <label htmlFor="courseName" className="block text-xl font-semibold mb-2">
                    Nom du cours
                  </label>
                  <input
                    id="courseName"
                    type="text"
                    value={coursName}
                    onChange={(e) => setCoursName(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-white text-black focus:outline-none focus:ring-4 focus:ring-yellow-400"
                    placeholder="Ex : HTML & CSS - Débutant"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-xl font-semibold mb-2">
                    Description du cours
                  </label>
                  <textarea
                    id="description"
                    rows={6}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-white text-black focus:outline-none focus:ring-4 focus:ring-yellow-400"
                    placeholder="Décris le contenu du cours, les objectifs, etc."
                  />
                </div>

                <div>
                  <label htmlFor="link" className="block text-xl font-semibold mb-2">
                    Lien du cours (optionnel)
                  </label>
                  <input
                    id="link"
                    type="url"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-white text-black focus:outline-none focus:ring-4 focus:ring-yellow-400"
                    placeholder="https://exemple.com/ton-cours"
                  />
                </div>

                <div>
                  <label htmlFor="image" className="block text-xl font-semibold mb-2">
                    Image d’illustration
                  </label>
                  <input
                    id="image"
                    type="url"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-white text-black focus:outline-none focus:ring-4 focus:ring-yellow-400"
                    placeholder="https://exemple.com/image.jpg"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="niveau" className="block text-xl font-semibold mb-2">
                    Niveau du cours (1 à 5)
                  </label>
                  <select
                    id="niveau"
                    value={niveau}
                    onChange={(e) => setNiveau(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-white text-black focus:outline-none focus:ring-4 focus:ring-yellow-400"
                    required
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>Niveau {n}</option>
                    ))}
                  </select>
                </div>

                <div className="flex justify-center gap-6 pt-6">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-6 py-2 bg-gray-300 text-black font-semibold rounded hover:bg-gray-400"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500"
                  >
                    {editingCoursId ? "Enregistrer les modifications" : "Créer le cours"}
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
