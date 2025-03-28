import React from 'react'

export default function Login() {
  return (
    <div className=' container mx auto p-4 bg-blue-400  justify-center'>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 xl:w-1/3 p-4">
              <h4 className="text-lg font-bold mb-2">Login</h4>
              <form  className="  ">
                <div className="mb-4">
                  <label htmlFor="email" className="block text-white font-bold mb-2 bg-white-400">Email</label>
                  <input type="email" id="email" className="w-full p-2 border rounded" />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-white font-bold mb-2">Mot de passe</label>
                  <input type="password" id="password" className="w-full p-2 border rounded" />
                </div>
                <button type="submit" className="bg-yellow-400 text-black font-bold py-2 px-4 rounded">Me connecter</button>
              </form>
            </div>
          </div>
    </div>
  )
}
