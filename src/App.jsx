import React, { useState } from 'react';
import './App.css'; // Importez vos styles CSS
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Contenu from './components/Contenu/Contenu';
import Cours from './components/Cours/Cours';
import Nav from './components/Navbar/Nav';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './pages/Login';
import Contact from './components/Contact/Contact';
import Register from './components/Register/Register';
import Error from './pages/Error';
import Profil from './pages/Profil';
import Coatching from './components/coatching/coatching';
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
     <Route path="/Coaching" element={<Coatching/>}/>
      <Route path="/Cours" element={<Cours/>}/>
     <Route path="/Login" element={<Login/>}/>
     <Route path='/Contact' element={<Contact/>}/>
     <Route path='/register' element={<Register/>}/>
     <Route path='/Profil' element={<Profil/>}/>
     <Route path='/Profil/informations' element={<Profil/>}/>
     <Route path='/Profil/achats' element={<Profil/>}/>
     <Route path='/Profil/parcours' element={<Profil/>}/>
     <Route path="*" element={<Error/>}/>  
     </Routes>
    <Footer/>
    </BrowserRouter>
   
  );
}

export default App;