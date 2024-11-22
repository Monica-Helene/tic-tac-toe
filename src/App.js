import Header from "./Header.js";
import Footer from "./Footer.js";
import Game from "./Game.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Game />}/>
        <Route path="/om" element={<>Om</>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
