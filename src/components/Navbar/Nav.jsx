import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa"; // Icons from react-icons

const Header = () => {
  const [userLogin, setUserLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogin = () => {
    setUserLogin(true);
    setMenuOpen(false);
  };

  const handleLogout = () => {
    setUserLogin(false);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="py-4 mb-3 text-white bg-yellow-400 rounded-b-2xl relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          {/* Liens centrés */}
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-white hover:text-gray-300">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/cours" className="text-white hover:text-gray-300">
                Formation
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Icône utilisateur absolument positionnée à droite */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2">
        <button
          onClick={toggleMenu}
          className="text-white text-3xl focus:outline-none"
        >
          <FaUserCircle />
        </button>

        {menuOpen && (
          <div className="absolute right-0 mt-4 w-40 bg-white rounded-md shadow-lg text-gray-800 z-50">
            <ul>
              {userLogin ? (
                <li>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-yellow-400 hover:text-white"
                  >
                    Déconnexion
                  </button>
                </li>
              ) : (
                <>
                  <li>
                    <Link
                      to="/register"
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-2 hover:bg-yellow-400 hover:text-white"
                    >
                      Inscription
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-2 hover:bg-yellow-400 hover:text-white"
                    >
                      Connexion
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
