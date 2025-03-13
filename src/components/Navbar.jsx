import { Link } from "react-router-dom";
import "../styles/cat.css";
import logo_header from "../assets/images/logo.png";

function Navbar() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo_header} alt="Логотип" />
      </div>
      <button className="nav-toggle" aria-label="Открыть меню">
            <span className="hamburger"></span>
        </button>
      <nav className="nav">
        <Link to="/">Почему мы?</Link>
        <Link to="/rooms">Номера</Link>
        <Link to="/reviews">Отзывы</Link>
        <Link to="/contacts">Как нас найти?</Link>
      </nav>
    </div>

  );
}

export default Navbar;
