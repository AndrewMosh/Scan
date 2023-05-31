import React from "react";
import logo from "../assets/logo.svg";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="nav">
          <Link to="/">
            <div>Главная</div>
          </Link>
          <Link to="/">
            <div>Тарифы</div>
          </Link>
          <div>FAQ</div>
        </div>
        <div className="menu">
          <div>Зарегистрироваться</div>
          <Link to="/auth">
            <button>Войти</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Header;
