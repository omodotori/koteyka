import "../styles/cat.css";
import temperatureImg from "../assets/images/температура.png";
import surveillanceImg from "../assets/images/видеонаблюдение.png";
import carImg from "../assets/images/car.png";
import foodImg from "../assets/images/food.png";
import dogImg from "../assets/images/dog.png";
import vetImg from "../assets/images/vet.png";

const features = [
  {
    img: temperatureImg,
    title: "Комфортная температура",
    description:
      "Во всех номерах поддерживается комфортная температура в пределах 23 - 25 градусов. В каждом номере можно дополнительно отрегулировать температуру.",
  },
  {
    img: surveillanceImg,
    title: "Видеонаблюдение",
    description:
      "Мы предоставляем доступ в нашу систему. Вы сможете следить за своим питомцем со своего смартфона или компьютера.",
  },
  {
    img: carImg,
    title: "Услуги Зоотакси",
    description: "Мы приедем за вашим питомцем в любой район Санкт-Петербурга.",
  },
  {
    img: foodImg,
    title: "Сбалансированное питание",
    description:
      "Вы можете привезти свой корм или доверить рацион своего питомца нашим профессионалам.",
  },
  {
    img: dogImg,
    title: "Ежедневные прогулки",
    description:
      "По вашему желанию мы выгуливаем вашего питомца два раза в день на специализированной закрытой территории.",
  },
  {
    img: vetImg,
    title: "Лучшие ветеринары",
    description:
      "В гостинице 24 часа дежурит ветеринарный врач, который окажет любую помощь в случае необходимости.",
  },
];

function Section2() {
  return (
    <div className="container section-padding">
      <section className="section_why_us">
        <h2 className="section_title">Почему мы ?</h2>
        <ul className="features_list">
          {features.map((feature, index) => (
            <article className="feature_item" key={index}>
              <img className="icon" src={feature.img} alt={feature.title} />
              <p className="feature_title">{feature.title}</p>
              <span className="feature_description">{feature.description}</span>
            </article>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Section2;
