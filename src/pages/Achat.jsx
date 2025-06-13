import React from "react";
import Aside from "../components/Profil/aside";

function Achat() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <Aside className="w-1/6 bg-yellow-400 p-4" />
        <div className="flex-1">
          <h1>achat</h1>
        </div>
      </div>
    </div>
  );
}

export default Achat;
