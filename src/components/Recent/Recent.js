import React from "react";
import CardLg from "../BestProducts/CardLg";
import "./Recent.css";
import { products } from "../../utils/data";
const Recent = () => {
  return (
    <section className="recent-section">
      <div className="recent-section-container">
        <h3 className="best-title">وصل حديثا</h3>
        <div className="cardslg-div">
          {products?.slice(0, 8)?.map((item, index) => (
            <CardLg item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recent;
