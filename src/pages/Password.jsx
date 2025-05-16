import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Password() {



 
  return (
    <div className="container flex items-center justify-center p-4 mx-auto bg-blue-400 rounded-2xl">
      <div className="w-full p-4 md:w-1/2 xl:w-1/3">
        <h4 className="mb-2 text-lg font-bold">Mot de pass oublié </h4>
        <form className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-bold text-white">Email</label>
            <input type="email" id="email" className="w-full p-2 bg-gray-100 border rounded" />
          </div>
          
          <button type="submit" className="px-4 py-2 font-bold text-black bg-yellow-400 rounded">Envoyer</button>
        </form>
     </div>
    </div>
  )
}