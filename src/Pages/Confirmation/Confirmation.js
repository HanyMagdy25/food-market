import React from "react";
import "./Confirmation.css";
import { BsCalendar2Date, BsPhone } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import paypal from "../../assets/images/paypal.png";
import visa from "../../assets/images/visa.png";
import apple from "../../assets/images/apple-pay.png";
export default function Confirmation() {
  return (
    <div className="confirm">
      <div className="confirm-container">
        <h2>تأكيد الطلب</h2>
        <div className="confirm-two-div">
          <div className="confirm-two-div__right">
            <div className="confirm-two-div__right__top">
              <h4>بيانات الشحن</h4>
              <Link to="/">تغير بيانات الشحن</Link>
            </div>
            <div className="confirm-two-div__right__bottom">
              <div>
                <span>
                  <MdLocationOn />
                </span>{" "}
                <p>
                  منزل رقم 10,شارع خالد أبن الوليد , حي العزيزو الرياض منزل رقم
                  10,شارع خالد أبن الوليد , حي العزيزو الرياض
                </p>
              </div>
              <div>
                <span>
                  <BsPhone />
                </span>{" "}
                <p>+96605000000</p>
              </div>
              <div>
                <span>
                  <BsCalendar2Date />
                </span>{" "}
                <p>يصل خلال من 5 إلى 7 أيام عمل</p>
              </div>
            </div>
          </div>

          <div className="confirm-two-div__left">
            <div className="confirm-two-div__left__top">
              <h4>الإجمالي</h4>
              <h4>1282 ريال</h4>
            </div>
            <div className="confirm-two-div__left__agree">
              <input type="checkbox" />
              <span>
                أوافق على شروط الخدمة و ألتزم بها <Link to="/">قراءة</Link>
              </span>
            </div>
            <div className="visa-card">
                <img src={paypal} alt="paypal" />
                <img src={apple} alt="paypal" />
                <img src={visa} alt="paypal" />
                <img src={paypal} alt="paypal" />
                <img src={apple} alt="paypal" />
            </div>
            <div className="confirm-btn">
                <button className="btn-green">إتمام الطلب</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
