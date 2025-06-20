import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCoursById } from "../../api/cours.api";
import video from "../../Assets/video/test.mp4";

function CoursHTMLCSS() {
  const { id } = useParams(); // 🔑 Récupère l'ID depuis l'URL
  const [cours, setCours] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCours() {
      try {
        const data = await getCoursById(id);
        setCours(data);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors du chargement du cours :", error);
        setLoading(false);
      }
    }

    fetchCours();
  }, [id]);

  if (loading) {
    return <p className="text-center text-white">Chargement...</p>;
  }

  if (!cours) {
    return <p className="text-center text-red-500">Cours introuvable.</p>;
  }

  return (
    <div className="container mx-auto p-6 bg-sky-900 rounded-2xl font-['Josefin_Sans'] text-[#dfe4ea]">
      <h1 className="mt-4 text-3xl font-bold text-center">
        {cours.name || "Cours HTML & CSS"}
      </h1>

      {/* ✅ Explication du cours */}
      <div className="mt-6 text-lg whitespace-pre-line">
        {cours.explication}
      </div>

      <section className="mt-8 text-center">
        <video
          width="560"
          height="315"
          controls
          className="mx-auto rounded-lg shadow-lg"
        >
          <source src={video} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos HTML5.
        </video>
      </section>

      <div className="mt-8 text-center">
        <Link to="/quizz">
          <button className="rounded-md bg-yellow-400 px-6 py-3 text-sm font-semibold text-black shadow hover:bg-[#8ccf64] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
            Passer au Quizz
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CoursHTMLCSS;
