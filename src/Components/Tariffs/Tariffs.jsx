import React from "react";
import bulb from "../assets/bulb.svg";
import darts from "../assets/darts.svg";
import laptop from "../assets/laptop.svg";
import "./tariffs.scss";

export const Tariffs = () => {
  return (
    <div className="tariffs">
      <h1>наши тарифы</h1>

      <div className="tariffs_container">
        <div className="tariffs_container_item current_border">
          <div className="tariffs_container_item_top current">
            <div>
              <p>
                <span>Beginner</span>
                <br />
                Для небольшого исследования
              </p>
              <img width={90} height={90} src={bulb} alt="bulb" />
            </div>
          </div>
          <div className="tariffs_container_item_info">
            <div>
              <p>
                799 ₽ <span>1 200 ₽</span>
              </p>
              <p>или 150 ₽/мес. при рассрочке на 24 мес.</p>
            </div>
            <ul>
              <span>В тариф входит:</span>
              <li>Безлимитная история запросов</li>
              <li>Безопасная сделка</li>
              <li>Поддержка 24/7</li>
            </ul>
            <button className="current_button">Перейти в личный кабинет</button>
          </div>
        </div>

        <div className="tariffs_container_item">
          <div className="tariffs_container_item_top pro">
            <div>
              <p>
                <span>Pro</span>
                <br />
                Для HR и фрилансеров
              </p>
              <img width={90} height={90} src={darts} alt="darts" />
            </div>
          </div>
          <div className="tariffs_container_item_info">
            <div>
              <p>
                1 299 ₽ <span>2 600 ₽</span>
              </p>
              <p>или 279 ₽/мес. при рассрочке на 24 мес.</p>
            </div>
            <ul>
              <span>В тариф входит:</span>
              <li>Все пункты тарифа Beginner</li>
              <li>Экспорт истории</li>
              <li>Рекомендации по приоритетам</li>
            </ul>
            <button className="tariff_button">Подробнее</button>
          </div>
        </div>

        <div className="tariffs_container_item">
          <div className="tariffs_container_item_top business">
            <div>
              <p>
                <span>Business</span> <br /> Для корпоративных клиентов
              </p>
              <img width={90} height={90} src={laptop} alt="laptop" />
            </div>
          </div>
          <div className="tariffs_container_item_info">
            <div>
              <p>
                2 379 ₽ <span>3 700 ₽</span>
              </p>
            </div>
            <ul>
              <span>В тариф входит:</span>
              <li>Все пункты тарифа Pro</li>
              <li>Безлимитное количество запросов</li>
              <li>Приоритетная поддержка</li>
            </ul>
            <button className="tariff_button">Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  );
};
