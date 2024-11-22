import Header from "./Header.js";
import Footer from "./Footer.js";
import Game from "./Game.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Game />
        <Footer />
      </div>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}