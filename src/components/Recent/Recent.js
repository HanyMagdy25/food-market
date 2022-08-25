import React from "react";
import CardLg from "../BestProducts/CardLg";
import best1 from "../../assets/images/best1.png";
import best2 from "../../assets/images/best2.png";
import best3 from "../../assets/images/best3.png";
import best8 from "../../assets/images/best8.jpg";
// import best9 from "../../assets/images/best9.jpg";
import best7 from "../../assets/images/best7.jpg";
import "./Recent.css";
const Recent = () => {
  return (
    <section className="recent-section">
      <div className="recent-section-container">
        <h3 className="best-title">وصل حديثا</h3>
        <div className="cardslg-div">
          <CardLg
            image={best7}
            title="حليب المراعي"
            price="25 ريال"
            vol="15 لتر"
          />
          <CardLg
            image={best3}
            title="برايمر fit me"
            price="25 ريال"
            vol="15 لتر"
          />
          <CardLg
            image={best8}
            title="قطع دجاج مقلية"
            price="25 ريال"
            vol="15 لتر"
          />
          <CardLg
            image={best7}
            title="حليب المراعي"
            price="25 ريال"
            vol="15 لتر"
          />
          <CardLg
            image={best3}
            title="حليب المراعي"
            price="25 ريال"
            vol="15 لتر"
          />
          <CardLg
            image={best2}
            title="برايمر fit me"
            price="25 ريال"
            vol="15 لتر"
          />
          <CardLg
            image={best1}
            title="قطع دجاج مقلية"
            price="25 ريال"
            vol="15 لتر"
          />
          <CardLg
            image={best8}
            title="حليب المراعي"
            price="25 ريال"
            vol="15 لتر"
          />
        </div>
      </div>
    </section>
  );
};

export default Recent;
