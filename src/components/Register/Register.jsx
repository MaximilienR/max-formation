import React from 'react'

export default function register() {
  return (
    <div>
      <form className="container mx auto p-4 bg-blue-400  justify-center rounded-2xl ml-50 ">
        <div className="border-b border-gray-900/10 pb-12 space-y-12 ">
        <h2 className="text-base/7 font-semibold text-gray-900 text-center">Inscription</h2>
 
          <div className="sm:col-span-3 "> 
              <input
                type="text"
                name="pseudo"
                id="pseudo"
                placeholder="Veuillez saisir votre pseudo"
                className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-white text-center outline-1 -outline-offset-1 outline-yellow-400 placeholder:text-yellow-400 focus:outline-2 focus:-outline-offset-2  sm:text-sm/6 mt-4"
                />
                  <input
                type="text"
                name="email"
                id="email"
                placeholder="Veuillez saisir votre email"
                className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-white text-center outline-1 -outline-offset-1 outline-yellow-400 placeholder:text-yellow-400 focus:outline-2 focus:-outline-offset-2  sm:text-sm/6 mt-4"
                />
                  <input
                type="text"
                name="password"
                id="password"
                placeholder="Veuillez saisir votre mot de passe"
                className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-white text-center outline-1 -outline-offset-1 outline-yellow-400 placeholder:text-yellow-400 focus:outline-2 focus:-outline-offset-2  sm:text-sm/6 mt-4"
                />
                  <input
                type="text"
                name="password"
                id="password"
                placeholder="Veuillez saisir votre mot de passe"
                className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-white text-center outline-1 -outline-offset-1 outline-yellow-400 placeholder:text-yellow-400 focus:outline-2 focus:-outline-offset-2  sm:text-sm/6 mt-4"
                />
            </div>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">    
            </div>
            </div>

            </div>
            
              <button type="submit" className="rounded-md bg-yellow-400 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">S'inscrire</button>

      </form>
    </div>
  )
}
