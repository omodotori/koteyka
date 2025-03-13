import cat1 from "../assets/images/cat1.png";
import cat2 from "../assets/images/cat2.png";
import cat3 from "../assets/images/cat3.png";
import whiteCat from "../assets/images/whitecat.png";
import bed from "../assets/images/Vector.png";
import toy from "../assets/images/Vector-1.png";
import ball from "../assets/images/Vector-2.png";
import house from "../assets/images/Vector_home.jpg";
import paw from "../assets/images/paw2.jpg";
import "./about.css";

function AboutPage() {
  return (
    <>
      <section className="main-block">
        <div className="images-container">
          <div className="cats-group">
            <img className="cat-img" src={cat1} alt="cat1" />
            <img className="cat-img" src={cat2} alt="cat2" />
            <img className="cat-img" src={cat3} alt="cat3" />
          </div>
          <img className="big-cat-img" src={whiteCat} alt="big cat" />
        </div>

        
      <div className="info-section">
        <h2 className="header1">Супер-Люкс</h2>
        <p className="dimensions">Размеры: 180x160x180 см</p>
        <p className="space">Площадь: 2,88 м²</p>
        <h3 className="equipment-header">Оснащение номера </h3>

        <ul className="equipment-list">
          <li className="equipment-item">
            <img className="equipment-icon" src={bed} alt="bed" /> Лежак
          </li>
          <li className="equipment-item">
            <img className="equipment-icon" src={house} alt="house" /> Домик
          </li>
          <li className="equipment-item">
            <img className="equipment-icon" src={ball} alt="ball" /> Игровой комплекс - 3 яруса
          </li>
          <li className="equipment-item">
            <img className="equipment-icon" src={toy} alt="toy" /> Когтеточка
          </li>
        </ul>

        <p className="cost">
          Цена за сутки: <span className="cost-value">600₽</span>
        </p>

        <button className="reserve-btn">
          <span className="reserve-text">Забронировать</span>
          <img className="reserve-icon" src={paw} alt="paw" width="35" height="35" />
        </button>
      </div>
      </section>

    </>
  );
}

export default AboutPage;