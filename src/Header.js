import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="buttons">
          <li>
            <Link to="/">Hjem</Link>
          </li>
          <li>
            <Link to="/om">Om</Link>
          </li>
          <li>
            <a href="https://www.google.com/maps/@35.7040744,139.5577317,3a,75y,289.6h,87.01t,0.72r/data=!3m6!1e1!3m4!1sgT28ssf0BB2LxZ63JNcL1w!2e0!7i13312!8i6656">
              Ikke sant
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/shorts/oQz2tkFhFGk">Nei.</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
