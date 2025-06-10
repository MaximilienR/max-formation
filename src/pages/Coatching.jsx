import React from "react";

export default function Coaching() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-8 lg:px-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        À Propos de Notre Coaching en Insertion Professionnelle
      </h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Notre Mission
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Notre mission est de vous accompagner de manière personnalisée et
          efficace dans votre parcours d'insertion ou de réorientation
          professionnelle. Nous comprenons les défis et les incertitudes liés à
          la recherche d'emploi et nous sommes là pour vous donner les outils,
          la confiance et la motivation nécessaires pour atteindre vos objectifs
          de carrière.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Ce que Nous Vous Offrons
        </h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>
            **Bilan de Compétences Personnalisé :** Identification de vos points
            forts, de vos compétences transférables et de vos axes
            d'amélioration.
          </li>
          <li>
            **Définition d'Objectifs Professionnels Clairs :** Clarification de
            vos aspirations et élaboration d'un plan d'action concret.
          </li>
          <li>
            **Optimisation de Votre Recherche d'Emploi :**
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Rédaction de CV et de lettres de motivation percutants.</li>
              <li>
                Préparation aux entretiens d'embauche (simulations, techniques
                de communication).
              </li>
              <li>Stratégies de réseautage efficaces.</li>
              <li>
                Utilisation des plateformes et outils de recherche d'emploi.
              </li>
            </ul>
          </li>
          <li>
            **Développement de Vos Soft Skills :** Amélioration de vos
            compétences comportementales essentielles (communication, travail
            d'équipe, gestion du temps, etc.).
          </li>
          <li>
            **Renforcement de la Confiance en Soi :** Surmonter les doutes et
            valoriser votre potentiel.
          </li>
          <li>
            **Accompagnement Personnalisé :** Des séances de coaching
            individuelles adaptées à votre rythme et à vos besoins spécifiques.
          </li>
          <li>
            **Soutien et Motivation :** Un partenaire de confiance pour vous
            encourager et vous soutenir tout au long de votre parcours.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Pour Qui ?</h2>
        <p className="text-gray-700 leading-relaxed">
          Notre coaching en insertion professionnelle s'adresse à toute personne
          se trouvant dans une phase de transition professionnelle, notamment :
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>Les jeunes diplômés à la recherche de leur premier emploi.</li>
          <li>
            Les personnes en reconversion professionnelle souhaitant explorer de
            nouvelles voies.
          </li>
          <li>
            Les demandeurs d'emploi de longue durée ayant besoin d'un
            accompagnement renforcé.
          </li>
          <li>Les personnes souhaitant évoluer dans leur carrière actuelle.</li>
          <li>
            Toute personne désirant prendre en main son avenir professionnel
            avec un soutien expert.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Notre Approche
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Nous adoptons une approche holistique et centrée sur la personne. Nous
          prenons le temps de comprendre votre parcours, vos aspirations et vos
          contraintes pour vous proposer un accompagnement sur mesure. Notre
          méthode combine des outils concrets, des techniques de coaching
          éprouvées et un soutien humain chaleureux et motivant.
        </p>
      </section>

      <section className="text-center">
        <p className="text-gray-700 mb-4">
          Prêt(e) à donner un nouvel élan à votre carrière ?
        </p>
        <a
          href="/contact"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
        >
          Contactez-nous pour une première consultation gratuite !
        </a>
      </section>
    </div>
  );
}
