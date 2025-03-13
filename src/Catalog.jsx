import CatalogPage from "./catalog/log.jsx";
import Section4 from "./components/Section4.jsx";
import "./catalog/log.css";
import "./styles/base/reset.css";
import "./styles/base/typography.css";
import Baner from "./catalog/Baner.jsx";
import './catalog/baner.css';

function Catalog() {
  return (
    <>
      <CatalogPage />
      <Baner />
      <Section4 />
    </>
  );
}

export default Catalog;
