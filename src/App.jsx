import React from 'react';
import './App.css'; // Importez vos styles CSS
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Contenu from './components/Contenu/Contenu';
import Cours from './components/Cours/Cours';
import Nav from './components/Navbar/Nav';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/Contenu" element={<Contenu/>}/>
     <Route path="/Cours" element={<Cours/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   
  );
}

export default App;