import React, { useState } from 'react';
import './App.css'; // Importez vos styles CSS
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Contenu from './components/Contenu/Contenu';
import Cours from './components/Cours/Cours';
import Nav from './components/Navbar/Nav';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
  function App() {
    const [user, setUser] = useState(false);

    const toggleUser = () => {
      setUser(!user);
    };
  return (
    <BrowserRouter  className="min-h-screen">
    <Nav login={user} toggleUserMethod={toggleUser} />
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/Contenu" element={<Contenu/>}/>
      <Route path="/Cours" element={<Cours/>}/>
     <Route path="/Login" element={<Login/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   
  );
}

export default App;