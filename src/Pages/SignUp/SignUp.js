import React from "react";
import "./SignUp.css";
import googleLogo from "../../assets/images/google.png";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="signup">
      <div className="signup-container">
        <div className="sign-bg-image">
          <div className="signup-content">
            <h2>قم بإنشاء حسابك</h2>
            <form>
              <div className="all-inputs">
                <div className="form-control">
                  <label>الأسم الأول</label>
                  <input type="text" />
                </div>
                <div className="form-control">
                  <label>الأسم الأخير</label>
                  <input type="text" />
                </div>
                <div className="form-control">
                  <label>بريدك الإلكتروني</label>
                  <input type="email" />
                </div>
                <div className="form-control">
                  <label>كلمة السر</label>
                  <input type="password" />
                </div>
              </div>
              <div className="agree">
                <p>
                  عند تسجيل حسابك فأنك توافق على
                  <span> شروط الأستخدام و سياسة الخصوصية </span>
                </p>
              </div>
              <button className="sign-btn">قم بإنشاء حسابك الآن</button>
              <div className="or">أو</div>
              <button className="sign-btn-google">
                قم بإنشاء حسابك عن طريق <img src={googleLogo} alt="google" />
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

export default SignUp;
