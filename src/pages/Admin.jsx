import React, { useState } from "react";
import Aside from "../components/Profil/aside";

export default function Admin() {
  const [showModal, setShowModal] = useState(false);

  // Etats pour inputs du modal
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  // Etat pour stocker les cours ajoutés
  const [courses, setCourses] = useState([]);

  // Etat pour savoir si on modifie un cours (id sinon null)
  const [editingCourseId, setEditingCourseId] = useState(null);

  const openAddModal = () => {
    setEditingCourseId(null);
    setCourseName("");
    setDescription("");
    setFile(null);
    setShowModal(true);
  };

  const openEditModal = (course) => {
    setEditingCourseId(course.id);
    setCourseName(course.name);
    setDescription(course.description);
    setFile(course.file || null);
    setShowModal(true);
  };

  const handleSave = () => {
    if (!courseName.trim()) {
      alert("Le nom du cours est obligatoire.");
      return;
    }

    if (editingCourseId) {
      // Modification : on remplace le cours dans la liste
      setCourses((prev) =>
        prev.map((course) =>
          course.id === editingCourseId
            ? { ...course, name: courseName, description, file }
            : course
        )
      );
    } else {
      // Ajout
      setCourses((prev) => [
        ...prev,
        {
          id: Date.now(),
          name: courseName,
          description,
          file,
        },
      ]);
    }

    setShowModal(false);
    setEditingCourseId(null);
    setCourseName("");
    setDescription("");
    setFile(null);
  };

  const handleDelete = (id) => {
    setCourses((prev) => prev.filter((course) => course.id !== id));
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
            {courses.length === 0 ? (
              <tr>
                <td
                  className="border border-gray-300 px-4 py-4 text-center text-gray-500"
                  colSpan={2}
                >
                  Aucun élément à afficher
                </td>
              </tr>
            ) : (
              courses.map((course) => (
                <tr key={course.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">
                    {course.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() => openEditModal(course)}
                      className="bg-yellow-400 text-white font-semibold px-3 py-1 rounded mr-2 hover:bg-yellow-500"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleDelete(course.id)}
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
                {editingCourseId ? "Modifier le cours" : "Ajouter un cours"}
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
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
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
                    {editingCourseId
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
