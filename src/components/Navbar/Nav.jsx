import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [userLogin, setUserLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Vérifie si un token est présent au montage
  useEffect(() => {
    const token = localStorage.getItem("token");
    setUserLogin(!!token); // true si token existe
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUserLogin(false);
    setMenuOpen(false);
    navigate("/login");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="relative py-4 mb-3 text-white bg-yellow-400 rounded-b-2xl">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-center">
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

      {/* Icône utilisateur */}
      <div className="absolute -translate-y-1/2 top-1/2 right-4">
        <button
          onClick={toggleMenu}
          className="text-3xl text-white focus:outline-none"
        >
          <FaUserCircle />
        </button>

        {menuOpen && (
          <div className="absolute right-0 z-50 w-40 mt-4 text-gray-800 bg-white rounded-md shadow-lg">
            <ul>
              {userLogin ? (
                <li>
                  <button
                    onClick={handleLogout}
                    className="block w-full px-4 py-2 text-left hover:bg-yellow-400 hover:text-white"
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
