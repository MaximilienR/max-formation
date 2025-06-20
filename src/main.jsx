// main.jsx
import { UserProvider } from "./components/Context/userContext";
import React from "react";
import ReactDOM from "react-dom/client";
import UserNotConnected from "./components/secure/UserNotConnected";
import UserConnected from "./components/secure/UserConnected";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Contact from "../src/pages/Contact";
import Error from "./pages/Error";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./pages/Login";
import Cours from "./components/Cours/Cours";
import Password from "./pages/Password";
import Detail from "./pages/details";
import Contenu from "./components/Contenu/Contenu";
import Coaching from "./pages/Coatching";
import Profil from "./pages/Profil";
import Quizz from "./pages/Quizz";
import Achat from "./pages/Achat";
import Certificat from "./pages/Certificat";
import Admin from "./pages/Admin";
import "./index.css";
import UserIsAdmin from "./components/secure/UserIsAdmin";
import Authorized from "./pages/Authorized";
import CoursHTMLCSS from "./components/Contenu/Contenu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "register", element: <Register /> },

      {
        path: "login",
        element: <Login />,
      },
      { path: "cours", element: <Cours /> },
      { path: "password", element: <Password /> },
      {
        path: "contenu",
        element: (
          <UserConnected>
            <Contenu />
          </UserConnected>
        ),
      },
      { path: "Coatch", element: <Coaching /> },

      // <-- ici la route detail avec paramètre id
      { path: "cours/:id", element: <CoursHTMLCSS /> },

      {
        path: "profil",
        element: (
          <UserConnected>
            <Profil />
          </UserConnected>
        ),
      },
      {
        path: "achat",
        element: <Achat />,
      },
      {
        path: "quizz",
        element: (
          <UserConnected>
            <Quizz />
          </UserConnected>
        ),
      },
      {
        path: "admin",
        element: (
          <UserIsAdmin>
            <Admin />
          </UserIsAdmin>
        ),
      },
      {
        path: "certificat",
        element: <Certificat />,
      },
      { path: "Authorized", element: <Authorized /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
