import React from "react";
import nav from "../assets/search.svg";
import "./home.scss";
import { Slider } from "../Slider/Slider";
import "swiper/css";
import "swiper/css/navigation";

const Home = () => {
  return (
    <div>
      <div>
        <div className="home_container">
          <div className="home_container_left">
            <h2>
              сервис по поиску публикаций <br /> о компании <br /> по его ИНН
            </h2>
            <p>
              Комплексный анализ публикаций, получение данных в формате PDF на
              электронную почту.
            </p>
            <button>Запросить данные</button>
          </div>

          <img src={nav} alt="findCompany" />
        </div>
      </div>
      <Slider />
    </div>
  );
};
export default Home;
