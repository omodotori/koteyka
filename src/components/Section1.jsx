import React from "react";
import { Link } from "react-router-dom";
import "../styles/cat.css";
import pawIcon from "../assets/images/paw.png";

const Section1 = () => {
  return (
    <div className="section">
      <div className="section_container">
        <p className="location">Санкт-Петербург</p>
        <h1 className="hotel_name">Котейка</h1>
        <p className="description">Уютная гостиница для котов и кошек</p>
        <Link to="/catalog">
          <button className="book_button">
            Забронировать <img src={pawIcon} alt="paw" className="paw_icon" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Section1;
