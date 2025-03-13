import { Link } from "react-router-dom";
import logo_footer from "../assets/images/logo_footer.jpg";
import "../styles/cat.css";
import '../styles/layuot/footer.css'
function Footer() {
  return (
    <footer className="footer">
      <div className="footer_top">
        <img src={logo_footer} alt="logo" className="logo_footer" />
        <nav className="nav_footer">
          <Link to="/">Почему мы?</Link>
          <Link to="/">Номера</Link>
          <Link to="/">Отзывы</Link>
          <Link to="/">Как нас найти?</Link>
        </nav>
      </div>
      <hr />
      <div className="footer_bottom">
        <p className="footer_rights">© 2019 Все права защищены</p>
        <p className="footer_privacy">Политика конфиденциальности</p>
      </div>
    </footer>
  );
}

export default Footer;
