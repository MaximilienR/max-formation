import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <main className="w-full flex-1">
        <Outlet />
      </main>
      <Toaster position="bottom-right" />
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default App;
