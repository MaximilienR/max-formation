import React from 'react'

export default function info() {
  return (
    <div>
    
     <main className="bg-blue-500 w-full p-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-700 text-center">Profil</h1>
        <form className=" ">
          <div>
            <label htmlFor="pseudo" className="block text-gray-700 text-sm font-bold mb-2">Pseudo:</label>
            <input
              type="text"
              id="pseudo"
        className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-white text-center outline-1 -outline-offset-1 outline-yellow-400 placeholder:text-yellow-400 focus:outline-2 focus:-outline-offset-2  sm:text-sm/6 mt-4"
              placeholder="Votre pseudo"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
        className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-white text-center outline-1 -outline-offset-1 outline-yellow-400 placeholder:text-yellow-400 focus:outline-2 focus:-outline-offset-2  sm:text-sm/6 mt-4"
              placeholder="votre@email.com"
            />
          </div>
          <div>
            <label htmlFor="nom" className="block text-gray-700 text-sm font-bold mb-2">Nom:</label>
            <input
              type="text"
              id="nom"
        className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-white text-center outline-1 -outline-offset-1 outline-yellow-400 placeholder:text-yellow-400 focus:outline-2 focus:-outline-offset-2  sm:text-sm/6 mt-4"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label htmlFor="prenom" className="block text-gray-700 text-sm font-bold mb-2">Prénom:</label>
            <input
              type="text"
              id="prenom"
        className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-white text-center outline-1 -outline-offset-1 outline-yellow-400 placeholder:text-yellow-400 focus:outline-2 focus:-outline-offset-2  sm:text-sm/6 mt-4"
              placeholder="Votre prénom"
            />
          </div>
          <div>
            <label htmlFor="telephone" className="block text-gray-700 text-sm font-bold mb-2">Téléphone:</label>
            <input
              type="tel"
              id="telephone"
        className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-white text-center outline-1 -outline-offset-1 outline-yellow-400 placeholder:text-yellow-400 focus:outline-2 focus:-outline-offset-2  sm:text-sm/6 mt-4"
              placeholder="Votre numéro de téléphone"
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Enregistrer les modifications
          </button>
        </form>
      </main></div>
  )
}
