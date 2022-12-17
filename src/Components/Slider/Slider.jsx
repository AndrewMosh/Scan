import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "./slider.scss";
import slide1 from "../assets/ic1.svg";
import slide2 from "../assets/ic2.svg";
import slide3 from "../assets/ic3.svg";

export const Slider = () => {
  return (
    <div style={{ margin: "100px auto 50px auto", maxWidth: "1440px" }}>
      <div className="slider">
        <h1>Почему именно мы</h1>
        <Swiper
          slidesPerView={3}
          navigation={true}
          modules={[Navigation]}
          rewind={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <img src={slide1} alt="" />
            </div>
            <p>
              Высокая и оперативная скорость <br /> обработки заявки
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={slide2} alt="" />
            </div>
            <p>
              Огромная комплексная база <br /> данных, обеспечивающая <br />{" "}
              объективный ответ на запрос
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={slide3} alt="" />
            </div>
            <p>
              Защита конфеденциальных сведений, не подлежащих разглашению по
              федеральному законодательству
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={slide1} alt="" />
            </div>
            <p>
              Высокая и оперативная скорость <br /> обработки заявки
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={slide2} alt="" />
            </div>
            <p>
              Огромная комплексная база <br /> данных, обеспечивающая <br />{" "}
              объективный ответ на запрос
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={slide3} alt="" />
            </div>
            <p>
              Защита конфеденциальных сведений, не подлежащих разглашению по
              федеральному законодательству
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
