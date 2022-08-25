import React from "react";
import "./Header.css";
import InputGreen from "./InputGreen";
const Header = () => {
  return (
    <section className="header-section">
      <div className="header-section-container">
        <div className="header-right">
          <h4>
            قم بإدخال رقم جوالك لتحصل <br />
            على عروض أسبوعية!
          </h4>
          <InputGreen/>
        </div>
        <div className="header-left"></div>
      </div>
    </section>
  );
};

export default Header;
