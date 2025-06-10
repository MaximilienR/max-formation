import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./components/Navbar/Nav"; // anciennement Nav.js
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className=" ">
      <Header />
      <main className="w-full flex-1">
        <Outlet />
      </main>
      <Toaster position="bottom-right" />
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default App;
