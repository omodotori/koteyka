import Paw2 from '../assets/images/paw2.jpg';
import Rectangle_cat from '../assets/images/rectangle_cat.png';

function Section3() {
  return (
    <section className="rooms_section" id="numbers">
      <h2 className="section_title">Номера</h2>
      <div className="container__content">
        <img src={Rectangle_cat} alt="cat" className="room_image"/>
        <div className="container__apartment">
          <div className="custom_list">
            <p className="room_type">Эконом плюс</p>
            <ul>
              <li className="room_item"><span className="room">Площадь - 0,90 м²</span></li>
              <li className="room_item"><span className="room">Размеры (ШхГхВ) — 90х100х180 см</span></li>
              <li className="room_item"><span className="room">Цена за сутки: 200₽</span></li>
            </ul>
            <button className="room_button">
              Забронировать <img src={Paw2} alt="paw2" className="paw_icon"/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
