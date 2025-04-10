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
            <Link to="/spill">Spill</Link>
          </li>
          <li>
            <Link to="/kontakt">Kontakt</Link>
          </li>
          <li>
            <Link to="/om">Om</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
