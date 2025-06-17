import React from "react";
import { Link } from "react-router-dom";

function CoursHTMLCSS() {
  return (
    <div className="container mx-auto p-6 bg-sky-900 rounded-2xl font-['Josefin_Sans'] text-[#dfe4ea]">
      <h1 className="text-3xl text-center mt-4 font-bold">
        Cours Complet sur HTML & CSS
      </h1>

      <p className="mt-4 text-lg text-amber-50 text-center max-w-3xl mx-auto">
        Ce cours vous apprendra les bases du HTML et du CSS, les langages
        essentiels pour créer et styliser des pages web.
      </p>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-amber-50 mb-3">
          Introduction au HTML
        </h2>
        <p className="text-lg text-amber-50">
          Le HTML (HyperText Markup Language) est un langage de balisage utilisé
          pour structurer le contenu sur le web. Il se compose d'éléments
          appelés "tags" qui définissent des titres, paragraphes, images, liens,
          etc.
        </p>
        <ul className="list-disc list-inside mt-2 text-amber-50 text-lg">
          <li>
            Les balises courantes : &lt;h1&gt;, &lt;p&gt;, &lt;a&gt;,
            &lt;img&gt;, &lt;div&gt;.
          </li>
          <li>Les attributs HTML : href, src, alt, id, class.</li>
          <li>Structure de base d'une page HTML.</li>
        </ul>

        {/* Tableau des balises HTML */}
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full table-auto border-collapse border border-gray-600 text-amber-50">
            <thead>
              <tr className="bg-yellow-400 text-black">
                <th className="border border-gray-400 px-4 py-2 text-left">
                  Balise
                </th>
                <th className="border border-gray-400 px-4 py-2 text-left">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-sky-800">
                <td className="border border-gray-400 px-4 py-2">
                  &lt;h1&gt; à &lt;h6&gt;
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Titres de différents niveaux, de 1 (plus important) à 6 (moins
                  important)
                </td>
              </tr>
              <tr className="even:bg-sky-800">
                <td className="border border-gray-400 px-4 py-2">&lt;p&gt;</td>
                <td className="border border-gray-400 px-4 py-2">
                  Paragraphe de texte
                </td>
              </tr>
              <tr className="even:bg-sky-800">
                <td className="border border-gray-400 px-4 py-2">&lt;a&gt;</td>
                <td className="border border-gray-400 px-4 py-2">
                  Lien hypertexte
                </td>
              </tr>
              <tr className="even:bg-sky-800">
                <td className="border border-gray-400 px-4 py-2">
                  &lt;img&gt;
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Image (avec attributs src et alt)
                </td>
              </tr>
              <tr className="even:bg-sky-800">
                <td className="border border-gray-400 px-4 py-2">
                  &lt;div&gt;
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Conteneur générique pour structurer la page
                </td>
              </tr>
              <tr className="even:bg-sky-800">
                <td className="border border-gray-400 px-4 py-2">
                  &lt;span&gt;
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Conteneur en ligne pour styliser une partie du texte
                </td>
              </tr>
              <tr className="even:bg-sky-800">
                <td className="border border-gray-400 px-4 py-2">
                  &lt;ul&gt;, &lt;ol&gt;
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Listes non ordonnée (ul) et ordonnée (ol)
                </td>
              </tr>
              <tr className="even:bg-sky-800">
                <td className="border border-gray-400 px-4 py-2">&lt;li&gt;</td>
                <td className="border border-gray-400 px-4 py-2">
                  Élément de liste
                </td>
              </tr>
              <tr className="even:bg-sky-800">
                <td className="border border-gray-400 px-4 py-2">
                  &lt;form&gt;
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Formulaire pour collecter des données utilisateur
                </td>
              </tr>
              <tr className="even:bg-sky-800">
                <td className="border border-gray-400 px-4 py-2">
                  &lt;input&gt;
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Champ de saisie dans un formulaire
                </td>
              </tr>
              <tr className="even:bg-sky-800">
                <td className="border border-gray-400 px-4 py-2">
                  &lt;button&gt;
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Bouton cliquable
                </td>
              </tr>
              <tr className="even:bg-sky-800">
                <td className="border border-gray-400 px-4 py-2">
                  &lt;table&gt;
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Tableau de données
                </td>
              </tr>
              <tr className="even:bg-sky-800">
                <td className="border border-gray-400 px-4 py-2">&lt;tr&gt;</td>
                <td className="border border-gray-400 px-4 py-2">
                  Ligne d’un tableau
                </td>
              </tr>
              <tr className="even:bg-sky-800">
                <td className="border border-gray-400 px-4 py-2">
                  &lt;td&gt;, &lt;th&gt;
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Cellule de données (td) et cellule d’en-tête (th)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-amber-50 mb-3">
          Introduction au CSS
        </h2>
        <p className="text-lg text-amber-50">
          Le CSS (Cascading Style Sheets) est utilisé pour styliser et mettre en
          forme les pages HTML. Il permet de modifier couleurs, polices,
          espacements, disposition et bien plus.
        </p>
        <ul className="list-disc list-inside mt-2 text-amber-50 text-lg">
          <li>Sélecteurs CSS : par type, classe, id, attributs.</li>
          <li>
            Propriétés de base : color, background, font-size, margin, padding.
          </li>
          <li>Modèle de boîte CSS (box model).</li>
          <li>Flexbox et Grid pour la mise en page.</li>
        </ul>
      </section>

      <section className="mt-8 text-center">
        <video
          width="560"
          height="315"
          controls
          className="mx-auto rounded-lg shadow-lg"
        >
          <source
            src="https://drive.google.com/uc?export=download&id=1AF8Zs7wkOkkII7UGXzjnFC1H3butZJkR"
            type="video/mp4"
          />
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
