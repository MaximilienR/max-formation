import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <nav className="py-4 mb-3 text-white bg-yellow-400 rounded-2xl">
      <ul className="flex justify-center">
        <li className="mr-6"><a href="#" className="text-white hover:text-gray-300">   <Link to="/">
           </Link>Accueil</a></li>
        <li className="mr-6"><a href="#" className="text-white hover:text-gray-300">Formation</a></li>

        <li className="mr-6"><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
        <li className="mr-6"><a href="#" className="text-white hover:text-gray-300">Connexion</a></li>

      </ul>
    </nav>
  );
}

export default Nav;