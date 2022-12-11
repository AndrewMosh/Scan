import React from "react";
import logo from "../assets/logo.svg";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="nav">
          <div>Главная</div>
          <div>Тарифы</div>
          <div>FAQ</div>
        </div>
        <div className="menu">
          <div>Зарегистрироваться</div>
          <button>Войти</button>
        </div>
      </nav>
    </header>
  );
};
export default Header;
