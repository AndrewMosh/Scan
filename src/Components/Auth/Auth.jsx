import React from "react";
import key from "../assets/Characters.svg";
import lock from "../assets/gridlock.svg";
import goo from "../assets/google.svg";
import fb from "../assets/facebook.svg";
import ya from "../assets/ya.svg";
import "./auth.scss";

const Auth = () => {
  return (
    <div className="auth_container">
      <div className="auth_container_content">
        <div className="auth_left">
          <h2>Для оформления подписки на тариф, необходимо авторизоваться.</h2>
          <img src={key} alt="key" />
        </div>
        <div className="auth_right">
          <form className="auth_form">
            <img className="auth_form_lock" src={lock} alt="" />
            <div className="auth_form_enter">
              <div>Войти</div>
              <div>Зарегистрироваться</div>
            </div>
            <label>Логин или номер телефона:</label>
            <input type="text" />
            <label>Пароль:</label>
            <input type="text" />
            <button>Войти</button>
            <a href="">Восстановить пароль</a>
            <label>Войти через:</label>
            <div className="auth_form_social">
              <img src={goo} alt="google" />
              <img src={fb} alt="facebook" />
              <img src={ya} alt="yandex" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Auth;
