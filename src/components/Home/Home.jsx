import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-5xl font-bold text-center">L'aventure commence ici</h1>
      <img src="/src/Assets/dev.jpg" alt="Image" className="object-cover w-full mb-4 h-1/2" />
      <div className="flex flex-wrap justify-center">
        <div className="w-full p-4 md:w-1/2 xl:w-1/2">
          <Link to="/cours">
            <h2 className="mb-2 text-3xl font-bold">Cours gratuit</h2>
          </Link>
          <ul>
            <li>Accès à des cours en ligne gratuits</li>
            <li>Apprendre à votre propre rythme</li>
            <li>Accès à des ressources supplémentaires</li>
          </ul>
        </div>
        <div className="w-full p-4 md:w-1/2 xl:w-1/2">
          <h2 className="mb-2 text-3xl font-bold">Coatching personnalisé</h2>
          <ul>
            <li>Accès à un coach personnel</li>
            <li>Un plan de coaching personnalisé</li>
            <li>Accès à des outils et ressources exclusifs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Home;
