import React, { useEffect, useState } from "react";
import logo from "../Assets/logo.png";

export default function Certificat() {
  const [certificateId, setCertificateId] = useState("");

  useEffect(() => {
    const uniqueId = crypto.randomUUID();
    setCertificateId(uniqueId);
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="bg-sky-900 rounded-2xl shadow-xl p-10 max-w-3xl w-full text-center border-8 border-yellow-400">
        <h1 className="text-4xl font-extrabold text-yellow-500 mb-6 uppercase">
          Certificat de Réussite
        </h1>
        <p className="text-lg mb-8 text-amber-50">
          Ce certificat est décerné à
        </p>
        <h2 className="text-3xl font-bold text-sky-900 mb-4 underline">
          [Nom de l'étudiant]
        </h2>
        <p className="text-amber-50 text-lg mb-10">
          Pour avoir complété avec succès la formation{" "}
          <span className="font-semibold text-orange-500">
            "[Nom de la formation]"
          </span>
          , démontrant engagement et excellence.
        </p>

        <p className="text-sm text-amber-100 mt-4">
          <strong>Numéro du certificat :</strong> {certificateId}
        </p>

        <div className="flex justify-between items-center mt-8 px-6 text-sm">
          <div className="text-orange-500 text-base">
            <p>
              <span className="font-medium">Fait le :</span> 03 juin 2025
            </p>
            <img
              src={signature}
              alt="Signature"
              className="h-20 mx-auto mb-6"
            />
          </div>
          <div className="text-right text-gray-600">
            <div className="w-32 h-0.5 bg-gray-400 mx-auto mt-2"></div>
            <img src={logo} alt="Logo" className="h-20 mx-auto mb-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
