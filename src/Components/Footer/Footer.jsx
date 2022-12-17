import React from "react";
import logo from "../assets/logoFooter.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_container_content">
          <img src={logo} alt="logo" />
          <address>
            г. Москва, Цветной б-р, 40 <br />
            +7 495 771 21 11 <br />
            info@skan.ru <br />
            <br />
            Copyright. 2022
          </address>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
