import React from 'react';

 
function HistoireInternet() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-center mt-4 font-bold">L'Histoire d'Internet</h1>
      <p className="text-lg text-gray-600 text-center mt-2">Internet, tel que nous le connaissons aujourd'hui, est le fruit d'une évolution complexe et fascinante. Voici un aperçu de son histoire :</p>

      <div className="flex-col justify-center mt-4">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h2 className="text-2xl text-gray-800 font-bold">Les Origines (Années 1960)</h2>
          <p className="text-lg text-gray-600 mt-2">Tout a commencé avec ARPANET, un projet de l'Agence pour les projets de recherche avancée de la Défense (DARPA) aux États-Unis. L'objectif était de créer un réseau informatique décentralisé capable de résister à une attaque nucléaire.</p>
          <ul className="list-disc list-inside text-lg text-gray-600 mt-2">
            <li>1969 : Première connexion ARPANET entre l'Université de Californie à Los Angeles (UCLA) et l'Université de Stanford.</li>
            <li>Développement du protocole TCP/IP, la base d'Internet.</li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h2 className="text-2xl text-gray-800 font-bold">L'Expansion (Années 1970-1980)</h2>
          <p className="text-lg text-gray-600 mt-2">Internet s'étend au-delà des institutions gouvernementales et universitaires.</p>
          <ul className="list-disc list-inside text-lg text-gray-600 mt-2">
            <li>1971 : Envoi du premier e-mail par Ray Tomlinson.</li>
            <li>1983 : Adoption du protocole TCP/IP, marquant la naissance officielle d'Internet.</li>
            <li>1989 : Tim Berners-Lee invente le World Wide Web (WWW) au CERN.</li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h2 className="text-2xl text-gray-800 font-bold">Le Web (Années 1990)</h2>
          <p className="text-lg text-gray-600 mt-2">Le World Wide Web révolutionne Internet, le rendant accessible au grand public.</p>
          <ul className="list-disc list-inside text-lg text-gray-600 mt-2">
            <li>1991 : Lancement du WWW, permettant la navigation avec des liens hypertextes.</li>
            <li>1993 : Création de Mosaic, le premier navigateur web graphique.</li>
            <li>Essor des moteurs de recherche comme Yahoo! et Google.</li>
          </ul>
        </div>
      </div>
      <iframe width="560" height="315" src="https://drive.google.com/file/d/1pyX2IkS9t76NcZRd5HExt2Sgqcyjtgk-/view" frameborder="0" allowfullscreen ></iframe>

    </div>
  );
}

function App() {
  return (
    <div>
       <HistoireInternet />
    </div>
  );
}

export default App;