import React from "react";
import paw from "../assets/images/paw.png";
import "./baner.css";

function Baner() {
    return (
        <div className="baner">
            <div className="baner-text">
                <h2 className="baner-title">Каждый 7-й день</h2>
                <h2 className="baner-title1">бесплатно!</h2>
                <p className="baner-description">
                    Акция действует при размещении <br />в номерах “Люкс” и “Супер-Люкс”
                </p>
            </div>
            <button className="baner-button">
                Забронировать <img src={paw} alt="paw icon" className="baner-icon" />
            </button>
        </div>
    );
}

export default Baner;
