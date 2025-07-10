import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="left-0 w-full py-4 mt-3 text-white bg-yellow-400 rounded-t-2xl">
        <div className="container p-4 mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="w-full p-4 md:w-1/3 xl:w-1/3">
              <h4 className="mb-2 text-lg font-bold">Conditions Générales</h4>
              <ul>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Utilisation des données personnelles
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <Link
                      to="/Mention"
                      className="text-white hover:text-gray-300"
                    >
                      Propriété intellectuelle
                    </Link>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Cookies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Responsabilité
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Litiges
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full p-4 md:w-1/3 xl:w-1/3">
              <h4 className="mb-2 text-lg font-bold">Mentions Légales</h4>
              <ul>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Identité du propriétaire du site
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Adresse du propriétaire du site
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Numéro de téléphone du propriétaire du site
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Adresse e-mail du propriétaire du site
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full p-4 md:w-1/3 xl:w-1/3">
              <h4 className="mb-2 text-lg font-bold">Liens Utiles</h4>
              <ul>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Plan du site
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
