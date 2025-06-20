import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCoursById } from "../../api/cours.api";
import video from "../../Assets/video/test.mp4";

function CoursHTMLCSS() {
  const { id } = useParams();
  const [cours, setCours] = useState(null);

  useEffect(() => {
    async function fetchCours() {
      try {
        const data = await getCoursById(id);
        setCours(data);
      } catch (error) {
        console.error("Erreur de chargement :", error);
      }
    }
    fetchCours();
  }, [id]);

  if (!cours) {
    return <div className="text-center text-white">Chargement...</div>;
  }

  return (
    <div className="container mx-auto p-6 bg-sky-900 rounded-2xl font-['Josefin_Sans'] text-[#dfe4ea] overflow-hidden">
      <h1 className="mt-4 text-3xl font-bold text-center">
        {cours.name || "Cours HTML & CSS"}
      </h1>

      <section className="mt-6">
        <h2 className="mb-2 text-2xl font-bold text-yellow-400">Explication</h2>
        <p
          className="
    text-lg 
    whitespace-pre-line 
    text-black 
    font-semibold 
    tracking-wide 
    uppercase 
    bg-gray-100 border rounded
    border-red-400 
    rounded-lg 
    p-4 
    shadow-lg 
    hover:bg-red-200 
    transition 
    duration-300 
    ease-in-out
    max-w-full
    w-full
    box-border
    break-words
  "
        >
          {cours.explication || "Aucune explication fournie."}
        </p>
      </section>

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
