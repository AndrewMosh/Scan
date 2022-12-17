import React from "react";
import nav from "../assets/search.svg";
import "./home.scss";
import { Slider } from "../Slider/Slider";
import "swiper/css";
import "swiper/css/navigation";
import tick from "../assets/tick.svg";
import blobs from "../assets/blobs.svg";

const Home = () => {
  return (
    <div className="home">
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
      <Slider />
      <div className="blobs">
        <div style={{ marginLeft: "70px" }}>
          <img src={tick} alt="" />
        </div>
        <div style={{ marginRight: "70px" }}>
          <img src={blobs} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Home;
