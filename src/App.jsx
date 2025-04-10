import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Game from "./Game.jsx";
import Home from "./Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spill" element={<Game />} />
        <Route path="/kontakt" element={<>Kontakt</>} />
        <Route path="/om" element={<>Om</>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
