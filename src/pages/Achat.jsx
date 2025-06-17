import React from "react";
import Aside from "../components/Profil/aside";
import achat from "../data/achat.json";
function Achat() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <Aside className="w-1/6 bg-yellow-400 p-4" />
        <div className="flex-1">
          <table className="table-auto border-collapse border border-gray-300 w-full">
            <thead>
              <tr className="bg-sky-900 text-white">
                <th className="border border-gray-300 px-4 py-2">
                  Nom de l'article
                </th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">Lien</th>
              </tr>
            </thead>
            <tbody>
              {achat.map((item) => (
                <tr key={item.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">
                    {item.nom}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.date}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <a
                      href={item.lien}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Achat;
