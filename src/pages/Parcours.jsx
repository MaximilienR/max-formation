import React, { useEffect, useState } from "react";

export default function Parcours() {
  const [finishedCourses, setFinishedCourses] = useState([]);
  const [currentCourses, setCurrentCourses] = useState([]);

  useEffect(() => {
    // Récupérer la liste des cours terminés
    const storedFinished = localStorage.getItem("finishedCourses");
    if (storedFinished) {
      setFinishedCourses(JSON.parse(storedFinished));
    }

    // Récupérer la liste des cours en cours
    const storedCurrent = localStorage.getItem("currentCourses");
    if (storedCurrent) {
      setCurrentCourses(JSON.parse(storedCurrent));
    }
  }, []);

  useEffect(() => {
    // 🔥 Supprimer de currentCourses les cours qui sont dans finishedCourses
    const updatedCurrentCourses = currentCourses.filter(
      (course) => !finishedCourses.includes(course)
    );

    if (updatedCurrentCourses.length !== currentCourses.length) {
      setCurrentCourses(updatedCurrentCourses);
      localStorage.setItem(
        "currentCourses",
        JSON.stringify(updatedCurrentCourses)
      );
    }
  }, [finishedCourses, currentCourses]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto p-4 bg-sky-900 rounded-2xl">
        {/* Contenu principal */}
        <main className="flex-1 flex items-center justify-center">
          <div className="container mx-auto p-4 bg-[#8ccf64] rounded-2xl">
            <div className="w-full p-2 text-center text-white font-bold rounded">
              Cours terminés
            </div>
          </div>
        </main>

        {/* Liste dynamique des cours terminés */}
        {finishedCourses.length > 0 ? (
          finishedCourses.map((course, index) => (
            <div
              key={index}
              className="mx-auto mt-4 w-40 p-2 text-center text-black bg-amber-50 font-semibold rounded shadow"
            >
              {course}
            </div>
          ))
        ) : (
          <div className="mx-auto mt-4 w-40 p-2 text-center text-gray-300 bg-gray-100 font-semibold rounded shadow">
            Aucun cours terminé
          </div>
        )}

        {/* Section En cours */}
        <div className="container mx-auto p-4 bg-yellow-400 rounded-2xl mt-4">
          <div className="w-full p-2 text-center text-white font-bold rounded">
            En cours
          </div>
        </div>

        {/* Liste dynamique des cours en cours */}
        {currentCourses.length > 0 ? (
          currentCourses.map((course, index) => (
            <div
              key={index}
              className="mx-auto mt-4 w-40 p-2 text-center text-black bg-amber-50 font-semibold rounded shadow mb-2"
            >
              {course}
            </div>
          ))
        ) : (
          <div className="mx-auto mt-4 w-40 p-2 text-center text-gray-300 bg-gray-100 font-semibold rounded shadow mb-2">
            Aucun cours en cours
          </div>
        )}
      </div>
    </div>
  );
}
