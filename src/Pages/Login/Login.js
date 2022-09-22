import React from "react";
import "./Login.css";
import googleLogo from "../../assets/images/google.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="signup">
      <div className="signup-container">
        <div className="login-bg-image">
          <div className="signup-content">
            <h2>مرحبا!</h2>
            <form>
              <div className="all-inputs">
                <div className="form-control">
                  <label>بريدك الإلكتروني</label>
                  <input type="email" />
                </div>
                <div className="form-control">
                  <label>كلمة السر</label>
                  <input type="password" />
                </div>
              </div>
              <div className="remember">
                <div>
                  <input type="checkbox" />
                  <span> تذكرنى </span>
                </div>
                <div>
                  <Link to="/">نسيت كلمة السر؟</Link>
                </div>
              </div>
              <button className="sign-btn">تسجيل دخول</button>
              <div className="or">أو</div>
              <button className="sign-btn-google">
                  تسجيل دخول عن طريق <img src={googleLogo} alt="google" />
              </button>
              <div className="already-have">
                <p>لديك حساب بالفعل؟</p>
                <Link to="/login">قم بتسجيل الدخول</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
