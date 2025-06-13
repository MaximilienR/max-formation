import React from "react";
import Aside from "../components/Profil/aside";

function Achat() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <Aside className="w-1/6 bg-yellow-400 p-4" />
        <div className="flex-1">
          <table class="table-auto border-collapse border border-gray-300 w-full">
            <thead>
              <tr class="bg-gray-200">
                <th class="border border-gray-300 px-4 py-2">
                  Nom de l'article
                </th>
                <th class="border border-gray-300 px-4 py-2">Date</th>
                <th class="border border-gray-300 px-4 py-2">Lien</th>
              </tr>
            </thead>
            <tbody>
              <tr class="hover:bg-gray-100">
                <td class="border border-gray-300 px-4 py-2">HTML</td>
                <td class="border border-gray-300 px-4 py-2">25.02.25</td>
                <td class="border border-gray-300 px-4 py-2">
                  <a href="">...</a>
                </td>{" "}
              </tr>
              <tr class="hover:bg-gray-100">
                <td class="border border-gray-300 px-4 py-2">CSS</td>
                <td class="border border-gray-300 px-4 py-2">30.03.25</td>
                <td class="border border-gray-300 px-4 py-2">
                  <a href="">...</a>
                </td>{" "}
              </tr>
              <tr class="hover:bg-gray-100">
                <td class="border border-gray-300 px-4 py-2">JS</td>
                <td class="border border-gray-300 px-4 py-2">28.04.25</td>
                <td class="border border-gray-300 px-4 py-2">
                  <a href="">...</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Achat;
