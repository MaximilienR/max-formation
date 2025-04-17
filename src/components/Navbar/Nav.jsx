import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Header = ({ login, toggleUserMethod }) => {
  return (
    <nav className="py-4 mb-3 text-white bg-yellow-400 rounded-2xl">
      <ul className="flex flex-col md:flex-row justify-center">
        <li className="mb-4 md:mr-6">
          <Link to="/" className="text-white hover:text-gray-300">
            Accueil
          </Link>
        </li>
        <li className="mb-4 md:mr-6">
          <Link to="/cours" className="text-white hover:text-gray-300">
            Formation
          </Link>
        </li>
        <li className="mb-4 md:mr-6">
          <Link to="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </li>
        {login === false ? (
          <nav className="flex flex-col md:flex-row space-x-6">
            <Link to="/register" className="text-gray-600 hover:text-black">
              Inscription
            </Link>
            <Link to="#" className="text-gray-600 hover:text-black" onClick={toggleUserMethod}>
              Connexion
            </Link>
          </nav>
        ) : null}
      </ul>
    </nav>
  );
};

export default Header;