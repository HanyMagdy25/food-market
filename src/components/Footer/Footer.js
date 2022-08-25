import React from "react";
import { Link } from "react-router-dom";
import InputGreen from "../Header/InputGreen";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { AiOutlineYoutube ,AiOutlineCopyrightCircle} from "react-icons/ai";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-top-div">
            <h4>الفئات</h4>
            <ul>
              <li>
                <Link to="/">منتجات الألبان</Link>
              </li>
              <li>
                <Link to="/">المخبوزات</Link>
              </li>
              <li>
                <Link to="/">لحوم و دواجن</Link>
              </li>
              <li>
                <Link to="/">العروض الأسبوعية</Link>
              </li>
              <li>
                <Link to="/">العناية بالبشرة</Link>
              </li>
              <li>
                <Link to="/">الخضاروات و الفاكهة</Link>
              </li>
            </ul>
          </div>
          <div className="footer-top-div">
            <h4>المساعدة</h4>
            <ul>
              <li>
                <Link to="/">الشحن</Link>
              </li>
              <li>
                <Link to="/">طرق الدفع</Link>
              </li>
              <li>
                <Link to="/">سياسة الإرجاع</Link>
              </li>
            </ul>
          </div>
          <div className="footer-top-div">
            <h4>إشترك في نشرة أخبارنا</h4>
            <InputGreen />
          </div>
          <div className="footer-icons">
            <Link to="/">
              <FaFacebookF />
            </Link>
            <Link to="/">
              <BsInstagram />
            </Link>
            <Link to="/">
              <FaTwitter />
            </Link>
            <Link to="/">
              <AiOutlineYoutube />
            </Link>
          </div>
        </div>
        <hr />
        <div className="footer-copyright"><span><AiOutlineCopyrightCircle/>جميع الحقوق محفوظةSoftware Cloud 2 </span></div>
      </div>
    </footer>
  );
};

export default Footer;
