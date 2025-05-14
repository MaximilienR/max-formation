import React from 'react';
import Aside from '../components/Profil/aside';
import Info from '../components/Profil/info';

function Profil() {
  return (
    <div className="flex">
      <Aside className="w-1/6 bg-yellow-400 p-4" /> {/* Passez la classe à Aside */}
            <div className="flex-1"> 
      <Info  />
       {/* Passez la classe à Info */}
</div>
      </div>
  );
}

export default Profil;