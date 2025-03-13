import facebookIcon from "../assets/images/icon_facebook.jpg";
import instagramIcon from "../assets/images/icon_instagram.jpg";
import vkIcon from "../assets/images/icon_vk.jpg";


function Section4() {
    return (
      <section className="contact_section">
        <div className="contact">
          <h2 className="section_title">Как нас найти?</h2>
          <div className="contact_info">
            <p className="contact_label">Адрес</p>
            <span className="contact_detail">Санкт-Петербург,<br /> улица Большая Конюшенная, д 19</span>
          </div>

          <div className="contact_info">
            <p className="contact_label">Режим работы</p>
            <span className="contact_detail">Ежедневно, с 9:00 до 20:00</span>
          </div>

          <div className="contact_info">
            <p className="contact_label">Телефон</p>
            <span className="contact_detail">8 (800) 333-55-99</span>
          </div>

          <div className="contact_info">
            <p className="contact_label">E-mail</p>
            <span className="contact_detail">info@cat-hotel.ru</span>
          </div>

          <div className="contact_info">
            <p className="contact_label">Социальные сети</p>
            <div className="social_links">
              <img src={facebookIcon} alt="facebook" className="social_icon" />
              <img src={instagramIcon} alt="instagram" className="social_icon" />
              <img src={vkIcon} alt="vk" className="social_icon" />
            </div>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.5989428318853!2d30.320508377011116!3d59.93879686208765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca5ba729%3A0xea9c53d4493c879f!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywg0KDQtdGB0LXQuSwgMTkxMTg2!5e0!3m2!1skk!2skz!4v1739103241409!5m2!1skk!2skz"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </section>
    );
  }

  export default Section4;
