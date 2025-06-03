import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contenu from "./components/Contenu/Contenu";
import Cours from "./components/Cours/Cours";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Register from "./components/Register/Register";
import Error from "./pages/Error";
import Profil from "./pages/Profil";
import Coaching from "./pages/coatching";
import Password from "./pages/Password";
import Quizz from "./pages/Quizz";
import Detail from "./pages/details";
import Certificat from "./components/Certificat/certificat";
function App() {
  const [user, setUser] = useState(false);

  const toggleUser = () => {
    setUser(!user);
  };
  return (
    <BrowserRouter className="min-h-screen">
      <Nav login={user} toggleUserMethod={toggleUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contenu" element={<Contenu />} />
        <Route path="/Cours" element={<Cours />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Coatch" element={<Coaching />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/Profil/informations" element={<Profil />} />
        <Route path="/Profil/achats" element={<Profil />} />
        <Route path="/Profil/parcours" element={<Profil />} />
        <Route path="/Password" element={<Password />} />
        <Route path="/Quizz" element={<Quizz />} />
        <Route path="/Certificat" element={<Certificat />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
