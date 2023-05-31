import React from "react";
import key from "../assets/Characters.svg";
import lock from "../assets/gridlock.svg";
import goo from "../assets/google.svg";
import fb from "../assets/facebook.svg";
import ya from "../assets/ya.svg";
import "./auth.scss";
import { useState } from "react";
import { signin } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Auth = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const nav = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin({ login, password }));
    if (error !== null) {
      setLogin("");
      setPassword("");
      nav("/");
    } else {
      setLogin("");
      setPassword("");
      setMessage("Неверный логин или пароль");
    }
  };
  //sf_student10KHKfTXb
  return (
    <div className="auth_container">
      <div className="auth_container_content">
        <div className="auth_left">
          <h2>Для оформления подписки на тариф, необходимо авторизоваться.</h2>
          <img src={key} alt="key" />
        </div>
        <div className="auth_right">
          <form className="auth_form" onSubmit={handleSubmit}>
            <img className="auth_form_lock" src={lock} alt="" />
            <div className="auth_form_enter">
              <div>Войти</div>
              <div>Зарегистрироваться</div>
            </div>
            <label>Логин или номер телефона:</label>
            <input
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <label>Пароль:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Войти</button>
            <p>{message}</p>
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
