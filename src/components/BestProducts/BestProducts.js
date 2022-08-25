import React from "react";
import "./BestProducts.css";
import CardLg from "./CardLg";
import best1 from "../../assets/images/best1.png";
import best2 from "../../assets/images/best2.png";
import best3 from "../../assets/images/best3.png";
import best4 from "../../assets/images/best4.png";
import best5 from "../../assets/images/best5.png";
const BestProducts = () => {
  return (
    <div className="BestProducts-section">
      <div className="BestProducts-section-container">
        <h3 className="best-title">أفضل المنتجات</h3>
        <div className="cardslg-div">
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
            image={best3}
            title="حليب المراعي"
            price="25 ريال"
            vol="15 لتر"
          />
        </div>
        <div className="two-products-div">
          <div className="two-products-div-right">
            <img src={best4} alt="pro" />
            <div className="two-products-div-right-details">
              <h2>منتجات بقالة طازجة</h2>
              <p>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى
              </p>
              <button>تصفح الآن</button>
            </div>
          </div>

          <div className="two-products-div-left">
            <img src={best5} alt="pro" />
            <div className="two-products-div-left-details">
              <h2 style={{marginLeft:"20px"}}>خصم يصل إلى</h2>
              <h2 className="percent">30%</h2>
              <h2 style={{marginRight:"20px"}}>على المخبوزات</h2>
             
              <button>تصفح الآن</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestProducts;
