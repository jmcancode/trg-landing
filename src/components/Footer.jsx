import React from "react";
// styles
import "./footer.css";
// images
import logo from "../assets/images/trg-gfdl.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="first-section animate-bottom">
        <img
          className="img-responsive"
          src={logo}
          alt="logo"
          height={80}
          width={80}
        />
      </div>
      <div className="second-section animate-bottom">
        <ul>
          <li>FAQs</li>
        </ul>
      </div>
      <div className="third-section animate-bottom">
        <ul>
          <li>Legal Notices</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
