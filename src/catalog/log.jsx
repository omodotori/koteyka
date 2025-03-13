import React from "react";
import { useNavigate } from "react-router-dom";
import paw from "../assets/images/paw2.jpg";
import vector from "../assets/images/Vector_log.png";
import vector1 from "../assets/images/Vector-1.png";
import vector2 from "../assets/images/Vector-2.png";
import vector3 from "../assets/images/Vector.png";
import vectorHome from "../assets/images/Vector_home.jpg";

import cat1log from "../assets/images/cat1log.png";
import cat2log from "../assets/images/cat2log.png";
import cat3log from "../assets/images/cat3log.png";
import cat4log from "../assets/images/cat4log.png";
import cat5log from "../assets/images/cat5log.png";
import cat6log from "../assets/images/cat6log.png";

const rooms = [
  {
    img: cat1log,
    name: "Эконом",
    size: "90х70х180 см",
    area: "0,63 м2",
    price: "100₽",
    features: [vector],
  },
  {
    img: cat2log,
    name: "Эконом плюс",
    size: "90х100х180 см",
    area: "0,90 м2",
    price: "200₽",
    features: [vector3, vector1],
  },
  {
    img: cat3log,
    name: "Комфорт",
    size: "100х125х180 см",
    area: "1,13 м2",
    price: "250₽",
    features: [vector3, vector1, vector2],
  },
  {
    img: cat4log,
    name: "Супер-Люкс",
    size: "180х160х180 см",
    area: "2,88 м2",
    price: "600₽",
    features: [vector3, vector1, vector2, vectorHome],
  },
  {
    img: cat5log,
    name: "Сьют",
    size: "125х125х180 см",
    area: "1,56 м2",
    price: "350₽",
    features: [vector3, vector1, vector2],
  },
  {
    img: cat6log,
    name: "Люкс",
    size: "160х160х180 см",
    area: "2,56 м2",
    price: "500₽",
    features: [vector3, vector1, vector2, vectorHome],
  },
  {
    img: cat1log,
    name: "Эконом",
    size: "90х70х180 см",
    area: "0,63 м2",
    price: "100₽",
    features: [vector],
  },
  {
    img: cat2log,
    name: "Эконом плюс",
    size: "90х100х180 см",
    area: "0,90 м2",
    price: "200₽",
    features: [vector3, vector1],
  },
];

function Log() {
  const navigate = useNavigate();

  const handleBookButtonClick = () => {
    navigate("/infolog");
  };

  return (
    <div className="catalog">
      <h2>Наши номера</h2>
      <div className="rooms">
        {rooms.map((room, index) => (
          <article key={index} className="room_">
            <img src={room.img} alt={room.name} className="room-image" />
            <p className="room-name">{room.name}</p>
            <div className="room-details">
              <span className="room-size">Размеры (ШхГхВ) - {room.size}</span>
              <span className="room-area">Площадь - {room.area}</span>
              <span className="room-features">
                Оснащение номера{" "}
                {room.features.map((feature, i) => (
                  <img
                    key={i}
                    src={feature}
                    alt="Оснащение"
                    className="feature-icon"
                  />
                ))}
              </span>
              <span className="room-price">
                Цена за сутки: <p>{room.price}</p>
              </span>
            </div>
            <button className="book-button" onClick={handleBookButtonClick}>
              Забронировать <img src={paw} alt="paw" className="paw-icon" />
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Log;
