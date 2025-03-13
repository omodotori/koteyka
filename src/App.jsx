import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./HomePage";
import Catalog from "./Catalog";
import InfoLog from "./infolog"; 
import "./styles/mobile.css";
import "./styles/layuot/footer.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/infolog" element={<InfoLog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
