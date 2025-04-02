import React from 'react';

export default function Contact() {
  return (
    <div className="flex justify-center px-12">
      <form className="container mx auto p-4 bg-blue-400  justify-center rounded-2xl ml-50 ">
        <div className="border-b border-gray-900/10 pb-12 space-y-12">
        <h2 className="text-base/7 font-semibold text-gray-900 text-center">Nous contacter</h2>
        <p className="mt-1 text-sm/6 text-gray-600">Une question ? veuillez remplir le formulaire ci dessous</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3"> 
              <input
                type="text"
                name="subject1"
                id="subject1"
                placeholder="Sujet"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 mt-4"
              />
            </div>
            <div className="sm:col-span-3">  
              <input
                type="text"
                name="subject2"
                id="subject2"
                placeholder="Sujet"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 mt-4"
              />
            </div>
            <div className="sm:col-span-6">  
              <div className="mt-2">
                <textarea
                  name="email"
                  id="email"
                  placeholder="Votre message"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
      </form>
    </div>
  );
}